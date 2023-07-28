import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import CarouselBox from "./CarouselBox";

export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div className='header'>
                <h1 className='header__logo'>Music Store</h1>
                <ul className="header__nav">
                    <FaShoppingCart 
                        onClick={() => {
                            setCartOpen(!cartOpen)
                            props.onShowModalOrder()
                        }} 
                        className={`header__cart-button`} 
                    />
                    <li>About Us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
            </div>
            <CarouselBox/>
        </header>
    )
}
