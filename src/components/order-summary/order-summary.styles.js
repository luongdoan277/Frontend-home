import styled from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';

export const MediumBlockContainer = styled.div`
    width: 25%;
    span {
        font-size: 13px;
        text-align: center;
        line-height: 25px;
        color: ${CustomStyles.primaryColor};
    }
`;

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 0 10px;
`;

export const ImageContainer = styled.div`
    width: 90%;
    height: 190px;
    position: relative;

    img {
        transform: scale(0.8);
        object-fit: cover;
        border-radius: 10px;
    }
`;

export const Badge = styled.div`
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    font-size: 15px;
    color: white;
    position: absolute;
    top: 10px;
    background-color: black;
    right: 10px;
    font-weight: bold;
    font-family: ${CustomStyles.primaryColor};
`;