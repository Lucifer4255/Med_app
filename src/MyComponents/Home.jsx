import React from 'react';
import web from "../images/img.svg";
import { NavLink } from 'react-router-dom';

export const Home = (props) => {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div className="col-md-6 pt-5 pt-lg-8 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>
                                    Hello,
                                    <strong className="brand-name">{props.name}</strong>
                                </h1>
                                <h4 className="my-2">
                                    Here look we have brought you up some discounts.
                                </h4>
                                <div className="mt-3">
                                    <NavLink to="/services">
                                        <button type="button" className="btn btn-outline-primary">Get Started</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 my-5 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="home img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
