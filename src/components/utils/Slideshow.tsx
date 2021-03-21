import { ReactElement } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

interface ISlide {
  title: string;
  src: string;
  price: number;
}

export default function Slideshow({
  slidesArr,
}: {
  slidesArr: Array<ISlide>;
}): ReactElement {
  return (
    <Carousel>
      {slidesArr.map((slide, index) => (
        <Carousel.Item key={index}>
          <Image className="d-block w-100 " src={slide.src} alt={slide.title} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.price}€</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
