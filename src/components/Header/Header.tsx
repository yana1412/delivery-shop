import { Link } from 'react-router-dom'
import './style.css'


export default function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <h1>Delivery shop</h1>
            </Link>
            <Link to='/drawer'>
                <img src='./images/card.svg' alt="cart" />
            </Link>

        </div>
    )
}