import React, { useState } from 'react'
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
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Кабинет</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
