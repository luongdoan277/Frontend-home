import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import { 
            PaymentDetailContainer,
            VoucherContainer,
            InputContainer,
            ButtonPaymentContainer,
            ButtonVoucherContainer,
            Line,
            TotalDetailContainer,
            TotalDetailText,
            TotalPaymentNominal,
            TotalPaymentText,
            VoucherText,
            FlexSpaceBetween
        } from './payment-detail.styles'; 
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectSubtotalCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { RupiahFormat } from '../../utils/utils';
import { setNotifShow } from '../../redux/notif/notif.actions';

const PaymentDetail = ({total, currentUser, history, totalCartItems, setNotifShow }) => {
    const handleSubmit = () => {
        console.log("HandleSubmit");
    }

    const handlePay = () => {
        if (currentUser) {
            if (totalCartItems > 0) {
                history.push('/checkout/payment')
            }
            else {
                setNotifShow({
                    type: 'danger',
                    title: 'Error',
                    message:  'Please select item first.',
                    show: true
                })
            }
        }
        else {
            history.push('/signup')
        }
       
    }
    return (
        <PaymentDetailContainer>
            <VoucherContainer>
                <VoucherText>
                    <strong>Enter the voucher code or gift card. <br/></strong>
                    You will receive a code via email if you get or buy a BerryBerri gift card.
                </VoucherText>
                {/* <ExpandButton>
                    +
                </ExpandButton> */}
           
                <form onSubmit={() => handleSubmit()}>
                    <FlexSpaceBetween>
                        <InputContainer>
                            <FormInput
                                placeholder="Enter your voucher code"
                            />
                        </InputContainer>
                        <ButtonVoucherContainer>
                            <CustomButton type="submit" secondary>Generate</CustomButton>
                        </ButtonVoucherContainer>  
                    </FlexSpaceBetween>
                </form>

            </VoucherContainer>
            <TotalDetailContainer>
                <FlexSpaceBetween>
                    <TotalDetailText>Subtotal</TotalDetailText>
                    <TotalDetailText>{RupiahFormat(total)}</TotalDetailText>
                </FlexSpaceBetween>
                <FlexSpaceBetween>
                    <TotalDetailText>Tax</TotalDetailText>
                    <TotalDetailText>{RupiahFormat(0)}</TotalDetailText>
                </FlexSpaceBetween>
                <Line/>
                <FlexSpaceBetween>
                    <TotalPaymentText>TOTAL PAYMENT</TotalPaymentText>
                    <TotalPaymentNominal>{RupiahFormat(total)}</TotalPaymentNominal>
                </FlexSpaceBetween>
                <ButtonPaymentContainer>
                    <CustomButton onClick={handlePay} style={{width: '100%'}}>Pay Now</CustomButton>
                </ButtonPaymentContainer>
            </TotalDetailContainer>
        </PaymentDetailContainer>
    );
}
  

const mapStateToProps = createStructuredSelector({
    total: selectSubtotalCartItems,
    currentUser: selectCurrentUser,
    totalCartItems: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    setNotifShow: data => dispatch(setNotifShow(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentDetail));