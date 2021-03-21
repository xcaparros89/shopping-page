import { ReactElement } from 'react'
import {Link} from 'react-router-dom';
import styles from './footer.module.css';

export default function Footer(): ReactElement {
    return (
        <div id={styles.footer}>
            <h3>Follow us</h3>
            <div className={styles.links} style={{width: "30%"}}><i className="fab fa-facebook-square fa-2x"></i><i className="fab fa-twitter-square fa-2x"></i><i className="fab fa-instagram-square fa-2x"></i><i className="fab fa-pinterest-square fa-2x"></i></div>
            <div className={styles.links}><Link to={'/cookies'} >Cookies</Link><Link to={'/privacy'}>Privacy</Link><Link to={'/terms'}>Terms and Conditions</Link></div>
            <p><i className="far fa-copyright"></i> 2021 Xavi's Garden Ltd</p>
        </div>
    )
}
