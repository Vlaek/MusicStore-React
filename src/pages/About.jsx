import React, {useEffect} from 'react'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="container">
            <div className="greeting">
                <h1 className='greeting__text'>Рады приветствовать вас на сайте <span className='greeting__text red'>Music Store</span></h1>
            </div>
            <div className="description">
                <p className='description__text'>
                Добро пожаловать в наш интернет-магазин музыки! Мы - команда энтузиастов, которые любят и ценят качественную музыку. Наша история началась много лет назад, когда мы решили создать место, где любители музыки могут находить и покупать самые разные жанры и исполнителей.
                </p>
                <p className='description__text'>За все эти годы мы добились многих достижений и стали одним из самых популярных интернет-магазинов музыки. Наша коллекция включает в себя тысячи альбомов, сотни жанров и исполнителей со всего мира. Мы предлагаем только качественную музыку, которую мы сами слушаем и любим.</p>
                <div className="information">
                    <div className="information__item">
                        <div className="information__title">37 706 000</div>
                        <div className="information__text">оформленных заказов за все время!</div>
                    </div>
                    <div className="information__item">
                        <div className="information__title">153 525 434</div>
                        <div className="information__text">довольных клиентов по всему миру!</div>
                    </div>
                    <div className="information__item">
                        <div className="information__title">327 095</div>
                        <div className="information__text">исполнителей сотрудничают с нами!</div>
                    </div>
                </div>
                <p className="description__text">
                Мы гордимся тем, что можем предложить нашим клиентам не только широкий выбор музыки, но и отличный сервис. Мы всегда готовы помочь нашим клиентам с выбором альбома, ответить на вопросы и предоставить подробную информацию о продукте.
                </p>
                <p className="description__text">
                Наша команда состоит из профессионалов своего дела, которые постоянно совершенствуются и следят за новинками в музыкальной индустрии. Мы уверены, что наш интернет-магазин музыки - это место, где каждый найдет что-то для себя. Мы ценим каждого нашего клиента и стремимся предоставить только лучший сервис и продукт.
                </p>
                <p className="description__text">Благодарим вас за выбор нашего интернет-магазина музыки и надеемся, что вы останетесь довольны нашими услугами.</p>
            </div>
        </div>
    )
}

export default About