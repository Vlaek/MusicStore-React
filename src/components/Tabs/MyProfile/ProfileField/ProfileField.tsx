import { FC } from 'react'
import { Field } from 'formik'
import classNames from 'classnames'
import styles from './ProfileField.module.scss'

interface ProfileFieldProps {
	label: string
	name: string
	value: string | number
	type: string
	isEdit: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	error?: string | undefined
	touched?: boolean | undefined
}

const ProfileField: FC<ProfileFieldProps> = ({
	label,
	name,
	value,
	type,
	isEdit,
	onChange,
	error,
	touched,
}) => {
	return (
		<div>
			<div
				className={classNames(styles.profile__label, {
					[styles.error]: error && touched,
				})}
			>
				{error && touched ? error : label}
			</div>
			<Field
				className={classNames(styles.profile__input, { [styles.active]: isEdit })}
				name={name}
				value={value}
				placeholder={`${label}...`}
				type={type}
				onChange={onChange}
				disabled={!isEdit}
			/>
		</div>
	)
}

export default ProfileField
