import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header>
            <div className='header'>
                <div className="header__container">
                    <h1 className='header__logo' onClick={() => scrollToTop()}>Music Store</h1>
                    <ul className="header__nav">
                        <FaShoppingCart 
                            onClick={() => {
                                setCartOpen(!cartOpen)
                                props.onShowModalOrder()
                            }} 
                            className={`header__btn-cart ${props.orders.length && 'active'}`} 
                        />
                        <li><Link to='/' className='header__link'>Главная</Link></li>
                        <li><Link to='/about' className='header__link'>О нас</Link></li>
                        <li><Link to='/contacts' className='header__link'>Контакты</Link></li>
                        <li><Link to='/contacts' className='header__link'>Кабинет</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
