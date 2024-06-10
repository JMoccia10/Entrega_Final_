import React, { useState, useEffect, ChangeEvent } from 'react';
import { getDiscos, deleteDisco } from '../../services';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

interface Disco {
    _id: string;
    titulo: string;
    artista: string;
    precio: number;
}

const BorrarDiscos: React.FC = () => {
    const [discos, setDiscos] = useState<Disco[]>([]);
    const [discoSel, setDiscoSel] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

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

    const handleSelDisco = (event: ChangeEvent<HTMLSelectElement>) => {
        setDiscoSel(event.target.value);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        if (discoSel) {
            const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este disco?");
            if (confirmDelete) {
                try {
                    const response = await deleteDisco(discoSel);
                    if (response.status === 200) {
                        setDiscos(prevDiscos => prevDiscos.filter(disco => disco._id !== discoSel));
                        setDiscoSel('');
                        handleClose();
                        window.location.reload();
                    }
                } catch (error) {
                    console.error("Error al eliminar el disco:", error);
                }
            }
        } else {
            alert("Por favor, selecciona un disco para eliminar.");
        }
    };

    return (
        <div>
            <Button type="button" onClick={handleShow} className="custom-button">Borrar disco</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrar un disco</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group controlId="titulo">
                                <Form.Select value={discoSel} onChange={handleSelDisco}>
                                    <option value="">Seleccionar un Disco</option>
                                    {discos.map((disco) => (
                                        <option key={disco._id} value={disco._id}>
                                            {disco.titulo} - {disco.artista}, ${disco.precio}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={handleDelete} disabled={!discoSel}>Borrar disco</Button>
                    <Button type="button" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BorrarDiscos;



