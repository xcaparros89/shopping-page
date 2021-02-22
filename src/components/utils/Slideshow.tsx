import React, { ReactElement } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
interface Props {
    slidesArr: Array<ISlide>,
}

interface ISlide {
  title: string,
  src: string,
  price: number,
}

export default function Slideshow ({slidesArr}: Props): ReactElement {
    return (
<Carousel>
  {slidesArr.map(slide =>
  <Carousel.Item>
    <Image
    className="d-block w-100 "
      src={slide.src}
      alt={slide.title}
    />
    <Carousel.Caption>
      <h3>{slide.title}</h3>
      <p>{slide.price}€</p>
    </Carousel.Caption>
  </Carousel.Item>
  )}
</Carousel>
    )
}
