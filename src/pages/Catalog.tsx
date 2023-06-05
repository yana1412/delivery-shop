import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Product from '../components/Products/Product'
import { IProduct } from '../modals'

import '../styles/main.css'

interface CatalogProps {
    products: IProduct[]
}

export default function Catalog({ products }: CatalogProps) {
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const onChangrSearchInput = (event: any) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className="wrapper">
            <Header />
            <div className='content'>
                <div className='contentWrapper'>
                    <h2>Список товарів</h2>
                    <div className='searchWrapper'>
                        <img src='./images/seach.svg' alt="search" />
                        <input onChange={onChangrSearchInput} value={searchValue} type="text" placeholder='Поиск...' />
                    </div>
                </div>
                <div className='shops'>
                    {products
                        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map(item => (
                            <Product
                                key={item.name}
                                id={item.id}
                                imageUrl={item.imageUrl}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}