/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const CheckoutPage = () => {
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
				  <li className="active">Check out</li>
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
								<input className="cart_quantity_input" type="text" name="quantity" value={item.qty} size="2" onChange={(e) =>Number(e.target.value)<10 ? dispatch({type: 'HANDLE_QTY_TO_CART', payload: {i:i, v:Number(e.target.value)}}): null} />
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

						<tr>
							<td colspan="4">&nbsp;</td>
							<td colspan="2">
								<table className="table table-condensed total-result">
									<tr>
										<td>Cart Sub Total</td>
										<td>${cart?.reduce((n, {price,qty}) => Number(n) + Number(price)*qty, 0)}</td>
									</tr>
									<tr>
										<td>Exo Tax</td>
										<td>$2</td>
									</tr>
									<tr className="shipping-cost">
										<td>Shipping Cost</td>
										<td>Free</td>										
									</tr>
									<tr>
										<td>Total</td>
										<td><span>${cart?.reduce((n, {price,qty}) => Number(n) + Number(price)*qty, 0) +2}</span></td>
									</tr>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="payment-options">
					<span>
						<label><input type="checkbox" /> Direct Bank Transfer</label>
					</span>
					<span>
						<label><input type="checkbox" /> Check Payment</label>
					</span>
					<span>
						<label><input type="checkbox" /> Paypal</label>
				 </span>
				</div>
		</div>
	</section>
        </>
    )
}

export default CheckoutPage
