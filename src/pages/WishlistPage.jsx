/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const WishlistPage = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => {
        return state.cart.wishlist
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
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                            {wishlist?.map((item,i) =>
                                <tr>
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
                                    <td className="cart_delete">
                                        <a style={{cursor:'pointer'}} className="cart_quantity_delete" onClick={() =>dispatch({type: 'DELETE_TO_WISHLIST', payload: i})}><i className="fa fa-times"></i></a>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WishlistPage;
