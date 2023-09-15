import { FC, useRef, useState } from 'react'
import { IUser } from 'src/types/types'
import { ToastContainer, toast } from 'react-toastify'
import { Formik, Form, Field } from 'formik'
import { profileValidationSchema } from './../../../utils/validation'
import photo from '../../../img/User.png'

interface MyProfileProps {
	handleLogout: () => void
	handleDelete: (user: IUser) => void
}

const MyProfile: FC<MyProfileProps> = ({ handleLogout, handleDelete }) => {
	const [isEdit, setIsEdit] = useState(false)

	let user = {
		name: '',
		email: '',
		password: '',
		phone: '',
		address: '',
		index: '',
		photo: '',
	}

	const ref = useRef<HTMLFormElement>(null)
	const oldUser = useRef({ ...user })

	const userString = localStorage.getItem('current_user')
	if (userString) {
		const parsedUser = JSON.parse(userString)
		user = parsedUser
		oldUser.current = { ...parsedUser }
	}

	const handleSaveChanges = () => {
		if (JSON.stringify(user) !== JSON.stringify(oldUser.current)) {
			toast.success('Профиль обновлен!')
			localStorage.removeItem(oldUser.current.email)
			oldUser.current = { ...user }
			localStorage.setItem(user.email, JSON.stringify(user))
			localStorage.setItem('current_user', JSON.stringify(user))
		}
		setIsEdit(false)
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		user = { ...user, [name]: value }
	}

	return (
		<div className='profile'>
			<div className='profile__title'>Мой профиль</div>
			<div className='profile__content'>
				<Formik
					initialValues={user}
					onSubmit={handleSaveChanges}
					validationSchema={profileValidationSchema}
				>
					{({ errors, touched, handleSubmit, setFieldValue }) => (
						<>
							<div className='first'>
								<div className={`profile__img ${isEdit && 'active'}`}>
									<div style={{ backgroundImage: `url(${user.photo ? user.photo : photo})` }}>
										{isEdit && (
											<div className='profile__img-edit'>
												<p>Выбрать файл</p>
											</div>
										)}
										<input
											type='file'
											name='img'
											title=''
											accept='image/*'
											disabled={isEdit ? false : true}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
												if (e.target.files?.length) {
													const file = e.target.files?.[0]
													if (file.size < 300000) {
														const reader = new FileReader()
														reader.onloadend = () => {
															setFieldValue('photo', reader.result)
															user = { ...user, photo: String(reader.result) }
														}
														reader.readAsDataURL(file)
													} else {
														toast.error('Файл не должен быть больше 300 КБ')
													}
													e.target.value = ''
												}
											}}
										/>
									</div>
								</div>
								<button
									type='submit'
									onClick={() => {
										if (isEdit) {
											handleSubmit()
										} else {
											setIsEdit(true)
										}
									}}
									className='profile__btn'
								>
									{isEdit ? 'Сохранить' : 'Редактировать'}
								</button>
								<button
									onClick={() => {
										if (isEdit) {
											setIsEdit(false)
											user = oldUser.current
											if (ref.current) ref.current?.reset()
										} else {
											handleLogout()
										}
									}}
									className='profile__btn'
								>
									{isEdit ? 'Отмена' : 'Выйти'}
								</button>
								<button onClick={() => handleDelete(user)} className='profile__btn'>
									Удалить
								</button>
							</div>
							<div className='second'>
								<Form ref={ref}>
									<div className={`profile__label ${errors.name && touched.name && 'error'}`}>
										{errors.name && touched.name ? errors.name : 'Имя пользователя'}
									</div>
									<Field
										className={`profile__input ${isEdit && 'active'}`}
										name='name'
										value={user.name}
										placeholder='Имя...'
										type='text'
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('name', e.target.value, true)
										}}
										disabled={isEdit ? false : true}
									/>

									<div className={`profile__label ${errors.email && touched.email && 'error'}`}>
										{errors.email && touched.email ? errors.email : 'Электронная почта'}
									</div>
									<Field
										className={`profile__input ${isEdit && 'active'}`}
										name='email'
										value={user.email}
										placeholder='Электронная почта...'
										type='email'
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('email', e.target.value, true)
										}}
										disabled={isEdit ? false : true}
									/>

									<div className={`profile__label ${errors.phone && touched.phone && 'error'}`}>
										{errors.phone && touched.phone ? errors.phone : 'Номер телефона'}
									</div>
									<Field
										className={`profile__input ${isEdit && 'active'}`}
										name='phone'
										value={user.phone}
										placeholder='Номер телефона...'
										type='text'
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('phone', e.target.value, true)
										}}
										disabled={isEdit ? false : true}
									/>

									<div className={`profile__label ${errors.address && touched.address && 'error'}`}>
										{errors.address && touched.address ? errors.address : 'Адрес'}
									</div>
									<Field
										className={`profile__input ${isEdit && 'active'}`}
										name='address'
										value={user.address}
										placeholder='Адрес...'
										type='text'
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('address', e.target.value, true)
										}}
										disabled={isEdit ? false : true}
									/>

									<div className={`profile__label ${errors.index && touched.index && 'error'}`}>
										{errors.index && touched.index ? errors.index : 'Почтовый индекс'}
									</div>
									<Field
										className={`profile__input ${isEdit && 'active'}`}
										name='index'
										value={user.index}
										placeholder='Почтовый индекс...'
										type='text'
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('index', e.target.value, true)
										}}
										disabled={isEdit ? false : true}
									/>
								</Form>
							</div>
						</>
					)}
				</Formik>
			</div>
			<ToastContainer />
		</div>
	)
}

export default MyProfile
