import React from 'react';

import {
    SectionContainer,
    SectionOverlay
} from './category-item.styles';


const CategoryItem = ({title, imageUrl, size}) => (
    <SectionContainer size={size} zoom>
         <img src={imageUrl} alt={title} width='100%' height='100%'/>
        <SectionOverlay size={size}>
            <p>{title}</p>
        </SectionOverlay>
    </SectionContainer>
);

export default CategoryItem;