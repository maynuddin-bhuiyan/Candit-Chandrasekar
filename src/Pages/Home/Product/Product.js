import React from 'react';
import useData from '../../Usedata/useData';
import Products from '../Products/Products';
import './Product.css';

const Product = () => {
    const [product] = useData([]);

    return (
        <div>
            <h1> Create a solution... </h1>

            <div className="Product">

                {
                    product.map(product => <Products

                        key={product._id}
                        product={product}

                    />)
                }
            </div>
        </div>
    );
};

export default Product;