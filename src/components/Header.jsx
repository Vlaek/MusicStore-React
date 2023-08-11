import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
                        <li>
                            <NavLink 
                                to='/' 
                                className='header__link' 
                                activeClassName='header__link active'
                            >Главная</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/about' 
                                className='header__link' 
                                activeClassName='header__link active'
                            >О нас</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/contacts' 
                                className='header__link' 
                                activeClassName='header__link active'
                            >Контакты</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/profile' 
                                className='header__link' 
                                activeClassName='header__link active'
                            >Кабинет</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
