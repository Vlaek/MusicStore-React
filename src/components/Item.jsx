import React, { Component } from 'react'
import { IoCart } from 'react-icons/io5';

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img 
                    className='item__img'
                    src={"./img/" + this.props.item.img} 
                    alt="img"
                    onClick={() => this.props.onShowModal(this.props.item)}
                />
                <h2 
                    className='item__title'
                    onClick={() => this.props.onShowModal(this.props.item)}
                    title={this.props.item.title}
                >
                    {this.props.item.title}
                </h2>
                <p className='item__author'>
                    {this.props.item.author}
                </p>
                
                <div className="item__price">
                    <p>
                        ${this.props.item.price}
                    </p>
                    <IoCart 
                        className='item__cart-button'
                        onClick={() => this.props.onAdd(this.props.item)}
                    />
                </div>

            </div>
        )
    }
}

export default Item