import {Link} from "react-router-dom"
import './style.css'
import { IShopProps } from '../../modals'


export default function CardShop({ imgUrl, name, shopUrl }: IShopProps) {
    return (
        <Link to={shopUrl}>
            <div className='cardWrapper'>
                <img src={imgUrl} alt="shop" />
                <h3>{name}</h3>
            </div>
        </Link>
    )
}