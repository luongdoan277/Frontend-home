import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    CategoryContainer,
    HomeCategoryContainer,
    TitleText
}  from './home-category.styles';
import CategoryItem from '../category-item/category-item.component';

import { selectCategories } from '../../redux/directory/directory.selectors';

const Category = ({sections}) => (
    <CategoryContainer>
        <TitleText>Shop By Categories</TitleText>
        <HomeCategoryContainer>
            {sections.map(({title, id, imageUrl, size}) => (
                <CategoryItem key={id} title={title} size={size} imageUrl={imageUrl}/>
            ))}
        </HomeCategoryContainer>
    </CategoryContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectCategories
})

export default connect(mapStateToProps)(Category);