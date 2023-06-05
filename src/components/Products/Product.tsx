
import { useState } from 'react'

import './style.css'

interface ProductProps {
    id: string,
    imageUrl: string
    name: string
    price: number
    removeIcon?: boolean
    onPlus?: (imageUrl: string, name: string, price: number) => void
}

function Product({ imageUrl, name, price, id, removeIcon }: ProductProps) {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setFavorite] = useState(false)

    const removeProduct = (id: any): any => {
        let local = JSON.parse(localStorage.getItem('products') || '[]')
        
        local = local.filter((i: any) => i.id !== id)
        localStorage.setItem('products', JSON.stringify(local))
    }

    const onClickPlus = () => {
        setIsAdded(!isAdded)
        let local = JSON.parse(localStorage.getItem('products') || '[]')
        const newProduct = {
            id: id,
            imageUrl: imageUrl,
            name: name,
            price: price
        }

        if (!local.find((i: any) => i.id === newProduct.id)) {
            local.push(newProduct)
            localStorage.setItem('products', JSON.stringify(local))
        }
    }


    const onClickFavorite = () => {
        if (isFavorite === false) {
            setFavorite(true)
        } else {
            setFavorite(false)
        }
    }

    return (
        <div className='prodact'>
            <div className='favorite' onClick={onClickFavorite}>
                <img src={isFavorite ? './images/heart-like.svg' : './images/heart-unliked.svg'} alt="unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="img" />
            <h5>{name}</h5>
            <div className='cardPrise'>
                <div>
                    <p>Цена:</p>
                    <b>{price} грн.</b>
                </div>
                {removeIcon ? <img src='./images/delete.svg' alt='remove' onClick={() => removeProduct(id)} /> : <img className='plus' width={32} height={32} src={isAdded ? './images/cheked.svg' : './images/plus.svg'} alt="sneaker" onClick={onClickPlus} />}
            </div>
        </div>
    )
}


export default Product
