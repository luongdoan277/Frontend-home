import React from 'react';
import { connect } from 'react-redux';

import { 
    CartItemContainer,
    ImageContainer,
    DetailItemContainer,
    IncrementButtonContainer,
    ItemName,
    Price
 } from './cart-item.styles';
import IncrementButton from '../increment-button/increment-button.component';
import { RupiahFormat } from '../../utils/utils';
import { addItem, removeItemFromCart } from '../../redux/cart/cart.actions';

const CartItem = ({item, addItem, removeItemFromCart}) => {
    const {imageUrl, name, price, quantity} = item
    return (
        <CartItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="cart-item" width="100%" height="100%"/>
            </ImageContainer>
            <DetailItemContainer>
                <ItemName>
                    {name}
                </ItemName>
                <Price>
                    {RupiahFormat(price)}
                </Price>
                <IncrementButtonContainer>
                    <IncrementButton
                        item={item}
                        quantity={quantity}
                        handleIncrement={() => addItem(item)}
                        handleDecrement={() => removeItemFromCart(item)}
                    />
                </IncrementButtonContainer>
            </DetailItemContainer>
        </CartItemContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CartItem);