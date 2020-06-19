import React from 'react';

import { 
    DecrementContainer,
    IncrementButtonContainer,
    IncrementContainer,
    TotalContainer
 } from './increment-button.styles';

const IncrementButton = (props) => (
    <IncrementButtonContainer fontFamily={props.fontFamily}>
        <DecrementContainer onClick={() => props.handleDecrement(props.item)}>
            <p>-</p>
        </DecrementContainer>
        <TotalContainer>
            <p>{props.quantity}</p>
        </TotalContainer>
        <IncrementContainer onClick={() => props.handleIncrement(props.item)}>
            <p>+</p>
        </IncrementContainer>
    </IncrementButtonContainer>
);

export default IncrementButton;