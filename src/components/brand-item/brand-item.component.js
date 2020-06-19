import React from 'react';

import { BrandLogoContainer, Rectangular, Triangel } from './brand-item.styles';

const BrandItem = ({brand: {imageUrl, title}}) => (
    <BrandLogoContainer>
        <img src={imageUrl} alt={title} width='70%' height='70%'/>
        <Rectangular>
            <Triangel/>
        </Rectangular>
    </BrandLogoContainer>
);

export default BrandItem;