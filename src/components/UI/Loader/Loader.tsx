import cl from './Loader.module.css'

const Loader = () => {
	return (
		<div className={cl.container}>
			<div className={cl.loader}></div>
			<p className={cl.loader__text}>Загрузка</p>
		</div>
	)
}

export default Loader
