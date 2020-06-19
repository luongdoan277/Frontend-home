import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CategoryOverviewContainer } from './category-overview.styles';
import AllCategoryPreview from '../all-category-preview/all-category-preview.component';

import { selectCategoryForPreview } from '../../redux/shop/shop.selectors';

const CategoryOverview = ({categories}) => (
    <CategoryOverviewContainer>
        {categories.map((collection) => (
            <AllCategoryPreview key={collection.id} title={collection.title} items={collection.items}/>
        ))}
    </CategoryOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    categories : selectCategoryForPreview
})

export default connect(mapStateToProps)(CategoryOverview);