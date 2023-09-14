import { FC, memo } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { data } from './data'

const CarouselBox: FC = memo(() => {
	return (
		<div className='carousel-container'>
			<Carousel interval={10000} controls={true} indicators={false}>
				{data.map(item => (
					<Carousel.Item key={item.title}>
						<img
							className='carousel-image'
							src={process.env.PUBLIC_URL + `/img/${item.img}`}
							alt={item.title}
							draggable={false}
						/>
						<Carousel.Caption>
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
