import React from "react";

import mapImg from '../../../assets/img/bg/map-contact.png';
import contactHeader from '../../../assets/img/bg/contant-hd.png';
import Form from "../../Utilities/Form/Form";

import { Link } from "react-router-dom";


const branceAddress = [
    {
        branceName: 'Colourbar U.S.A',
        location: 'Dhaka In Twin Tower Concord Shopping Complex',
        openingTime: 'Open Closes 8:30PM',
        email: 'yourinfo@gmail.com',
        phone: '(1200)-0989-568-331'
    },
    {
        branceName: 'USA Exchanger',
        location: 'Dhaka In Twin Tower Concord Shopping Complex',
        openingTime: 'Open Closes 8:30PM',
        email: 'yourinfo@gmail.com',
        phone: '(1200)-0989-568-331'
    },
]

const ContactUs = () => {

    return (
        <React.Fragment>

            <section className="breadcrumb-area d-flex align-items-center" style={{ background: `url(${contactHeader})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title">
                                    <h2>{'Contact Us'}</h2>
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to={'/'}>{'Home'}</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">{'Contact Us'}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="contact-bg02 wow fadeInRight animated">
                                <div className="section-title center-align">
                                    <h2>
                                        {'Get in Touch'}<br /> <span>{'Reach out to our office at'} </span>
                                    </h2>
                                    <p>{'Address: 3000 Murrell Rd. #560295 Rockledge, FL 32956 '}</p>
									<p>{'Phone: (321) 342-9233'}</p>
									<p>{'E-mail: info@archsoftdev.com'}</p>
                                </div>
                                <Form />
                            </div>
                        </div>
						<div className="col-lg-3"></div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );

}

export default ContactUs;