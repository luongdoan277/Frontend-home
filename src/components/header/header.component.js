import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import style, { 
        HeaderContainer, 
        HeaderLeftMenu, 
        HeaderRightMenu, 
        LogoContainer, 
        Option,
        ButtonShopNow,
        LogoWrap
} from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import berryberri1 from '../../assets/logos/berryberri-1.png';
import berryberri2 from '../../assets/logos/berryberri-2.png';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ offset, location, currentUser, signOutStart, hidden, history}) => {
    const darkContent = !offset && location.pathname !== '/'
    return (
        <HeaderContainer transparent={offset} offset={offset}>
            <HeaderLeftMenu>
                <LogoWrap>
                    <LogoContainer to='/'>
                        <img src={darkContent? berryberri2 : berryberri1} alt='berryberri-logo' width='100%' height='100%'/>
                    </LogoContainer>
                </LogoWrap>
                <Option to='/shop' dark={darkContent} >Shop Now</Option>
                <Option to='#' dark={darkContent} >Our Store</Option>
                <Option to='#'dark={darkContent} >About Us</Option>
            </HeaderLeftMenu>
            <HeaderRightMenu>
                <CartIcon
                    darkContent={darkContent}
                />
                {currentUser?
                    <Option dark={darkContent} to='#' onClick={signOutStart}>
                        Sign Out <i class="fas fa-sign-out-alt" style={style.signoutStyle}></i>
                    </Option>                    
                    :
                    <ButtonShopNow>
                        <CustomButton outlined={!darkContent} onClick={() => history.push('/signin')}>Sign In</CustomButton>
                    </ButtonShopNow>
                } 
            </HeaderRightMenu>
            {
                hidden?
                null: <CartDropdown/>
            }
            
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));