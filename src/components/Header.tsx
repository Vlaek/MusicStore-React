import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { IOrder, IShowModalOrder } from '../types/types'

interface HeaderProps {
	orders: IOrder[]
	onShowModalOrder: IShowModalOrder
}

const Header: FC<HeaderProps> = ({ orders, onShowModalOrder }) => {
	const [cartOpen, setCartOpen] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<header>
			<div className='header'>
				<div className='header__container'>
					<h1 className='header__logo' onClick={() => scrollToTop()}>
						Music Store
					</h1>
					<ul className='header__nav'>
						<FaShoppingCart
							onClick={() => {
								setCartOpen(!cartOpen)
								onShowModalOrder()
							}}
							className={`header__btn-cart ${orders.length && 'active'}`}
						/>
						<li>
							<NavLink
								to='/MusicStore-React/'
								className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
							>
								Главная
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/MusicStore-React/about'
								className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
							>
								О нас
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/MusicStore-React/contacts'
								className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
							>
								Контакты
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/MusicStore-React/profile'
								className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
							>
								Кабинет
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
