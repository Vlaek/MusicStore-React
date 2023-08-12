import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import OrderButton from './UI/OrderButton'

export class Order extends Component {
    render() {
        return (
            <div className='modal-order__item'>
                <img 
                    className='modal-order__img'
                    src={require(`../../public/img/${this.props.item.img}`)} 
                    alt="img"
                    onClick={() => this.props.onShowModal(this.props.item)}
                />
                <div className='modal-order__item__body'>
                    <p 
                        className='modal-order__item__title' 
                        title={this.props.item.title}
                        onClick={() => this.props.onShowModal(this.props.item)}
                    >
                        {this.props.item.title}
                    </p>
                    <p className='modal-order__item__author'>{this.props.item.author}</p>
                    <p className='modal-order__item__price'>${this.props.item.price}</p>
                    <FaTrash 
                        className='modal-order__item__delete-btn' 
                        onClick={() => this.props.onDelete(this.props.item.id)}
                    />
                    <OrderButton 
                        item={this.props.item} 
                        onAdd={this.props.onAdd} 
                        onRemove={this.props.onRemove}
                    />
                </div>
                
            </div>
        )
    }
}

export default Order