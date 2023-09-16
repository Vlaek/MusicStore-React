import { FC, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import styles from './ContactsForm.module.scss'
import classNames from 'classnames'
import ModalContactsForm from './ModalContactsForm/ModalContactsForm'
import { contactFormValidationSchema } from 'src/utils/validation'

const ContactsForm: FC = () => {
	const [showModal, setShowModal] = useState(false)

	return (
		<div className={styles.form}>
			<div className={styles.title}>Оставьте свой вопрос, и мы свяжемся с вами!</div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					request: '',
				}}
				onSubmit={() => {
					setShowModal(true)
				}}
				validationSchema={contactFormValidationSchema}
			>
				{({ errors, touched, values }) => (
					<Form className={styles.wrapper}>
						<div className={styles.content}>
							<div>
								<div className={styles.error}>{errors.email && touched.email && errors.email}</div>
								<Field
									className={classNames(styles.field, {
										[styles.errorInput]: errors.email && touched.email,
									})}
									name='email'
									placeholder='Ваша электронная почта'
									type='email'
								/>

								<div className={styles.error}>{errors.name && touched.name && errors.name}</div>
								<Field
									className={classNames(styles.field, {
										[styles.errorInput]: errors.name && touched.name,
									})}
									name='name'
									placeholder='Ваше имя'
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
						<ModalContactsForm
							showModal={showModal}
							onShowModal={setShowModal}
							name={values.name}
						/>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ContactsForm
