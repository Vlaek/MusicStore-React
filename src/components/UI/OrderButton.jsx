import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const OrderButton = (props) => {
    return (
        <div className="modal-order__item__count">
            <FaMinus 
                className='modal-order__item__count__btn'
                onClick={() => props.onRemove(props.item)}
            />
            <p>{props.item.count}</p>
            <FaPlus 
                className='modal-order__item__count__btn'
                onClick={() => props.onAdd(props.item)}
            />
        </div>
    )
}

export default OrderButton