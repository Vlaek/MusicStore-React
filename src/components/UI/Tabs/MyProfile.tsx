import { FC } from 'react'

interface MyProfileProps {
	profilePhoto: string
	handleLogout: () => void
}

const MyProfile: FC<MyProfileProps> = ({ profilePhoto, handleLogout }) => {
	let user = {
		name: '',
		email: '',
		password: '',
		phone: '',
		address: '',
		index: '',
	}

	const userString = localStorage.getItem('current_user')
	if (userString) {
		user = JSON.parse(userString)
	}

	return (
		<div className='profile'>
			<div className='profile__title'>Мой профиль</div>
			<div className='profile__content'>
				<div className='first'>
					<div className='profile__img'>
						<img src={profilePhoto} alt='profile' draggable={false} />
					</div>
					<div className='profile__btn'>Редактировать</div>
					<button onClick={handleLogout} className='profile__btn'>
						Выйти
					</button>
					<div className='profile__btn'>Удалить</div>
				</div>
				<div className='second'>
					<div className='profile__label'>Имя пользователя</div>
					<div className='profile__input'>{user.name}</div>

					<div className='profile__label'>Электронная почта</div>
					<div className='profile__input'>{user.email}</div>

					<div className='profile__label'>Номер телефона</div>
					<div className='profile__input'>{user.phone}</div>

					<div className='profile__label'>Адрес</div>
					<div className='profile__input'>{user.address}</div>

					<div className='profile__label'>Почтовый индекс</div>
					<div className='profile__input'>{user.index}</div>
				</div>
			</div>
		</div>
	)
}

export default MyProfile
// 10 Rue de la Paix, 75002 Paris, France
