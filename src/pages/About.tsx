import { useEffect } from 'react'
import photoTeam1 from '../img/nk4.jpg'
import photoTeam2 from '../img/Nataly.jpg'
import photoTeam3 from '../img/Vlek.jpg'
import photoTeam4 from '../img/4eka.jpg'
import { Helmet } from 'react-helmet'
import Counter from './../components/UI/Counter/Counter'

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
			<div className='container'>
				<div className='greeting'>
					<h1 className='greeting__text'>
						Рады приветствовать вас на сайте <span className='greeting__text red'>Music Store</span>
					</h1>
				</div>
				<div className='description'>
					<p className='description__text'>
						Добро пожаловать в наш интернет-магазин музыки! Мы - команда энтузиастов, которые любят
						и ценят качественную музыку. Наша история началась много лет назад, когда мы решили
						создать место, где любители музыки могут находить и покупать самые разные жанры и
						исполнителей.
					</p>
					<div className='information'>
						<div className='information__item'>
							<div className='information__title'>
								<Counter value={153525434} duration={30} />
							</div>
							<div className='information__text'>оформленных заказов за все время!</div>
						</div>
						<div className='information__item'>
							<div className='information__title'>
								<Counter value={37706000} duration={30} />
							</div>
							<div className='information__text'>довольных клиентов по всему миру!</div>
						</div>
						<div className='information__item'>
							<div className='information__title'>
								<Counter value={327095} duration={30} />
							</div>
							<div className='information__text'>исполнителей сотрудничают с нами!</div>
						</div>
					</div>
					<p className='description__text'>
						За все эти годы мы добились многих достижений и стали одним из самых популярных
						интернет-магазинов музыки. Наша коллекция включает в себя тысячи альбомов, сотни жанров
						и исполнителей со всего мира. Мы предлагаем только качественную музыку, которую мы сами
						слушаем и любим.
					</p>
					<p className='description__text'>
						Мы гордимся тем, что можем предложить нашим клиентам не только широкий выбор музыки, но
						и отличный сервис. Мы всегда готовы помочь нашим клиентам с выбором альбома, ответить на
						вопросы и предоставить подробную информацию о продукте.
					</p>
					<div className='team'>
						<div className='team__item'>
							<div className='team__img'>
								<img src={photoTeam1} alt='team' draggable={false} />
							</div>
							<div className='team__name'>Никита</div>
							<div className='team__position'>Менеджер по фоторекламе</div>
							<div className='team__mail'>nk4@music-store.com</div>
						</div>
						<div className='team__item'>
							<div className='team__img'>
								<img src={photoTeam2} alt='team' draggable={false} />
							</div>
							<div className='team__name'>Наталья</div>
							<div className='team__position'>Руководитель детского отдела</div>
							<div className='team__mail'>nonqueer@music-store.com</div>
						</div>
						<div className='team__item'>
							<div className='team__img'>
								<img src={photoTeam3} alt='team' draggable={false} />
							</div>
							<div className='team__name'>Владислав</div>
							<div className='team__position'>Менеджер по видеорекламе</div>
							<div className='team__mail'>vlek@music-store.com</div>
						</div>
						<div className='team__item'>
							<div className='team__img'>
								<img src={photoTeam4} alt='team' draggable={false} />
							</div>
							<div className='team__name'>Евгений</div>
							<div className='team__position'>Менеджер международного отдела</div>
							<div className='team__mail'>4eka@music-store.com</div>
						</div>
					</div>
					<p className='description__text'>
						Наша команда состоит из профессионалов своего дела, которые постоянно совершенствуются и
						следят за новинками в музыкальной индустрии. Мы уверены, что наш интернет-магазин музыки
						- это место, где каждый найдет что-то для себя. Мы ценим каждого нашего клиента и
						стремимся предоставить только лучший сервис и продукт.
					</p>
					<p className='description__text'>
						Благодарим вас за выбор нашего интернет-магазина музыки и надеемся, что вы останетесь
						довольны нашими услугами.
					</p>
				</div>
			</div>
		</>
	)
}

export default About
