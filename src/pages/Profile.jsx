import React, {useContext} from 'react'
// import Item from '../components/Item';
import Tabs from '../components/Tabs'
import { OrdersContext } from '../context/context';
import profilePhoto from '../img/Vlek.jpg'

const Profile = () => {
    const {likes, likeItem, onShowModal} = useContext(OrdersContext);
    const tabs = [
        {
            title: 'Мои данные',
            content: (
                <div className='profile'>
                    <div className="profile__title">Мои данные</div>
                    <div className="profile__content">
                        <div className='first'>
                            <div className="profile__img">
                                <img src={profilePhoto} alt="profile-photo" />
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
                            <div className="profile__input">Россия, Юрга, Мира, 17</div>

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
                <div className='likes'>
                    <div className="likes__title">Мои отложенные</div>
                    {likes.map(like => (
                        <div key={like.id}>{like.title}</div>
                    ))}
                        {/* {this.props.items.map(item => (
                            <Item 
                                key={item.id} 
                                item={item} 
                                like={this.props.likes.includes(item.id)}
                                onAdd={this.props.onAdd}
                                onLike={this.props.onLike}
                                onShowModal={this.props.onShowModal}
                            />
                        ))} */}
                </div>
            )
        },
        {
            title: 'Мои заказы',
            content: '131'
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