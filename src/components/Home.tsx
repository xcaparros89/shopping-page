import React, { ReactElement } from 'react'
import Row from 'react-bootstrap/Row'
import './HomeStyle.css';
import PopularCarousel from './PopularCarousel';
interface Props {
}

export default function Home({}: Props): ReactElement {
    return (
        <>
        <Row className="hero">
            <p>Xavi's Garden</p>
            <div>
            <p>Take a piece of nature</p>
            <p>Here you can discover the best plants for your space, we deliver them to your door and helps you look after them.</p>
            </div>
            <div>
            <button>All</button>
            <button>Outdoor Plants</button>
            <button>Indoor Plants</button>
            </div>
        </Row>
            <PopularCarousel />
        </>
    )
}
