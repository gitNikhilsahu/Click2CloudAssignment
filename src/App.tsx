/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MainRoutes } from './routes'

function App() {
  // const dispatch = useDispatch();
  const cart = useSelector((state:any) => {
    return state.cart
  })
  
  return (
    <>
      <header id="header">


        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 clearfix">
                <div className="logo pull-left">
                  <NavLink to="/"><img src="images/home/logo.png" alt="" /></NavLink>
                </div>

              </div>
              <div className="col-md-8 clearfix">
                <div className="shop-menu clearfix pull-right">
                  <ul className="nav navbar-nav">
                    <li style={{ cursor: 'pointer' }}><NavLink to='/account'><i className="fa fa-user"></i> Account</NavLink></li>
                    <li style={{ cursor: 'pointer' }}><NavLink to='/wishlist'><i className="fa fa-star"><span style={{marginLeft: 1}} className="badge">{cart.wishlist.length}</span></i> Wishlist</NavLink></li>
                    <li style={{ cursor: 'pointer' }}><NavLink to='/checkout'><i className="fa fa-crosshairs"></i> Checkout</NavLink></li>
                    <li style={{ cursor: 'pointer' }}><NavLink to='/cart'><i className="fa fa-shopping-cart"><span style={{marginLeft: 1}} className="badge">{cart.cart.length}</span></i> Cart</NavLink></li>
                    <li style={{ cursor: 'pointer' }}><NavLink to='/login'><i className="fa fa-lock"></i> Login</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li><a href="index.html" className="active">Home</a></li>
                    <li className="dropdown"><a href="#">Shop<i className="fa fa-angle-down"></i></a>
                      <ul role="menu" className="sub-menu">
                        <li><a href="shop.html">Products</a></li>
                        <li><a href="product-details.html">Product Details</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="login.html">Login</a></li>
                      </ul>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  {/* <!-- <input type="text" placeholder="Search"/> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MainRoutes />
    </>
  );
}

export default App;
