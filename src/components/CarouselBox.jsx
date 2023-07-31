import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import placeboImg from '../img/placebo.jpg'
import rammsteinImg from '../img/rammstein.jpg'
import kanyeWest from '../img/kanye-west.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export class CarouselBox extends Component {
    render() {
        return (
            <div className='carousel-container'>
                <Carousel interval={10000} controls={true} indicators={false}>
                    <Carousel.Item>
                        <img 
                            className='carousel-image'
                            src={ placeboImg }
                            alt="Placebo"
                        />
                        <Carousel.Caption>
                            <h3>Placebo</h3>
                            <p>Never Let Me Go</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className='carousel-image'
                            src={ rammsteinImg }
                            alt="Rammstein"
                        />
                        <Carousel.Caption>
                            <h3>Rammstein</h3>
                            <p>Zeit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className='carousel-image'
                            src={ kanyeWest }
                            alt="Kanye West"
                        />
                        <Carousel.Caption>
                            <h3>Kanye West</h3>
                            <p>My Beautiful Dark Twisted Fantasy</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default CarouselBox