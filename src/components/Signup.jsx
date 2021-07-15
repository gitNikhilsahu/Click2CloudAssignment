/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';


const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('You must enter a valid email').required('You must enter a email'),
    password: yup
        .string()
        .required('Please enter your password.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
});



const LoginPage = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const values = getValues();
    const onSubmitSignup = data => dispatch({ type: 'ADD_USER_DETAIL', payload: { name: data.name, email: data.email } });


    return (
        <>
            <div className="col-sm-4">
                <div className="signup-form">
                    <h2>New User Signup!</h2>
                    <form onSubmit={handleSubmit(onSubmitSignup)}>
                        <input {...register("name")} placeholder="Name" />
                        <p>{values.name && errors.name?.message}</p>

                        <input {...register("email")} placeholder="Email Address" />
                        <p>{values.email && errors.email?.message}</p>

                        <input {...register("password")} type="password" placeholder="Password" />
                        <p>{values.password && errors.password?.message}</p>

                        <button type="submit" className="btn btn-default">Signup</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;
