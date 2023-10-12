import { FC, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Formik, Form } from 'formik'
import { profileValidationSchema } from '../../../utils/validation'
import classNames from 'classnames'
import styles from './MyProfile.module.scss'
import ProfileField from './ProfileField/ProfileField'
import { useActions } from 'src/hooks/useAction'

const MyProfile: FC = () => {
	const [isEdit, setIsEdit] = useState(false)

	const { logoutUser, deleteUser } = useActions()

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
		<div className={styles.profile}>
			<div className={styles.profile__title}>Мой профиль</div>
			<div className={styles.profile__content}>
				<Formik
					initialValues={user}
					onSubmit={handleSaveChanges}
					validationSchema={profileValidationSchema}
				>
					{({ errors, touched, handleSubmit, setFieldValue }) => (
						<>
							<div className={styles.first}>
								<div
									className={classNames(styles.profile__img, {
										[styles.active]: isEdit,
									})}
								>
									<div
										style={{
											backgroundImage: `url(${
												user.photo
													? user.photo
													: process.env.PUBLIC_URL + '/img/users/User.png'
											})`,
										}}
									>
										{isEdit && (
											<div className={styles.profile__img_edit}>
												<p>Выбрать файл</p>
											</div>
										)}
										<input
											type='file'
											name='img'
											title=''
											accept='image/*'
											disabled={!isEdit}
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
										isEdit ? handleSubmit() : setIsEdit(true)
									}}
									className={styles.profile__btn}
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
											logoutUser()
										}
									}}
									className={styles.profile__btn}
								>
									{isEdit ? 'Отмена' : 'Выйти'}
								</button>
								<button
									onClick={() => deleteUser(user)}
									className={styles.profile__btn}
								>
									Удалить
								</button>
							</div>
							<div className={styles.second}>
								<Form ref={ref}>
									<ProfileField
										label='Имя пользователя'
										name='name'
										value={user.name}
										type='text'
										isEdit={isEdit}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('name', e.target.value, true)
										}}
										error={errors.name}
										touched={touched.name}
									/>

									<ProfileField
										label='Электронная почта'
										name='email'
										value={user.email}
										type='text'
										isEdit={isEdit}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('email', e.target.value, true)
										}}
										error={errors.email}
										touched={touched.email}
									/>

									<ProfileField
										label='Номер телефона'
										name='phone'
										value={user.phone}
										type='text'
										isEdit={isEdit}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('phone', e.target.value, true)
										}}
										error={errors.phone}
										touched={touched.phone}
									/>

									<ProfileField
										label='Адрес'
										name='address'
										value={user.address}
										type='text'
										isEdit={isEdit}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('address', e.target.value, true)
										}}
										error={errors.address}
										touched={touched.address}
									/>

									<ProfileField
										label='Почтовый индекс'
										name='index'
										value={user.index}
										type='text'
										isEdit={isEdit}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											handleInputChange(e)
											setFieldValue('index', e.target.value, true)
										}}
										error={errors.index}
										touched={touched.index}
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
