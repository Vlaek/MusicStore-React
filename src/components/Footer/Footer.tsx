import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				&copy; 2023{' '}
				<a rel='noreferrer' href='https://github.com/Vlaek/MusicStore-React' target='_blank'>
					MusicStore-React
				</a>{' '}
				by{' '}
				<a rel='noreferrer' href='https://github.com/Vlaek' target='_blank'>
					Vlaek
				</a>
			</p>
		</footer>
	)
}
