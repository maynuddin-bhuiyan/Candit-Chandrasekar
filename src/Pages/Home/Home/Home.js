import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Product></Product>
            <Footer></Footer>
        </div>
    );
};

export default Home;