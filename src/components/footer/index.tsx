import React, { ReactElement } from 'react'
import {Link} from 'react-router-dom';
import './footerStyle.css';
interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <div id="footer">
            <h3>Follow us</h3>
            <div className="links" style={{width: "30%"}}><i className="fab fa-facebook-square fa-2x"></i><i className="fab fa-twitter-square fa-2x"></i><i className="fab fa-instagram-square fa-2x"></i><i className="fab fa-pinterest-square fa-2x"></i></div>
            <div className="links"><Link to={'/cookies'} >Cookies</Link><Link to={'/privacy'}>Privacy</Link><Link to={'/terms'}>Terms and Conditions</Link></div>
            <p><i className="far fa-copyright"></i> 2021 Xavi's Garden Ltd</p>
        </div>
    )
}
