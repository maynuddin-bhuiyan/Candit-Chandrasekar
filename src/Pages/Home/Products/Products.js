import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import './Products.css';

const Products = (props) => {
    console.log(props.product);

    const { image, name, price, productId, stock, degeneration } = props.product;


    return (

        <div className="Products">

            <Card className="Product" sx={{ maxWidth: 330 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h3" component="h2">
                        Price: {price}
                    </Typography>

                    <Typography variant="h5" component="h2">
                        ProductId: {productId}
                    </Typography>

                    <Typography variant="h4" component="h2">
                        Stock: {stock}
                    </Typography>

                </CardContent>
                <CardActions>

                    <Typography variant="body2" color="text.secondary">
                        {degeneration}
                    </Typography>


                </CardActions>

            </Card>
        </div>

    );
};

export default Products;