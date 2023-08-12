import React, { Component } from 'react'
import { IoCart, IoHeart } from 'react-icons/io5';

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img 
                    className='item__img'
                    src={require(`../../public/img/${this.props.item.img}`)} 
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
                    <p>${this.props.item.price}</p>
                    <div className="item__btn-list">
                        <IoHeart
                            className={`item__btn-like ${this.props.like && 'active'}`}
                            onClick={() => this.props.onLike(this.props.item)}
                        />
                        <IoCart 
                            className={`item__btn-cart ${this.props.order && 'active'}`}
                            onClick={() => this.props.onAdd(this.props.item)}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Item