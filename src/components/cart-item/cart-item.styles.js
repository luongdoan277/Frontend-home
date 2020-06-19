import styled from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0px;
    box-sizing: border-box;
    height: 170px;
    width: 100%;
`;

export const ImageContainer = styled.div`
    flex:1.3;
    height: 130px;
    overflow: hidden;
    margin-right: 30px;

    img {
        object-fit: cover;
    }
`;

export const DetailItemContainer = styled.div`
    flex: 2;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    position: relative;
`;

export const IncrementButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
`;

export const ItemName = styled.p`
    margin: 0 0 7px 0;
    padding: 0;
    font-size: 11px;
    letter-spacing : .6px;
    line-height: 22px;
`;

export const Price = styled.p`
    margin: 0 0 10px 0; 
    font-size: 10px;
    letter-spacing : 1px;
    color: ${CustomStyles.tertierColor};
    line-height: 25px;  
`;