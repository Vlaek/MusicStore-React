import React, { Component } from 'react'
import { IoCart, IoClose } from 'react-icons/io5';

export class Modal extends Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = 'visible';
    }
    render() {
        return (
            <div className='modal-window' onClick={() => this.props.onShowModal(this.props.item)}>
                <div className='modal__content' onClick={e => e.stopPropagation()}>
                    <div className='modal__header'>
                        <img 
                            src={"./img/" + this.props.item.img} 
                            alt="img"
                            className='modal__img'
                        />
                        <div className="modal__information">
                            <h2 className='modal__title'>{this.props.item.title}</h2>
                            <p className='modal__author'>{this.props.item.author}</p>
                            <p className='modal__genre'>{this.props.item.category}</p>
                            <p className='modal__date'>{this.props.item.date}</p>
                            <div className='modal__price'>
                                <p>${this.props.item.price}</p>
                                <IoCart 
                                    className='add-to-cart'
                                    onClick={() => {
                                        this.props.onAdd(this.props.item)
                                        this.props.onShowModal(this.props.item)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <p className='modal__desc'>{this.props.item.desc}</p>
                    <div className="modal__tracklist">
                        {this.props.item.tracklist.map(track => (
                            <div className="modal__track" key={track.id}>
                                <p className="modal__track-id">{track.id}</p>
                                <p className="modal__track-name">{track.name}</p>
                                <div className="modal__track-duration">
                                    <p>{track.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <IoClose 
                        className='modal__btn-close'
                        onClick={() => this.props.onShowModal(this.props.item)}
                    />
                </div>
            </div>
        )
    }
}

export default Modal