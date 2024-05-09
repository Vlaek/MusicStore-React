import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames'
import styles from './About.module.scss'
import CountUp from 'react-countup'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content='music store react page about us' />
        <title>Music Store - О нас</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <h1 className={styles.greeting__text}>
            Рады приветствовать вас на сайте
            <span className={classNames(styles.greeting__text, styles.red)}> Music Store</span>
          </h1>
        </div>
        <div className={styles.description}>
          <p className={styles.description__text}>
            Добро пожаловать в наш интернет-магазин музыки! Мы - команда энтузиастов, которые любят
            и ценят качественную музыку. Наша история началась много лет назад, когда мы решили
            создать место, где любители музыки могут находить и покупать самые разные жанры и
            исполнителей.
          </p>
          <div className={styles.information}>
            <div className={styles.information__item}>
              <div className={styles.information__title}>
                <CountUp start={0} end={153525434} duration={3} />
              </div>
              <div className={styles.information__text}>оформленных заказов за все время!</div>
            </div>
            <div className={styles.information__item}>
              <div className={styles.information__title}>
                <CountUp start={0} end={37706000} duration={3} />
              </div>
              <div className={styles.information__text}>довольных клиентов по всему миру!</div>
            </div>
            <div className={styles.information__item}>
              <div className={styles.information__title}>
                <CountUp start={0} end={327095} duration={3} />
              </div>
              <div className={styles.information__text}>исполнителей сотрудничают с нами!</div>
            </div>
          </div>
          <p className={styles.description__text}>
            За все эти годы мы добились многих достижений и стали одним из самых популярных
            интернет-магазинов музыки. Наша коллекция включает в себя тысячи альбомов, сотни жанров
            и исполнителей со всего мира. Мы предлагаем только качественную музыку, которую мы сами
            слушаем и любим.
          </p>
          <p className={styles.description__text}>
            Мы гордимся тем, что можем предложить нашим клиентам не только широкий выбор музыки, но
            и отличный сервис. Мы всегда готовы помочь нашим клиентам с выбором альбома, ответить на
            вопросы и предоставить подробную информацию о продукте.
          </p>
          <div className={styles.team}>
            <div className={styles.team__item}>
              <div className={styles.team__img}>
                <img
                  src={process.env.PUBLIC_URL + `/img/users/nk4.jpg`}
                  alt='team'
                  draggable={false}
                />
              </div>
              <div className={styles.team__name}>Никита</div>
              <div className={styles.team__position}>Менеджер по фоторекламе</div>
              <div className={styles.team__mail}>nk4@music-store.com</div>
            </div>
            <div className={styles.team__item}>
              <div className={styles.team__img}>
                <img
                  src={process.env.PUBLIC_URL + `/img/users/Nataly.jpg`}
                  alt='team'
                  draggable={false}
                />
              </div>
              <div className={styles.team__name}>Наталья</div>
              <div className={styles.team__position}>Руководитель детского отдела</div>
              <div className={styles.team__mail}>nonqueer@music-store.com</div>
            </div>
            <div className={styles.team__item}>
              <div className={styles.team__img}>
                <img
                  src={process.env.PUBLIC_URL + `/img/users/Vlek.jpg`}
                  alt='team'
                  draggable={false}
                />
              </div>
              <div className={styles.team__name}>Владислав</div>
              <div className={styles.team__position}>Менеджер по видеорекламе</div>
              <div className={styles.team__mail}>vlek@music-store.com</div>
            </div>
            <div className={styles.team__item}>
              <div className={styles.team__img}>
                <img
                  src={process.env.PUBLIC_URL + `/img/users/4eka.jpg`}
                  alt='team'
                  draggable={false}
                />
              </div>
              <div className={styles.team__name}>Евгений</div>
              <div className={styles.team__position}>Менеджер международного отдела</div>
              <div className={styles.team__mail}>4eka@music-store.com</div>
            </div>
          </div>
          <p className={styles.description__text}>
            Наша команда состоит из профессионалов своего дела, которые постоянно совершенствуются и
            следят за новинками в музыкальной индустрии. Мы уверены, что наш интернет-магазин музыки
            - это место, где каждый найдет что-то для себя. Мы ценим каждого нашего клиента и
            стремимся предоставить только лучший сервис и продукт.
          </p>
          <p className={styles.description__text}>
            Благодарим вас за выбор нашего интернет-магазина музыки и надеемся, что вы останетесь
            довольны нашими услугами.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
