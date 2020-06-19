import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { createStructuredSelector } from 'reselect';

import style, { 
            BagContainer,
            CartWrap,
            BagBadge
        } from './cart-icon.styles';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toogleCartHidden, darkContent, itemCount}) => (
    <BagContainer>
        <CartWrap onClick={toogleCartHidden}>
            <FontAwesomeIcon icon={faShoppingBag} style={darkContent? style.option : style.option_grey}/>
        </CartWrap>
        <BagBadge>{itemCount}</BagBadge>
    </BagContainer>
);

const mapStateToProps = createStructuredSelector ({
    itemCount : selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);