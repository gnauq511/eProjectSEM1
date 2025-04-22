import React from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/data.json";

const { products } = data;
const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2 className="text-center">Product not found</h2>;
    }

    return (
        <div className="container product-detail" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <div className="product-content">
                <img src={`/${product.image}`} alt={product.name} className="product-image" style={{ width: '400px', height: 'auto', border: '2px solid black', borderRadius:'2%' }} />
                <div className="product-info" style={{ float: 'right', width: '700px' }}>
                    <h1>{product.name}</h1>
                    <p style={{ textAlign:'justify'}}>{product.description}</p>
                    <h3>Price: {product.price}</h3>
                    <a href="#" className="btn btn-dark" style={{ marginRight: '10px' }}>L</a>
                    <a href="#" className="btn btn-dark" style={{ marginRight: '10px' }}>XL</a>
                    <a href="#" className="btn btn-dark" style={{ marginRight: '10px' }}>XXL</a>

                    <br></br>
                    <a href="#" className="btn btn-dark" style={{ marginTop:'10px',marginRight: '10px' }}>Add to cart</a>
                    <a href="#" className="btn btn-dark" style={{ marginTop:'10px'}}>Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;