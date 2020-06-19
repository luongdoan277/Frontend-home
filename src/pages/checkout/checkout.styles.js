import styled from 'styled-components';
import CustomStyles from '../../components/custom-styles/custom-styles';

export const CheckoutContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 30px;
`;

export const CheckoutListContainer = styled.div`
    width: 70%;
    position: relative;
`;

export const CheckoutHeader = styled.div`
    background-color: #e0e0e0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const HeaderBlockContainer = styled.div`
    width: 25%;
    padding: 5px;


    &:last-child {
        width: 12%;
    }

    span {
        font-size: 13px;
        font-family: ${CustomStyles.primaryFontTextBold};
        color: ${CustomStyles.primaryColor};
        text-transform: capitalize;
        letter-spacing: .8px;
    }
`;

export const CheckoutBody = styled.div`
    width: '100%';
`;