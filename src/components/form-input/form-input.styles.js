import styled from 'styled-components';

import CustomStyles from '../custom-styles/custom-styles'; 

export const GroupContainer = styled.div`
    margin: 5px 0;
`;

export const Label = styled.label`
    font-size: 13px;
    color: ${({labelColor}) => labelColor? labelColor: '#000'};
    font-family: ${CustomStyles.primaryFontText}
`;

export const FormInputContainer = styled.input`
    width: 100%;
    padding: 12px 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: ${CustomStyles.primaryFontText}
  
`;