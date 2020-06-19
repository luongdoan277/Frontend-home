import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import style, { 
    CartContainer,
    Triangel,
    Clear,
    CartDropdownContainer,
    CartButtonContainer,
    SubtotalContainer,
    SubtotalText,
    SubtotalNominalText,
    EmptyText
 } from './cart-dropdown.styles';


import { selectCartItems, selectSubtotalCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { RupiahFormat } from '../../utils/utils';

const CartDropdown = ({cartItems, dispatch, subtotal, history}) => {
    return (
        <CartContainer>
            <Triangel/>
            <Clear>
                <p>
                    Your Shopping Cart
                    <i class="fas fa-times" style={style.closeIcon} onClick={() => dispatch(toogleCartHidden())}/>
                </p>
            </Clear>
            <br/>
            <CartDropdownContainer>
                {
                    cartItems.length?
                        cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                        ))     
                    : <EmptyText>Your cart is empty</EmptyText>}      
            </CartDropdownContainer>
            <CartButtonContainer>
                <SubtotalContainer>
                    <SubtotalText>Subtotal : </SubtotalText>
                    <SubtotalNominalText>{RupiahFormat(subtotal)}</SubtotalNominalText>
                </SubtotalContainer>
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toogleCartHidden())
                }} style={{width :'100%'}}> Go to Checkout</CustomButton>
            </CartButtonContainer>
          
        </CartContainer>
    );
}
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    subtotal: selectSubtotalCartItems
});

// const mapDispatchToProps = (dispatch) => ({
//     toogleCartHidden: () => dispatch(toogleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));