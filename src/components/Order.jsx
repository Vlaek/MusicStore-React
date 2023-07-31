import React, { Component } from 'react'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

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
                    <div className="modal-order__item__count">
                        <FaMinus 
                            className='modal-order__item__count__btn'
                            onClick={() => this.props.onRemove(this.props.item)}
                        />
                        <p>{this.props.item.count}</p>
                        <FaPlus 
                            className='modal-order__item__count__btn'
                            onClick={() => this.props.onAdd(this.props.item)}
                        />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Order