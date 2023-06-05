import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Product from "../components/Products/Product"



export function ShoppingCart() {
    const [products, setProducts] = useState([])

    useEffect(() => setProducts(JSON.parse(localStorage.getItem('products') || '[]')), [products])

    return (
        <div className="wrapper">
            <div className="content">
                <div className="contentWrapper">
                    <Link to='/'>
                        <h2>Delivery shop</h2>
                    </Link>
                    <div className="drawer">
                        <img src='./images/card.svg' alt="cart" />
                        <h1>Корзина</h1>
                    </div>
                </div>
                <div className="productsWrapper">
                    {products?.map((item: any) => (
                        <Product key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} removeIcon />
                    ))}
                </div>
            </div>
        </div>
    )
}