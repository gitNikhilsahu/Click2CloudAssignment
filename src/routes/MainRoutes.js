import React, {lazy,Suspense} from "react";
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from './PrivateRoute'

const Loadable = (Component) => props => (
    <Suspense fallback="">
      <Component {...props} />
    </Suspense>
);

const LandingPage = Loadable(lazy(() => import('src/pages/LandingPage')));
const ShopPage = Loadable(lazy(() => import('src/pages/ShopPage')));
const ProductDetailPage = Loadable(lazy(() => import('src/pages/ProductDetailPage')));
const WishlistPage = Loadable(lazy(() => import('src/pages/WishlistPage')));
const CartPage = Loadable(lazy(() => import('src/pages/CartPage')));
const CheckoutPage = Loadable(lazy(() => import('src/pages/CheckoutPage')));
const AccountPage = Loadable(lazy(() => import('src/pages/AccountPage')));
const LoginPage = Loadable(lazy(() => import('src/pages/LoginPage')));
const ContactUsPage = Loadable(lazy(() => import('src/pages/ContactUsPage')));
const NotFound404Page = Loadable(lazy(() => import('src/pages/NotFound404Page')));

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/shop">
        <ShopPage />
      </Route>
      <Route exact path="/product-detail">
        <ProductDetailPage />
      </Route>
      <Route exact path="/wishlist">
        <WishlistPage />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
      <Route exact path="/checkout">
        <CheckoutPage />
      </Route>
      <Route exact path="/account">
        <AccountPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/contact-us">
        <ContactUsPage />
      </Route>
      <Route exact path="/404">
        <NotFound404Page />
      </Route>

      {/* <PrivateRoute path="/admin" component={} /> */}

    </Switch>
  );
};

export default Routes;
