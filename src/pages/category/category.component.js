import React from 'react';
import { connect } from 'react-redux';

import { CategoryPageContainer,
         TotalItemText,
         ItemsContainer,
         LinkRouteText,
         RouteContainer } from './category.styles';
import { TitleText } from '../../components/all-category-preview/all-category-preview.styles';
import ItemPreview from '../../components/item-preview/item-preview.component';

import { selectCategory } from '../../redux/shop/shop.selectors';

const CategoryPage = ({categoryItems}) => {
    const totalItem = categoryItems? categoryItems.items.length : 0;
    return (
        <CategoryPageContainer>
            <RouteContainer>
                <LinkRouteText to='/'>Home</LinkRouteText><span> / </span>
                <LinkRouteText to='/shop'>Shop</LinkRouteText><span> / </span>
                <span>{categoryItems.title} </span>
            </RouteContainer>
            <TitleText>{categoryItems.title}</TitleText>
            <TotalItemText>Displaying 1 - {totalItem} of {totalItem} items </TotalItemText>
            <ItemsContainer>
                {categoryItems.items.map((item) => (             
                    <ItemPreview key={item.id} payload={item} />
                ))}
            </ItemsContainer>
        </CategoryPageContainer>
    );
}

const mapStateToProps = (state, ownProps) => ({
    categoryItems: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);