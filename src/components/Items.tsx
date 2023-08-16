import React, { FC } from 'react'
import Item from './Item'
import { IAlbum, IOrder, IAdd, ILike, IShowModal } from './../types/types';

interface ItemsProps {
    items: IAlbum[]
    likes: IAlbum[]
    orders: IOrder[]
    onAdd: IAdd
    onLike: ILike
    onShowModal: IShowModal
}

const Items: FC<ItemsProps> = (props) => {
    return (
        <main>
            {props.items.length 
            ?
            <div className='item-list'>
                {props.items.map(item => (
                    <Item 
                        key={item.id} 
                        item={item} 
                        like={props.likes.some(like => like.id === item.id)}
                        order={props.orders.some(order => order.id === item.id)}
                        onAdd={props.onAdd}
                        onLike={props.onLike}
                        onShowModal={props.onShowModal}
                    />
                ))}
            </div>
            : 
            <div className='item-list_empty'>
                <p className='item-list_empty__title'>К сожалению, таких товаров не найдено :(</p>
                <p className='item-list_empty__subtitle'>Попробуйте поиск по другому параметру</p>
            </div>
            }
        </main>
    )
}

export default Items