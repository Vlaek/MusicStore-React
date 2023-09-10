import { FC } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import styles from './ContactsForm.module.scss'
import classNames from 'classnames'

const ContactsForm: FC = () => {
	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, 'Слишком короткое имя')
			.max(30, 'Слишком длинное имя')
			.matches(/^[ a-zA-Zа-яА-Я]+$/, 'Имя должно содержать только буквы')
			.required('Поле не должно быть пустым'),
		email: Yup.string()
			.required('Поле не должно быть пустым')
			.email('Неверный адрес электронной почти'),
		request: Yup.string()
			.min(3, 'Слишком короткий вопрос')
			.max(500, 'Слишком длинный вопрос')
			.required('Поле не должно быть пустым'),
	})

	return (
		<div className={styles.form}>
			<div className={styles.title}>Оставьте свой вопрос, и мы свяжемся с вами!</div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					request: '',
				}}
				onSubmit={values => {
					console.log('submit', values)
				}}
				validationSchema={validationSchema}
			>
				{({ errors, touched }) => (
					<Form className={styles.wrapper}>
						<div className={styles.content}>
							<div>
								<div className={styles.error}>{errors.name && touched.name && errors.name}</div>
								<Field
									className={classNames(styles.field, {
										[styles.errorInput]: errors.name && touched.name,
									})}
									name='name'
									placeholder='Ваше имя'
								/>

								<div className={styles.error}>{errors.email && touched.email && errors.email}</div>
								<Field
									className={classNames(styles.field, {
										[styles.errorInput]: errors.email && touched.email,
									})}
									name='email'
									placeholder='Ваш электронный адрес'
								/>
							</div>

							<div>
								<div className={styles.error}>
									{errors.request && touched.request && errors.request}
								</div>
								<Field
									className={classNames(styles.textarea, {
										[styles.errorInput]: errors.request && touched.request,
									})}
									name='request'
									placeholder='Ваш вопрос'
									as='textarea'
								/>
							</div>
						</div>

						<button className={styles.button} type='submit'>
							Отправить
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ContactsForm
