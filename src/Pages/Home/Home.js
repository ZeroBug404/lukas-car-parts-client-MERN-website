import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Banner2 from './Banner2';
import Special3Service from './Special3Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Special3Service></Special3Service>
            <Banner2></Banner2>
            <Products></Products>
        </div>
    );
};

export default Home;