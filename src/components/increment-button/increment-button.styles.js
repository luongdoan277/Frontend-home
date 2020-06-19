import styled from 'styled-components';
 
import CustomStyles from '../custom-styles/custom-styles';

export const IncrementButtonContainer = styled.div`
    width: 120px;
    height: 34px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-family :${(({fontFamily}) => fontFamily ? fontFamily : CustomStyles.primaryFontText )};

    p {
        margin: 0;
        line-height: 34px;
        padding: 0;
        font-size: 13px;
        text-align: center;
    }
`;

export const DecrementContainer = styled.div`
    flex: 1;
    background-color: #cac5c54d;
    cursor: pointer;
    border: 1px solid #dadada82;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const TotalContainer = styled.div`
    flex: 1.5;
    border: 1px solid #dadada82;
`;

export const IncrementContainer = styled.div`
    flex: 1;
    background-color: #cac5c54d;
    cursor: pointer;
    border: 1px solid #dadada82;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;