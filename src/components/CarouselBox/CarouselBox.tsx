import { FC, memo } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { data } from './data'
import styles from './CarouselBox.module.scss'

const CarouselBox: FC = memo(() => {
	return (
		<div className={styles.carousel}>
			<Carousel interval={10000} controls={true} indicators={false}>
				{data.map(item => (
					<Carousel.Item key={item.title} className={styles.item}>
						<img
							className={styles.img}
							src={process.env.PUBLIC_URL + `/img/${item.img}`}
							alt={item.title}
							draggable={false}
						/>
						<Carousel.Caption className={styles.caption}>
							<h3>{item.title}</h3>
							<p>{item.subtitle}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	)
})

export default CarouselBox
