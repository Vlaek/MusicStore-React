import React, {useState, useRef, FC} from 'react'
import { CSSTransition } from 'react-transition-group';
import { FaTrash } from 'react-icons/fa'
import OrderButton from './UI/OrderButton'
import { IAdd, IAlbum, IDelete, IRemove, IShowModal } from './../types/types';

interface OrderProps {
    item: IAlbum
    onShowModal: IShowModal
    onDelete: IDelete
    onAdd: IAdd
    onRemove: IRemove
}

const Order: FC<OrderProps> = (props) => {
    const [show, setShow] = useState(true);
    const myRef = useRef(null);
    return (
        <CSSTransition 
            in={show} 
            timeout={300}
            classNames='alert'
            nodeRef={myRef}
        >
            <div className='modal-order__item' ref={myRef}>
                <img 
                    className='modal-order__img'
                    src={require(`../../public/img/${props.item.img}`)} 
                    alt="img"
                    onClick={() => props.onShowModal(props.item)}
                />
                <div className='modal-order__item__body'>
                    <p 
                        className='modal-order__item__title' 
                        title={props.item.title}
                        onClick={() => props.onShowModal(props.item)}
                    >
                        {props.item.title}
                    </p>
                    <p className='modal-order__item__author'>{props.item.author}</p>
                    <p className='modal-order__item__price'>${props.item.price}</p>
                    <FaTrash 
                        className='modal-order__item__delete-btn' 
                        onClick={() => {
                            setShow(false)
                            setTimeout(() => {
                                props.onDelete(props.item.id)
                            }, 300);
                        }}
                    />
                    <OrderButton 
                        item={props.item} 
                        onAdd={props.onAdd} 
                        onRemove={props.onRemove}
                    />
                </div>
            </div>
        </CSSTransition>
    )
}

export default Order