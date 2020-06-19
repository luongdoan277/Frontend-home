import styled from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';


export const BagContainer = styled.div`
    position: relative;
`;

export const BagBadge = styled.div`
    position: absolute;
    top: -8px;
    font-size: 11px;
    color: ${CustomStyles.primaryColor};
    left: 37px;
    width: 19px;
    height: 19px;
    line-height: 19px;
    background-color: ${CustomStyles.secondaryColor};
    border-radius: 50%;
`;

export const CartWrap = styled.div`
    cursor: pointer;
`;


export const style = {
    option: {
        color: CustomStyles.primaryColor,
        fontSize: '20px',
        padding: '0 25px'
    },
    option_grey : {
        color: '#e4e4e4',
        fontSize: '20px',
        padding: '0 25px'
    },
};

export default style;
