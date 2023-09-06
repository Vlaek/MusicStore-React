import { FC } from 'react'
import { IUser } from '../../../types/types'

interface IAuth {
	handleLogin: (user: IUser) => void
	handleRegister: (user: IUser) => void
}

const Auth: FC<IAuth> = ({ handleLogin, handleRegister }) => {
	const user = {
		name: 'da',
		email: 'da',
		password: 'da',
		phone: 'da',
		address: 'da',
		index: 'da',
	}

	return (
		<div className='profile profile--auth'>
			<div className='profile__title'>Авторизация</div>
			<div className='profile__content'>
				<div>
					<input type='email' className='profile__input' placeholder='Электронная почта...' />
					<input type='password' className='profile__input' placeholder='Пароль...' />
					<div className='profile__buttons'>
						<button className='profile__btn' onClick={() => handleLogin(user)}>
							Войти
						</button>
						<button className='profile__btn' onClick={() => handleRegister(user)}>
							Регистрация
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auth
