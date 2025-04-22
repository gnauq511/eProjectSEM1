import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import './style2.css';
import './footer.css';
import data from "../data/data.json";

function Products() {
    const { categories, products } = data;
    const { searchQuery } = useOutletContext(); // Nhận searchQuery từ Context
    const [catclick, setCatclick] = useState(null); // Lưu danh mục được chọn

    // Xử lý khi click vào danh mục
    function clickCategory(id, e) {
        e.preventDefault();
        setCatclick(id);
    }

    const filteredProducts = products.filter(product =>
        (catclick === null || product.categories === catclick) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="row">
                
                <div className="col-md-2">
                    <div className='panel panel-primary sidebar'>
                        <ul className='list-group'>
                            <li
                                className={`list-group-item ${catclick === null ? 'active-category' : ''}`}
                                onClick={(e) => clickCategory(null, e)}
                                style={{ cursor: "pointer" }}
                            >
                                All Products
                            </li>
                            {categories.map((cat) => (
                                <li
                                    key={cat.id}
                                    onClick={(e) => clickCategory(cat.id, e)}
                                    className={`list-group-item ${catclick === cat.id ? 'active-category' : ''}`}
                                    style={{ cursor: "pointer" }}
                                >
                                    {cat.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Danh sách sản phẩm */}
                <div className="col-md-10">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <div className="col" key={product.id}>
                                    <div className="card h-100">
                                        <img src={product.image} className="card-img-top" alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.price}</p>
                                            <Link to={`/product/${product.id}`} className="btn btn-dark mt-auto w-100">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No products f.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
