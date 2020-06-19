import React from 'react';

import { 
         GroupContainer,
         Label,
         FormInputContainer
    } from './form-input.styles'; 


const FormInput = ({handleChange, label, labelColor, ...otherProps}) => (
    <GroupContainer>
        <Label labelColor={labelColor}>{label}</Label>
        <FormInputContainer onChange={handleChange} {...otherProps} />
    </GroupContainer>
);

export default FormInput;
