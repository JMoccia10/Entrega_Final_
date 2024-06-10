import Button from 'react-bootstrap/Button';
import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { saveDiscos, DiscoData } from '../../services';

interface Disco {
  titulo: string;
  artista: string;
  precio: number;
}

const CrearDiscos: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [titulo, setTitulo] = useState<string>("");
  const [artista, setArtista] = useState<string>("");
  const [precio, setPrecio] = useState<number>(0);
  // const [imagen, setImagen] = useState<File | null>(null);

  // const inputFileRef = useRef<HTMLInputElement | null>(null);

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     if (event.target.files && event.target.files[0]) {
  //         setImagen(event.target.files[0]);
  //     }
  // };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const discosData: DiscoData = {
      titulo,
      artista,
      precio,
      // imagen,
    };

    try {
      const response = await saveDiscos(discosData);
      if (response.status === 200) {
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      console.error("Error al guardar el disco:", error);
    }
  };


  return (
    <div>
      <Button type="button" onClick={handleShow} className="custom-button">Crear disco</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un disco</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group controlId="titulo" className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  placeholder="nombre"
                  name="titulo"
                  value={titulo}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => setTitulo(event.target.value)}
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="artista" className="mb-3">
                <Form.Label>Artista</Form.Label>
                <Form.Control
                  placeholder="artista"
                  name="artista"
                  value={artista}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => setArtista(event.target.value)}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group controlId="precio" className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="precio"
                name="precio"
                value={precio}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPrecio(Number(event.target.value))}
                required
              />
            </Form.Group>
            <Button type="submit">Agregar disco</Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button type="button" onClick={handleClose}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CrearDiscos;







{/* <Form.Group controlId="imagen">
                            <Form.Label>Seleccionar imagen</Form.Label>
                            <Form.Control type="file" ref={inputFileRef} onChange={handleFileChange} />
                        </Form.Group> */}
