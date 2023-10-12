import { FC } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import styles from './Auth.module.scss'
import { authValidationSchema } from '../../../utils/validation'
import { useActions } from 'src/hooks/useAction'

const Auth: FC = () => {
	const { loginUser, registerUser } = useActions()

	const onSubmit = (values: any) => {
		const value = localStorage.getItem(values.email)
		if (values.isLogin) {
			if (value !== null) {
				const userLS = JSON.parse(value)
				if (userLS.password !== values.password) {
					toast.error('Пароли не совпадают!')
				} else {
					loginUser(userLS)
				}
			} else {
				toast.error('Пользователь не найден!')
			}
		} else {
			if (value === null) {
				const newUser = {
					name: '',
					email: values.email,
					password: values.password,
					phone: '',
					address: '',
					index: '',
					photo: '',
				}
				registerUser(newUser)
			} else {
				toast.error('Пользователь уже зарегистрирован!')
			}
		}
	}

	return (
		<div className={styles.profile}>
			<div className={styles.title}>Авторизация</div>
			<div className={styles.content}>
				<Formik
					initialValues={{
						isLogin: false,
						email: '',
						password: '',
					}}
					onSubmit={onSubmit}
					validationSchema={authValidationSchema}
				>
					{({ errors, touched, setFieldValue }) => (
						<Form>
							<div className={styles.error}>
								{errors.email && touched.email && errors.email}
							</div>
							<Field
								className={classNames(styles.field, {
									[styles.errorInput]: errors.email && touched.email,
								})}
								name='email'
								placeholder='Ваша электронная почта'
								type='email'
							/>

							<div className={styles.error}>
								{errors.password && touched.password && errors.password}
							</div>
							<Field
								className={classNames(styles.field, {
									[styles.errorInput]: errors.password && touched.password,
								})}
								name='password'
								placeholder='Ваш пароль'
								type='password'
							/>
							<div className={styles.btn_list}>
								<button
									className={styles.btn}
									type='submit'
									onClick={() => {
										setFieldValue('isLogin', true, true)
									}}
								>
									Войти
								</button>
								<button
									className={styles.btn}
									type='submit'
									onClick={() => {
										setFieldValue('isLogin', false, true)
									}}
								>
									Регистрация
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<ToastContainer />
		</div>
	)
}

export default Auth
