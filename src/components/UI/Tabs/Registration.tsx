import { FC } from 'react'
import { IUser } from '../../../types/types'
import profilePhoto from '../../../img/Vlek.jpg'

interface IAuth {
	handleLogin: (user: IUser) => void
}

const Auth: FC<IAuth> = ({ handleLogin }) => {
	const user = {
		name: 'da',
		email: 'da',
		password: 'da',
		phone: 'da',
		address: 'da',
		index: 'da',
	}
	return (
		<div>
			<div className='profile'>
				<div className='profile__title'>Авторизация</div>
				<div className='profile__content'>
					<div className='first'>
						<div className='profile__img'>
							<img src={profilePhoto} alt='profile' />
						</div>
						<button className='profile__btn' onClick={() => handleLogin(user)}>
							Войти
						</button>
					</div>
					<div className='second'>
						<div className='profile__label'>Имя пользователя</div>
						<input type='text' className='profile__input' />

						<div className='profile__label'>Электронная почта</div>
						<input type='text' className='profile__input' />

						<div className='profile__label'>Номер телефона</div>
						<input type='text' className='profile__input' />

						<div className='profile__label'>Адрес</div>
						<input type='text' className='profile__input' />

						<div className='profile__label'>Почтовый индекс</div>
						<input type='text' className='profile__input' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auth
