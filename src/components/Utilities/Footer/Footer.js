import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import logo from '../../../assets/img/logo/f_logo.png';

const Footer = () => {
    return (
        <footer className="footer-bg footer-p">
            <div className="footer-top pt-70">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-20">
                                    <Link to={'/'}>
                                        <Logo logo={logo} />
                                    </Link>
                                </div>
                                <div className="footer-link">{'Reach out to our office at'}</div>
                                <div className="f-contact mt-20">
                                    <ul>
                                        <li>
                                            <i className="icon fal fa-map-marker-alt"></i>
                                            <span>{'Address :3000 Murrell Rd. #560295 Rockledge, FL 32956'}</span>
                                        </li>
                                        <li>
                                            <i className="icon far fa-clock"></i>
                                            <span>
                                                Phone : 
                                                <Link to={'#callto:(321) 342-9233'}>
                                                    {'(321) 342-9233'}
                                                    </Link>
                                                    </span>
                                        </li>
                                        <li>
                                            <i className="icon dripicons-mail"></i>
                                            <span>
                                                {'Email :'} 
                                                <Link to={'mailto:info@archsoftdev.com'}>
                                                    {'info@archsoftdev.com'}
                                                </Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>{'Our Links'}</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><Link to={'/'}>{'Home'}</Link>
                                        </li>
                                        <li><Link to={'/about'}> {'About Us'}</Link>
                                        </li>
                                        <li><Link to={'/service'}> {'Services'} </Link>
                                        </li>
                                        <li><Link to={'/contact'}> {'Contact Us'}</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>{'Follow Us'}</h2>
                                </div>
                                <div className="footer-social  mt-30"> <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <Link to={'#'}><i className="fab fa-twitter"></i></Link>
                                    <Link to={'#'}><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {'Copyright © 2022'} <span>Arch Games</span> {'All Rights Reserved.'}
                        </div>
                        <div className="col-lg-6 text-right text-xl-right"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;