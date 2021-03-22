import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import styles from "./Home.module.css";
import Slideshow from "../Slideshow";
import Button from "react-bootstrap/Button";

export default function Home(): ReactElement {
  return (
    <>
      <Row className={styles.hero} style={{flexWrap:'nowrap'}}>
        <div className={styles.titleHero}>
          <h1>Xavi's Garden</h1>
          <h2>Take a piece of nature</h2>
          <p>Here you can discover the best plants for your space,</p>
          <p>we deliver them to your door and helps you look after them.</p>
        </div>
        <div className={styles.buttonsHero}>
          <Button variant="success" as={Link} to={"/search"}>All</Button>
          <Button variant="success" as={Link} to={"/search"}>Outdoor Plants</Button>
          <Button variant="success" as={Link} to={"/search"}>Indoor Plants</Button>
        </div>
      </Row>
      <Slideshow type={'discount'} />
    </>
  );
}
