import styled from 'styled-components';
import CustomStyles from '../../components/custom-styles/custom-styles';

export const CheckoutHeader = styled.div`
    background-color: #e0e0e0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    justify-content: center;
`;

export const HeaderBlockContainer = styled.div`
    width: 25%;
    span {
        font-size: 13px;
        font-family: ${CustomStyles.primaryFontTextBold};
        color: ${CustomStyles.primaryColor};
        text-transform: capitalize;
        letter-spacing: .8px;
    }
`;

export const CheckoutBody = styled.div`
    margin: 5px 0;
`;

export const PaymentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
`;

export const TitleText = styled.p`
    color: #1f1f1f;
    font-size: 25px;
    text-decoration: none;
    margin: 0 0 20px;
    font-family: 'BarlowCondensed';
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PaymentFormContainer = styled.div`
    width: 35%;
    padding: 0px 10px 15px;
    text-align: left;
`;

export const PaymentNote = styled.div`
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #e0e0e0;
    border: 1px solid #cfd1df;
    color: #858aa3;

    p {
        font-size: 12px;
        line-height: 26px;
        margin: 0;
    }
`;

export const OrderSummaryContainer = styled.div`
    width: 60%;
    padding: 0px 10px 15px;
`;
