import React, { useState, useEffect } from 'react';
import { getDiscos } from '../Vinyl/services';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ActDiscos from './cruds/discos/actDiscos';
import BorrarDiscos from './cruds/discos/borrarDiscos';
import CrearDiscos from './cruds/discos/crearDiscos';
import Footer from '../Footer/Footer';
import './admDiscos.css';

interface Disco {
    _id: string;
    titulo: string;
    artista: string;
    precio: number;
}

const AdmDiscos: React.FC = () => {
    const [discos, setDiscos] = useState<Disco[]>([]);

    useEffect(() => {
        async function cargaDiscos() {
            try {
                const response = await getDiscos();

                if (response && response.status === 200) {
                    setDiscos(response.data);
                } else {
                    console.log("Error al cargar los discos:", response);
                }
            } catch (error) {
                console.log("Error al cargar los discos:", error);
            }
        };

        cargaDiscos();

    }, []);

    if (!discos.length) {
        return <div>Cargando contenido...</div>;
    }

    return (
        <>
            <Container>
                <div className="button-container">
                    <CrearDiscos />
                    <ActDiscos />
                    <BorrarDiscos />
                </div>
            </Container>
            
            <Container>
                <div className="cards-container">
                {discos.map(({ _id, titulo, artista, precio }) => (
                    <ListGroup key={_id}>
                        <ListGroup.Item>
                            <div>
                                <div>Artista:</div>
                                <h3>{artista}</h3>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                                <div>Titulo:</div>
                                {titulo}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                                <div>Precio:</div>
                                {precio}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default AdmDiscos;

