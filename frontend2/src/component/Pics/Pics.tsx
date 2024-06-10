// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
// import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-multi-carousel';
// import './Pics.css'

// const Pics: React.FC = () => {
//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 1
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 1
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 1
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };

//     const images: string[] = [
//         '/img/carousel 1.png',
//         '/img/carousel 2.png',
//         '/img/carousel 3.png',
//         '/img/carousel 4.jpg'
//     ];

//     return (
//         <Container className='pics'>
//             <Carousel
//                 responsive={responsive}
//                 infinite={true}
//                 arrows={false}
//                 autoPlay={true}
//                 className='fotos'
//             >
//                 {images.map((src, index) => (
//                     <div key={index} className="carousel-pics-container">
//                         <Card className="carousel-pic">
//                             <div className="card-pic-container">
//                                 <Card.Img variant="top" src={src} className="card-pic" />
//                             </div>
//                         </Card>
//                     </div>
//                 ))}
//             </Carousel>
//         </Container>
//     );
// }

// export default Pics;

export {};