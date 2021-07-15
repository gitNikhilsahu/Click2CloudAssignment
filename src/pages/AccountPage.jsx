/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import "./AccountPage.css";

const AccountPage = () => {
    const user = useSelector((state) => {
        return state.account.user;
    });

    return (
        <>
            <section id="form">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-1">
                            <div className="login-form">
                                <h2>Detail to your account</h2>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="well well-sm">
                                                <div className="col-sm-6 col-md-4">
                                                    <img
                                                        src="images/home/product2.jpg"
                                                        alt=""
                                                        className="img-rounded img-responsive"
                                                    />
                                                </div>
                                                <div className="col-sm-6 col-md-8">
                                                    <h4>{user.name}</h4>
                                                    <small>
                                                        <cite title="San Francisco, USA">
                                                            {user.address}{" "}
                                                            <i className="glyphicon glyphicon-map-marker"></i>
                                                        </cite>
                                                    </small>
                                                    <p>
                                                        <i className="glyphicon glyphicon-envelope"></i>
                                                        {user.email}
                                                        <br />
                                                        <i className="glyphicon glyphicon-gift"></i>
                                                        {user.dob}
                                                    </p>
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-primary">
                                                            Social
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary dropdown-toggle"
                                                            data-toggle="dropdown"
                                                        >
                                                            <span className="caret"></span>
                                                            <span className="sr-only">Social</span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu">
                                                            <li>
                                                                <a href="#">Twitter</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Google +</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Facebook</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">Github</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AccountPage;
