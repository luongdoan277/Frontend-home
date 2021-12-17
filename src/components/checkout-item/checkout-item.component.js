import React from 'react';
import { connect } from 'react-redux';

import  style, {
            CheckoutItemContainer,
            ImageContainer,
            MediumBlockContainer,
            SmallBlockContainer
 } from './checkout-item.styles';
import IncrementButton from '../increment-button/increment-button.component';

import { VndFormat } from '../../utils/utils';
import { addItem, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, addItem, clearItemFromCart, removeItemFromCart}) =>  {
    const {imageUrl, name, quantity, price} = item
    return (
        <CheckoutItemContainer>
            <MediumBlockContainer>
                <ImageContainer>
                    <img src={imageUrl} width='100%' height='100%' alt="logo-lalala"/>
                </ImageContainer>
            </MediumBlockContainer>
            <MediumBlockContainer>
                <span>{name}</span>
            </MediumBlockContainer>

            <MediumBlockContainer>
                <IncrementButton
                    item={item}
                    quantity={quantity}
                    handleIncrement = {() => addItem(item)}
                    handleDecrement = {() => removeItemFromCart(item)}
                />
            </MediumBlockContainer>
            <MediumBlockContainer>
                <span>{VndFormat(price)}</span>
            </MediumBlockContainer>
            <SmallBlockContainer>
                <span onClick={() => clearItemFromCart(item)}>
                    <i class="fas fa-trash" style={style.trashIcon}/>
                </span>
            </SmallBlockContainer>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
