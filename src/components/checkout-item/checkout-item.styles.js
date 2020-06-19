import styled from 'styled-components';

import CustomStyles from '../custom-styles/custom-styles';

export const CheckoutItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0 25px;
    font-family: ${CustomStyles.primaryFontText};
`;

export const LargeBlockContainer = styled.div`
    width: 38%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 90%;
    height: 180px;

    img {
        object-fit: cover;
        border-radius: 10px;
    }
`;

export const ItemNameContainer = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;

    span {
        font-size: 12px;
        color: ${CustomStyles.primaryColor};
        text-align: left;
        line-height: 28px;
        letter-spacing: 1px;
    }
`;

export const MediumBlockContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 13px;
        text-align: center;
        line-height: 25px;
        color: ${CustomStyles.primaryColor};
    }
`;

export const SmallBlockContainer = styled.div`
    width: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const style = {
    trashIcon: {
        'cursor' : 'pointer'
    }
};

export default style;