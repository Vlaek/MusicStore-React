import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { IShowModalOrder } from '../../types/types'
import classNames from 'classnames'
import styles from './Header.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'

interface HeaderProps {
	onShowModalOrder: IShowModalOrder
}

const Header: FC<HeaderProps> = ({ onShowModalOrder }) => {
	const [cartOpen, setCartOpen] = useState(false)

	const orders = useSelector((state: RootState) => state.order.orders)

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<header className={styles.header}>
			<div className={styles.item}>
				<div className={styles.container}>
					<h1 className={styles.logo} onClick={() => scrollToTop()}>
						Music Store
					</h1>
					<ul className={styles.nav}>
						<FaShoppingCart
							onClick={() => {
								setCartOpen(!cartOpen)
								onShowModalOrder()
							}}
							className={classNames(styles.btn_cart, {
								[styles.active]: orders.length,
							})}
						/>
						<li>
							<NavLink
								to='/MusicStore-React/'
								className={({ isActive }) =>
									isActive
										? classNames(styles.link, styles.active)
										: styles.link
								}
							>
								Главная
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/MusicStore-React/about'
								className={({ isActive }) =>
									isActive
										? classNames(styles.link, styles.active)
										: styles.link
								}
							>
								О нас
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/MusicStore-React/contacts'
								className={({ isActive }) =>
									isActive
										? classNames(styles.link, styles.active)
										: styles.link
								}
							>
								Контакты
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/MusicStore-React/profile'
								className={({ isActive }) =>
									isActive
										? classNames(styles.link, styles.active)
										: styles.link
								}
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
