import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import PaymentPage from './pages/payment/payment.component';
import Notification from './components/notification/notification.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { selectCategoryForPreview } from './redux/shop/shop.selectors';
import { selectNotifProps } from './redux/notif/notif.selectors';
import { setNotifClose } from './redux/notif/notif.actions';
import { selectCartItemsCount } from './redux/cart/cart.selectors';

const stripePromise = loadStripe("pk_test_mRRJ7GHZIUwNj4fhSj5vya5X00eIQVk1HM");

const App = ({ location, currentUser, checkUserSession, notifProps, setNotifClose, totalCartItems }) => {

  const [isOffside, setOffside] = useState(null);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    const handleScroll = () => {
      const lastScroll = window.scrollY;
      const isScrollPositonOffside = lastScroll > 40;

      if (isOffside !== isScrollPositonOffside) {
        setOffside(isScrollPositonOffside);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);

  }, [isOffside]);

  return (
    <div className="App">
      {
        notifProps.show ?
          <Notification
            payload={notifProps}
            handleCloseNotif={setNotifClose}
          />
          :
          null
      }

      <Elements stripe={stripePromise}>
        {
          location.pathname !== '/signin' && location.pathname !== '/signup' ?
            <Header offset={isOffside} />
            :
            null
        }
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route exact path='/signin'
            render={() => currentUser ? (<Redirect to='/' />) : (<SignInPage />)}
          />
          <Route exact path='/signup'
            render={() => currentUser ? (<Redirect to='/' />) : (<SignUpPage />)}
          />
          <Route exact path='/checkout/payment'
            render={() => currentUser && totalCartItems > 0 ? (<PaymentPage />) : (<Redirect to='/checkout' />)}
          />
        </Switch>
        {
          location.pathname !== '/signin' && location.pathname !== '/signup' ?
            <Footer />
            :
            null
        }
      </Elements>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCategoryForPreview,
  notifProps: selectNotifProps,
  totalCartItems: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  setNotifClose: () => dispatch(setNotifClose())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
