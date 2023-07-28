import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
    render() {
        return (
            <div className='modal-order__item'>
                <img 
                    className='modal-order__img'
                    src={"./img/" + this.props.item.img} 
                    alt="img"
                    onClick={() => this.props.onShowModal(this.props.item)}
                />
                <div className='modal-order__item__body'>
                    <p className='modal-order__item__title' title={this.props.item.title}>{this.props.item.title}</p>
                    <p className='modal-order__item__author'>{this.props.item.author}</p>
                    <p className='modal-order__item__price'>${this.props.item.price}</p>
                    <FaTrash 
                        className='modal-order__item__delete-btn' 
                        onClick={() => this.props.onDelete(this.props.item.id)}
                    />
                </div>
                
            </div>
        )
    }
}

export default Order