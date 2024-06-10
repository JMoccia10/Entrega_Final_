import React, { useState, useEffect } from 'react';
import { getDiscos } from './services';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import Form1 from '../FormNews/FormNews';
import Footer from '../Footer/Footer';
import './Vinyl.css'

interface Disco {
    _id: string;
    titulo: string;
    artista: string;
    precio: number;
    imagen?: string;
}

const Vinyl = () => {
    const [discos, setDiscos] = useState<Disco[]>([]);

    useEffect(() => {
        async function cargaDiscos() {
            const response = await getDiscos();

            if (response && response.status === 200) {
                setDiscos(response.data);
            }
        }
        cargaDiscos();
    }, []);

    if (!discos.length) {
        return <div>Cargando contenido...</div>;
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <Container className='seccion'>
            <Carousel
                responsive={responsive}
                infinite={false}
                arrows
                autoPlay={false}
                className='productos'
                >
                {discos.map((disco, index) => (
                    <div key={index} className="carousel-item-container">
                        <Card className="carousel-card">
                            <div className="card-image-container">
                                <Card.Img variant="top" src={disco.imagen} className="card-image" />
                            </div>
                            <Card.Body>
                                <Card.Title>{disco.titulo}</Card.Title>
                                <Card.Text>{disco.artista}</Card.Text>
                                <Card.Text>${disco.precio}</Card.Text>
                                <Button variant="success">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Carousel>
            <Form1 />
            <Footer />
        </Container>
    );
}

export default Vinyl;