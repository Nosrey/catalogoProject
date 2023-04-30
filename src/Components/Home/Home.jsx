// creo un nuevo componente llamado Home
import React from 'react';
// importo Carousel
import Carousel from '../Carousel/Carousel.jsx';

const Home = () => {
    return (
        <div className='flex align-center justify-center min-h-screen bg-myCustomColor'>

            <Carousel />
        </div>
    );
};

export default Home;
