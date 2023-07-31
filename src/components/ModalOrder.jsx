import React, { useEffect } from 'react'
import Order from './Order';
import { IoClose } from 'react-icons/io5';


export default function ModalOrder(props) {
    const summa = props.orders.reduce((summa, order) => summa + order.price * order.count, 0);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <div className='modal-order' onClick={() => props.onShowModalOrder()}>
            <div className="modal-order__content" onClick={e => e.stopPropagation()}>
                { props.orders.length ? 
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
                            <button className="modal-order__button">К оформлению</button>
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
            
        </div>
    )
}