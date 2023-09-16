import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loader}></div>
			<p className={styles.loader__text}>Загрузка</p>
		</div>
	)
}

export default Loader
