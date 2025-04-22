import React from 'react';
import { Link } from "react-router-dom";
import './style2.css';
import './style3.css';
import data from "../data/data.json";

function Products(){
    const { products } = data;
    const saleProducts = products.filter((product) => Number(product.sale) === 1);
    const newProducts = products.filter((product) => Number(product.sale) === 2);
    return (
        <div>
            <section class="main-home">

                <div class="main-text">
                        <h1>New winter <br/> Collection</h1>
                        <p>CHECK OUT OUR NEWEST DESIGNS</p>
                        <a href="categories" class="main-btn" style={{textDecoration:"none"}} >shop <i class="fa-solid fa-arrow-right"></i> </a>
                </div>         
            </section>
            <br></br>
            <h1>Best seller</h1>
            <br></br>
            <div className="row row-cols-1 row-cols-md-4 g-4">     
                {saleProducts.length > 0 ? (
                    saleProducts.map(product => (
                        <div className="col" key={product.id}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt={product.name} style={{ width: '100%', height: '200px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.price}</p>
                                    <Link to={`/product/${product.id}`} className="btn btn-dark">Detail</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No products found.</p>
                )}
            </div>
            <h1>New product</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">     
                {newProducts.length > 0 ? (
                    newProducts.map(product => (
                        <div className="col" key={product.id}>
                            <div className="card h-200">
                                <img src={product.image} className="card-img-top" alt={product.name} style={{ width: '100%', height: '200px' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.price}</p>
                                    <Link to={`/product/${product.id}`} className="btn btn-dark">Detail</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No products found.</p>
                )}
            </div>
        </div>
    );
}

export default Products;
