import React, { FC, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { IoClose } from 'react-icons/io5';
import Order from './Order';
import { IAdd, IOrder, IShowModalOrder, IShowModal, IRemove, IDelete, IMakeOrder, IClearOrder } from './../types/types';

interface ModalOrderProps {
    showModalOrder: boolean
    orders: IOrder[]
    onShowModalOrder: IShowModalOrder
    onAdd: IAdd
    onRemove: IRemove
    onDelete: IDelete
    onShowModal: IShowModal
    onMakeOrder: IMakeOrder
    onClear: IClearOrder
}

const ModalOrder: FC<ModalOrderProps> = (props) => {
    const summa = props.orders.reduce((summa, order) => summa + order.price * order.count, 0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!props.showModalOrder) {
            setIsOpen(false)
            document.body.style.overflow = 'visible';
        }
        else {
            document.body.style.overflow = 'hidden';
        }
    }, [props.showModalOrder])

    return (
        <CSSTransition
            timeout={100}
            in={props.showModalOrder}
            unmountOnExit
            classNames='modal-order'
            onEntered={() => setIsOpen(true)}
        >
            <div className='modal-order' onClick={() => {
                props.onShowModalOrder()}} >
                <CSSTransition
                    in={isOpen}
                    timeout={200}
                    classNames='modal-order__content'
                >
                <div className="modal-order__content" onClick={e => e.stopPropagation()}>
                {props.showModalOrder &&
                    <div style={{height: '100%'}}>
                        {props.orders.length 
                        ? 
                        <div className='modal-order__container'> 
                            <div className="modal-order__header">
                                <p className='summa'>
                                    Сумма: ${new Intl.NumberFormat().format(summa)}
                                </p>
                            </div>
                            <div className="modal-order__body">
                                {props.orders.map(order => (
                                    <Order 
                                        key={order.id} 
                                        item={order} 
                                        onAdd={props.onAdd}
                                        onRemove={props.onRemove}
                                        onDelete={props.onDelete} 
                                        onShowModal={props.onShowModal}
                                    />
                                ))}
                            </div>
                            <div className="modal-order__footer">
                                <button 
                                    className="modal-order__button" 
                                    onClick={() => {
                                        props.onMakeOrder(props.orders, summa)
                                        props.onClear()
                                    }}
                                >К оформлению</button>
                            </div>
                        </div>
                        :
                        <div className='modal-order__empty'>
                            <p className='modal-order__empty__title'>Ой, пусто!</p>
                            <p className='modal-order__empty__text'>Ваша корзина пуста, откройте "Меню" и выберите понравившийся товар.</p>
                        </div>
                        }
                        <IoClose 
                            className='modal-order__btn-close'
                            onClick={() => props.onShowModalOrder()}
                        />
                    </div>
                    }
                </div>
                </CSSTransition>
            </div>
        </CSSTransition>
    )
}

export default ModalOrder