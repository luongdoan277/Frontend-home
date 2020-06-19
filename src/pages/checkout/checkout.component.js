import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
            CheckoutContainer,
            CheckoutHeader,
            CheckoutListContainer,
            HeaderBlockContainer,
            CheckoutBody
        } 
from './checkout.styles';
import { RouteContainer, LinkRouteText } from '../category/category.styles';
import { DefaultContainer } from '../shop/shop.styles';
import { TitleText } from '../../components/all-category-preview/all-category-preview.styles';
import PaymentDetailComponent from '../../components/payment-detail/payment-detail.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';


const CheckoutPage = ({cartItems}) => (
    <DefaultContainer>
        <RouteContainer>
            <LinkRouteText to='/'>Home</LinkRouteText><span> / </span>
            <span>Checkout</span>
        </RouteContainer>
        <TitleText>Checkout</TitleText>
        <CheckoutContainer>
            <CheckoutListContainer>
                <CheckoutHeader>
                    <HeaderBlockContainer>
                        <span>Product</span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer>
                        <span>Description</span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer>
                        <span>Quantity</span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer>
                        <span>Price</span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer>
                        <span>Remove</span>
                    </HeaderBlockContainer>
                </CheckoutHeader>
                <CheckoutBody>
                    {
                        cartItems.map((cartItem) => (
                            <CheckoutItem 
                               
                                item={cartItem}
                                key={cartItem.id}
                            />
                        ))
                    }
                </CheckoutBody>
            </CheckoutListContainer>
            <PaymentDetailComponent/>

        </CheckoutContainer>
    </DefaultContainer>
);

const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);