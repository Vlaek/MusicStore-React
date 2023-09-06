import { FC } from 'react'

interface MyProfileProps {
	profilePhoto: string
	handleLogout: () => void
}

const MyProfile: FC<MyProfileProps> = ({ profilePhoto, handleLogout }) => {
	return (
		<div className='profile'>
			<div className='profile__title'>Мой профиль</div>
			<div className='profile__content'>
				<div className='first'>
					<div className='profile__img'>
						<img src={profilePhoto} alt='profile' />
					</div>
					<div className='profile__btn'>Редактировать</div>
					<button onClick={handleLogout} className='profile__btn'>
						Выйти
					</button>
					<div className='profile__btn'>Удалить</div>
				</div>
				<div className='second'>
					<div className='profile__label'>Имя пользователя</div>
					<div className='profile__input'>Владислав Эйхвальд</div>

					<div className='profile__label'>Электронная почта</div>
					<div className='profile__input'>vlek@music-store.com</div>

					<div className='profile__label'>Номер телефона</div>
					<div className='profile__input'>88005553535</div>

					<div className='profile__label'>Адрес</div>
					<div className='profile__input'>10 Rue de la Paix, 75002 Paris, France</div>

					<div className='profile__label'>Почтовый индекс</div>
					<div className='profile__input'>12345</div>
				</div>
			</div>
		</div>
	)
}

export default MyProfile
