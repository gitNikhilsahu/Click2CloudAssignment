/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => {
        return state.cart.cart
    })

    return (
        <>
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li className="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Item</td>
                                    <td className="description"></td>
                                    <td className="price">Price</td>
                                    <td className="quantity">Quantity</td>
                                    <td className="total">Total</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                            {cart?.map((item,i) =>
                                <tr key={i}>
                                    <td className="cart_product">
                                        <a href=""><img src={item.image} alt="not found" width="110" height="110" /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href="">{item.description}</a></h4>
                                        <p>Web ID: 108977{i}</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>${item.price}</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a style={{cursor:'pointer'}} className="cart_quantity_up" onClick={() =>item.qty<10 ? dispatch({type: 'HANDLE_QTY_TO_CART', payload: {i:i, v:item.qty+1}}): null}> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" value={item.qty} autocomplete="off" size="2" onChange={(e) =>Number(e.target.value)<10 ? dispatch({type: 'HANDLE_QTY_TO_CART', payload: {i:i, v:Number(e.target.value)}}): null} />
                                            <a style={{cursor:'pointer'}} className ="cart_quantity_down" onClick={() =>item.qty>1 ? dispatch({type: 'HANDLE_QTY_TO_CART', payload: {i:i, v:item.qty-1}}): null}> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">${item.price*item.qty}</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a style={{cursor:'pointer'}} className="cart_quantity_delete" onClick={() =>dispatch({type: 'DELETE_TO_CART', payload: i})}><i className="fa fa-times"></i></a>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="do_action">
                <div className="container">
                    <div className="heading">
                        <h3>What would you like to do next?</h3>
                        <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                    </div>
                    <div className="row">

                        <div className="col-sm-12">
                            <div className="total_area">
                                <ul>
                                    <li>Cart Sub Total <span>${cart?.reduce((n, {price, qty}) => Number(n) + Number(price)*qty, 0)}</span></li>
                                    <li>Eco Tax <span>$2</span></li>
                                    <li>Shipping Cost <span>Free</span></li>
                                    <li>Total <span>${cart?.reduce((n, {price,qty}) => Number(n) + Number(price)*qty, 0) +2}</span></li>
                                </ul>
                                <a className="btn btn-default update" href="#">Update</a>
                                <a className="btn btn-default check_out" href="#">Check Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartPage
