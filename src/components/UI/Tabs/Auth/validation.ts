import * as Yup from 'yup'

const getCharacterValidationError = (str: string) => {
	return `Ваш пароль должен состоять как минимум из 1 ${str}`
}

export const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Пожалуйста, введите электронную почту')
		.email('Неверный адрес электронной почти'),
	password: Yup.string()
		.required('Пожалуйста, введите пароль')
		.min(5, 'Пароль должен состоять из пяти или более символов')
		.max(30, 'Слишком длинный пароль')
		.matches(/[0-9]/, getCharacterValidationError('цифры'))
		.matches(/[a-z]/, getCharacterValidationError('символа нижнего регистра'))
		.matches(/[A-Z]/, getCharacterValidationError('символа верхнего регистра')),
})
