import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order';
import CarouselBox from "./CarouselBox";

const showOrders = (props) => {
    const summa = props.orders.reduce((summa, order) => summa + order.price, 0);
    return (
        <div>
            {props.orders.map(order => (
                <Order onDelete={props.onDelete} key={order.id} item={order} />
            ))}
            <p className='summa'>
                Сумма: {new Intl.NumberFormat().format(summa)}$
            </p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <p>Товаров нет</p>
        </div>
    )
}

export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div className='header'>
                <h1 className='header__logo'>Music Store</h1>
                <ul className="header__nav">
                    <FaShoppingCart 
                        onClick={() => setCartOpen(!cartOpen)} 
                        className={`header__cart-button ${cartOpen && 'active'}`} 
                    />
                    <li>About Us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <CarouselBox/>
        </header>
    )
}
