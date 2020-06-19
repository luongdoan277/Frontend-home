import styled, { css } from 'styled-components';

import CustomStyles from '../custom-styles/custom-styles';
import CustomButton from '../custom-button/custom-button.component';

export const DefaultCircleTransition = css`
    transition: all .4s;
`;  

export const DelayCircleTransition = css`
    transition: all .4s ${(({delay}) => delay)};
`;  

const DelayCircle = props => {
    if (props.delay) {
        return DelayCircleTransition;
    }
    return DefaultCircleTransition;
}


export const VerticalLine = styled.div`
    border-left: 1px solid #c1c1c1;
    height: 40px;
    margin: 0 5px;
`;

export const DetailItemContainer = styled.div`
    margin: -10px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ItemNameText = styled.p`
    font-size: 12px;
    width: 70%;
    letter-spacing: 1px;
    text-align : left;
    line-height: 25px;
    margin: 0;
    color: #000000;
`;

export const PriceText = styled.p`
    font-size: 12px;
    letter-spacing: 1px;
    color: ${CustomStyles.tertierColor};
    line-height: 25px;
    margin: 0; 
`;

export const PriceContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const AddCartButtonContainer = styled.div`
    position : absolute;
    bottom: 30px;
    width: 80%;
    display: none;
`;

export const AddCartButton = styled(CustomButton)`
    width: 100%;
`;

export const SectionContainer = styled.div`
    height: 400px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    width: 100%;

    img {
        object-fit: cover;
        transition: all 3.5s;
    }

`;



export const Circle = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border : 1.5px solid #fff;   
    border-radius: 50%;
    transform : scale(0);
    ${DelayCircle}

    &:hover {
        transition: all .3s 0s;
        border : 1.5px solid ${CustomStyles.primaryColor};
        
    }
`;


export const BrightOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    transition : all .5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

export const ItemPreviewContainer = styled.div`
    margin: 0px 0 20px 0;
    width: 100%;
    &:hover ${BrightOverlay} {
        background-color: #1515153d;
    }
    
    &:hover ${Circle} {
        transform : scale(1);
    }

    &:hover ${AddCartButtonContainer} {
        display: block;
    }
`;

