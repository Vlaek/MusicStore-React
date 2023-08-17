import React, {FC, useState, useContext, useEffect} from 'react'
import Tabs from '../components/Tabs'
import { OrdersContext } from '../context/context';
import profilePhoto from '../img/Vlek.jpg'
import Accordion from '../components/Accordion';
import LikeItem from '../components/LikeItem';
import { IOrdersContext } from './../types/types';

const Profile: FC = () => {
    const {likes, ordersHistory, likeItem, onShowModal, addToOrder, setLikes} = useContext(OrdersContext) as IOrdersContext;
    const [draggableItem, setDraggableItem] = useState<number>(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const tabs = [
        {
            title: 'Мои данные',
            content: (
                <div className='profile'>
                    <div className="profile__title">Мой профиль</div>
                    <div className="profile__content">
                        <div className='first'>
                            <div className="profile__img">
                                <img src={profilePhoto} alt="profile" />
                            </div>
                            <div className="profile__btn">Редактировать</div>
                            <div className="profile__btn">Выйти</div>
                            <div className="profile__btn">Удалить</div>
                        </div>
                        <div className='second'>
                            <div className="profile__label">Имя пользователя</div>
                            <div className="profile__input">Владислав Эйхвальд</div>

                            <div className="profile__label">Электронная почта</div>
                            <div className="profile__input">vlek@music-store.com</div>

                            <div className="profile__label">Номер телефона</div>
                            <div className="profile__input">88005553535</div>

                            <div className="profile__label">Адрес</div>
                            <div className="profile__input">10 Rue de la Paix, 75002 Paris, France</div>

                            <div className="profile__label">Почтовый индекс</div>
                            <div className="profile__input">12345</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Мои отложенные',
            content: (
                <div className='profile-items'>
                    {likes.length > 0 
                        ? 
                        <div className="profile-items_list">
                            {likes.map((like, index) => (
                                <LikeItem 
                                    like={like} 
                                    draggableItem={draggableItem}
                                    setDraggableItem={setDraggableItem}
                                    likes={likes}
                                    index={index}
                                    key={like.id}
                                    onLike={likeItem}
                                    onAddToOrder={addToOrder}
                                    onShowModal={onShowModal}
                                    setLikes={setLikes}
                                />
                            ))}
                        </div>
                        :
                        <div className='profile-items__empty'>Пусто :(</div>
                    }
                </div>
            )
        },
        {
            title: 'Мои заказы',
            content: (
                <div className="orders-history">
                    {ordersHistory.length > 0 
                    ?
                    ordersHistory.map(order => (
                        <div key={order.date}>
                            <Accordion 
                                header={
                                <div className='orders-history__header'>
                                    <div className='orders-history__order'>Заказ №<b>{order.id}</b> от <b>{order.date}</b>. </div>
                                    <div className='orders-history__payment'>К оплате: <b>${Math.ceil(order.price * 100) / 100}</b></div>
                                </div>
                                } 
                                content={
                                <div>
                                    <div className="profile-items__list-2">
                                        {order.order.map(item => (
                                            <div key={item.id} className='profile-items__item gray'>
                                            <div className="profile-items__img">
                                                <img 
                                                    src={require(`../../public/img/${item.img}`)} 
                                                    alt="img" 
                                                    onClick={() => onShowModal(item)}
                                                />
                                            </div>
                                            <div className="profile-items__content">
                                                <h2 
                                                    className="profile-items__title"
                                                    onClick={() => onShowModal(item)}
                                                >{item.title}</h2>
                                                <p className="profile-items__author">{item.author}</p>
                                                <div className="profile-items__price">
                                                    <p>${item.price} x {item.count}</p>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                }
                            />
                        </div>
                    ))
                    :
                    <div className='profile-items__empty'>Пусто :(</div>
                    }
                </div>
            )
        },
    ]
    return (
        <div className='container'>
            <div className="cabinet">
                <h1 className='cabinet__title'>Личный кабинет</h1>
                <Tabs tabs={tabs}/>
            </div>
        </div>
    )
}

export default Profile