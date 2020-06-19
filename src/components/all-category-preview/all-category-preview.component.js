import React from 'react';
import { withRouter } from 'react-router';

import { CategoryItemsContainer,
        CategoryItemContainer,
         TitleText,
         AllCollectionLink
} from './all-category-preview.styles';

import ItemPreview from '../item-preview/item-preview.component';
const AllCategoryPreview = ({title, items, match}) => {
    return (
        <CategoryItemsContainer>
            <TitleText>{title}</TitleText>
            <AllCollectionLink to={`${match.path}/${title.toLowerCase()}`}>View All Collections</AllCollectionLink>
            <CategoryItemContainer>
                {items.filter((item,idx) => idx < 4).map((item) => (
                    <ItemPreview key={item.id} payload={item} />
                ))}
            </CategoryItemContainer>
        </CategoryItemsContainer>
    );
    
}
export default withRouter(AllCategoryPreview);