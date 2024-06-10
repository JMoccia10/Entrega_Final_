import React, { useState, useEffect } from 'react';
import { getDiscos, updateDiscos } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Disco {
    _id: string;
    titulo: string;
    artista: string;
    precio: number;
}

function ActDiscos() {
    const [discos, setDiscos] = useState<Disco[]>([]);
    const [discoSel, setDiscoSel] = useState<string>("");
    const [datosDisco, setDatosDisco] = useState<Disco>({ _id: '', titulo: '', artista: '', precio: 0 });

    useEffect(() => {
        async function cargaDiscos() {
            try {
                const response = await getDiscos();
                if (response.status === 200) {
                    
                    const discosData: Disco[] = response.data.map((disco: any) => ({
                        _id: disco._id,
                        titulo: disco.titulo,
                        artista: disco.artista,
                        precio: disco.precio
                    }));
                    setDiscos(discosData);
                }
            } catch (error) {
                console.error("Error al cargar los discos:", error);
            }
        }
        cargaDiscos();
    }, []);

    const handleSelDisco = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDisco = discos.find((disco) => disco._id === event.target.value);
        if (selectedDisco) {
            setDiscoSel(event.target.value);
            setDatosDisco(selectedDisco);
        }
    };

    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async () => {
        const confirmActualizar = window.confirm("¿Estás seguro de que deseas actualizar este Disco?");
        if (confirmActualizar) {
            try {
                const response = await updateDiscos(discoSel, datosDisco);
                if (response.status === 200) {
                    setDiscos(prevDiscos =>
                        prevDiscos.map(disco =>
                            disco._id === discoSel ? datosDisco : disco
                        )
                    );
                    handleClose();
                    window.location.reload();
                }
            } catch (error) {
                console.error("Error al actualizar el disco:", error);
            }
        }
    };

    return (
        <div>
            <Button type="button" onClick={handleShow} className="custom-button">Actualizar disco</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar un Disco</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="Disco">
                            <Form.Label>Seleccionar Disco</Form.Label>
                            <Form.Select value={discoSel} onChange={handleSelDisco}>
                                <option>Seleccionar un Disco</option>
                                {discos.map(disco => (
                                    <option key={disco._id} value={disco._id}>
                                        {disco.titulo} - {disco.artista}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        {discoSel && (
                            <div>
                                <Form.Group controlId="nombre">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control defaultValue={datosDisco.titulo || ''} name='titulo' onChange={(event) => { setDatosDisco({ ...datosDisco, titulo: event.target.value }); }} />
                                    <Form.Label>Artista</Form.Label>
                                    <Form.Control defaultValue={datosDisco.artista || ''} name='artista' onChange={(event) => { setDatosDisco({ ...datosDisco, artista: event.target.value }); }} />
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control defaultValue={datosDisco.precio || ''} name='precio' onChange={(event) => { setDatosDisco({ ...datosDisco, precio: parseFloat(event.target.value) }); }} />
                                </Form.Group>
                            </div>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={handleSubmit}>Actualizar Disco</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActDiscos;


