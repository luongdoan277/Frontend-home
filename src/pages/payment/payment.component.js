import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DefaultContainer } from '../shop/shop.styles';
import { 
         CheckoutHeader,
         HeaderBlockContainer,
         CheckoutBody,
         PaymentContainer,
         PaymentFormContainer,
         PaymentNote,
         TitleText,
         OrderSummaryContainer
        } from './payment.styles'; 
import { RouteContainer, LinkRouteText } from '../category/category.styles';
import { TitleText as TitleTextMain } from '../../components/all-category-preview/all-category-preview.styles';
import SplitForm from '../../components/payment-form/payment-form.component';
import OrderSummary from '../../components/order-summary/order-summary.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const PaymentPage = ({cartItems}) => (
    <DefaultContainer>
        <RouteContainer>
            <LinkRouteText to='/'>Home</LinkRouteText><span> / </span>
            <LinkRouteText to='/checkout'>Checkout</LinkRouteText><span> / </span>
            <span>Payment</span>
        </RouteContainer>
        <TitleTextMain>Payment</TitleTextMain>
        <PaymentContainer> 
            <PaymentFormContainer>
                <TitleText>Enter Payment Detail</TitleText>
                <PaymentNote>
                    <p>This is a dummy project. Please do not enter you real payment information.</p>
                    <p>*Please use the following test credit card for payment*</p>
                    <p>4242 4242 4242 4242 EXP : 01/23 CVV : 123</p>
                </PaymentNote>
                <SplitForm/>
            </PaymentFormContainer>
            <OrderSummaryContainer>
                <TitleText>Order Summary</TitleText>
                <CheckoutHeader>
                    <HeaderBlockContainer>
                        <span>Product</span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer>
                        <span>Description</span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer>
                        <span>Unit Price</span>
                    </HeaderBlockContainer>
                    <HeaderBlockContainer>
                        <span>Total Price</span>
                    </HeaderBlockContainer>
                </CheckoutHeader>
                <CheckoutBody>
                    {
                        cartItems.map((cartItem) => (
                            <OrderSummary key={cartItem.id} item={cartItem}/>
                        ))
                    }
                
                </CheckoutBody>
            </OrderSummaryContainer>
        </PaymentContainer>
    </DefaultContainer>
    
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default connect(mapStateToProps)(PaymentPage);