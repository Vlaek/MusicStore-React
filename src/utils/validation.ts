import * as Yup from 'yup'

const getCharacterValidationError = (str: string) => {
	return `Ваш пароль должен состоять как минимум из 1 ${str}`
}

export const contactFormValidationSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, 'Слишком короткое имя')
		.max(30, 'Слишком длинное имя')
		.matches(/^[ a-zA-Zа-яА-Я]+$/, 'Имя должно содержать только буквы')
		.required('Поле не должно быть пустым'),
	email: Yup.string()
		.required('Поле не должно быть пустым')
		.email('Неверный адрес электронной почты'),
	request: Yup.string()
		.min(3, 'Слишком короткий вопрос')
		.max(500, 'Слишком длинный вопрос')
		.required('Поле не должно быть пустым'),
})

export const authValidationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Пожалуйста, введите электронную почту')
		.email('Неверный адрес электронной почты'),
	password: Yup.string()
		.required('Пожалуйста, введите пароль')
		.min(5, 'Пароль должен состоять из пяти или более символов')
		.max(30, 'Слишком длинный пароль')
		.matches(/[0-9]/, getCharacterValidationError('цифры'))
		.matches(/[a-z]/, getCharacterValidationError('символа нижнего регистра'))
		.matches(/[A-Z]/, getCharacterValidationError('символа верхнего регистра')),
})

export const profileValidationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Пожалуйста, введите ваше имя')
		.matches(/^[ a-zA-Zа-яА-Я]+$/, 'Имя должно содержать только буквы')
		.min(3, 'Слишком короткое имя')
		.max(50, 'Слишком длинное имя'),
	email: Yup.string()
		.required('Пожалуйста, введите электронную почту')
		.email('Неверный адрес электронной почты'),
	phone: Yup.string()
		.required('Пожалуйста, введите номер телефона')
		.matches(/^[0-9]+$/, 'Номер должен содержать только цифры')
		.min(5, 'Слишком короткий номер телефона')
		.max(20, 'Слишком длинный номер телеофна'),
	address: Yup.string()
		.required('Пожалуйста, введите ваш адрес')
		.min(5, 'Слишком короткий адрес')
		.max(100, 'Слишком длинный адрес'),
	index: Yup.string()
		.required('Пожалуйста, введите ваш почтовый индекс')
		.min(5, 'Слишком короткий почтовый индекс')
		.max(30, 'Слишком длинный почтовый индекс'),
})
