import React from 'react'
import { FaVk, FaTelegram, FaYoutube, FaTwitter, FaOdnoklassniki } from "react-icons/fa6";
import { YMaps, Map } from '@pbe/react-yandex-maps'

const Contacts = () => {
    return (
        <div className="container">
            <div className="contact-information">
                <h1 className="contact-information__title">Контактная информация</h1>
                <div className="contact-information__grid">
                    <div className="contact-information__item">
                        <div className="contact-information__item__title">Адрес</div>
                        <div className="contact-information__item__text">
                            <span>Наш офис расположен по адресу</span>
                            <p>Улица Музыкантов, дом 10. Почтовый адрес магазина: 123456, город Музыка, улица Музыкантов, дом 10.</p>
                            <span>Адрес нашего офиса во Франции</span>
                            <p>10 Rue des Musiciens, 75001 Paris Адрес для почты: 123456, ville de Musique, 10 Rue des Musiciens, 75001 Paris.</p>
                            <span>Обратите внимание</span>
                            <p>Французский офис открыт только для сотрудников и официальных партнеров компании. Мы не принимаем посетителей и не проводим экскурсий. Присутствие посторонних на территории офиса (вне холла) запрещено.</p>
                        </div>
                    </div>
                    <div className="contact-information__item">
                        <div className="contact-information__item__title">Через интернет</div>
                        <div className="contact-information__item__text">
                            <span>Служба поддержки</span>
                            <p>Конактную информацию службы поддержкит вы найдете <div className='contact-information__item__link'>здесь</div>.</p>
                            <span>Пресса</span>
                            <p>Контактную информацию для журналистов вы найдете <div className='contact-information__item__link'>здесь</div>.</p>
                            <span>Почтовый адрес</span>
                            <div className='contact-information__item__address'>
                                <p>MusicStore SAS</p>
                                <p>BP 12345</p>
                                <p>Ville de Musique</p>
                                <p>10 Rue des Musiciens</p>
                                <p>75001 Paris</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-information__item">
                        <div className="contact-information__item__title">В соцсетях</div>
                        <div className="contact-information__item__text">
                            <div className='contact-information__item__link-media'>
                               <FaTelegram/><p>Telegram</p>
                            </div>
                            <div className='contact-information__item__link-media'>
                               <FaVk/><p>ВКонтакте</p>
                            </div>
                            <div className='contact-information__item__link-media'>
                               <FaYoutube/><p>YouTube</p>
                            </div>
                            <div className='contact-information__item__link-media'>
                               <FaTwitter/><p>Twitter</p>
                            </div>
                            <div className='contact-information__item__link-media'>
                               <FaOdnoklassniki/><p>Одноклассники</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-map">
                    <YMaps>
                        <div>
                            <Map className='contact-map__item' defaultState={{ center: [48.85, 2.35], zoom: 9 }} />
                        </div>
                    </YMaps>
                </div>
                <form className='contact-form'>
                    <div className="contact-form__title">Оставьте свой вопрос, и мы свяжемся с вами!</div>
                    <div className="contact-form__item">
                        <div className="contact-form__content">
                            <div>
                                <input type="text" className="contact-form__input" placeholder='Ваше имя'/>
                                <input type="text" className="contact-form__input" placeholder='Ваш номер телефона'/>
                            </div>
                            <div>
                                <textarea className='contact-form__textarea' placeholder='Ваш вопрос'></textarea>
                            </div>
                        </div>
                        <button className="contact-form__btn">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts