import { useState, useEffect } from "react";

const useData = () => {
    //State Declare
    const [product, setProduct] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('https://secret-bayou-48600.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    },
        []);

    return [product, setProduct]
}

export default useData;