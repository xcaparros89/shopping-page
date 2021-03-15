import React, { ReactElement} from 'react'
import Row from 'react-bootstrap/Row'
import './HomeStyle.css';
import Slideshow from '../../utils/Slideshow';

export default function Home(): ReactElement {
    let slidesArr = [{title:'rose', src:'./imgs/rose.jpg', price:3},{title:'sunflower', src:'./imgs/sunflower.jpg', price:13},{title:'water lily', src:'./imgs/water-lily.jpg', price:10}]
    return (
        <>
        <Row className="hero">
            <div className="title-hero">
            <h1>Xavi's Garden</h1>
            <h2>Take a piece of nature</h2>
            <p>Here you can discover the best plants for your space,</p>
            <p>we deliver them to your door and helps you look after them.</p>
            </div>
            <div className="buttons-hero">
            <button>All</button>
            <button>Outdoor Plants</button>
            <button>Indoor Plants</button>
            </div>
        </Row>
            <Slideshow slidesArr={slidesArr} />
        </>
    )
}
