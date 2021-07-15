/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Login, Signup} from 'src/components'

const LoginPage = () => {
    return (
        <>
            <section id="form">
                <div className="container">
                    <div className="row">
                        <Login />
                        <div className="col-sm-1">
                            <h2 className="or">OR</h2>
                        </div>
                        <Signup />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage;
