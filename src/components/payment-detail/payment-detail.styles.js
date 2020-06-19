import styled from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';

export const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PaymentDetailContainer = styled.div`
    position: sticky;
    right: 30px;
    top: 98px;
    width: 28%;
    margin: 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.16);
`;

export const VoucherContainer = styled.div`
    margin: 0px 0 0;
    padding: 10px 15px;
    background-color: #e0e0e0;
`;

export const InputContainer = styled.div`
    width: 60%;
    height: 50px;
    align-items: center;
    display: flex;
`;

export const ButtonVoucherContainer = styled.div`
    width: 40%;
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
`;

export const VoucherText = styled.p`
    font-size: 13px;
    text-align: left;
    line-height: 27px;
    color: ${CustomStyles.primaryColor};

    strong {
        text-transform: uppercase;
        margin-bottom: 5px;
        font-size: 14px;
    }
`;

export const ExpandButton = styled.div`
    margin-top: 20px;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 1.3px solid #8c8c8c;
    line-height: 19px;
    font-size: 15px;
    cursor: pointer;
`;

export const TotalDetailContainer = styled.div`
    background-color: white;
    padding: 10px 15px;
`;

export const TotalDetailText = styled.p`
    margin: 7px 0 10px;
    font-size: 14px;
    color: ${CustomStyles.primaryColor};
`;

export const Line = styled.div`
    height: 5px;
    width: 100%;
    border-bottom: 1.5px solid #cccccc;
    margin: 5px 0;
`;

export const TotalPaymentText = styled.p`
    font-size: 18px;
    text-align: left;
    text-transform: uppercase;
    width: 70%;
    line-height: 23px;
    font-family: ${CustomStyles.primaryFontTextBold};
`;

export const TotalPaymentNominal = styled.p`
    font-size: 18px;
    text-align: right;
    text-transform: uppercase;
    width: 70%;
    line-height: 23px;
    color: ${CustomStyles.secondaryColor};
    font-family: ${CustomStyles.primaryFontTextBold};
`;

export const ButtonPaymentContainer = styled.div`
    width: 100%;
`;