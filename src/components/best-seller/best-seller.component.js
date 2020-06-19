import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CategoryContainer, TitleText, SectionsContainer } from '../home-category/home-category.styles';

import ItemPreview from '../item-preview/item-preview.component';

import { selectBestSeller } from '../../redux/directory/directory.selectors';

const BestSeller = ({bestSellers}) => (
    <CategoryContainer>
        <TitleText>Best Seller</TitleText>
        <SectionsContainer>
            {bestSellers.map((bestSeller) => (
                <ItemPreview key={bestSeller.id} payload={bestSeller}/>
            ))}
        </SectionsContainer>
    </CategoryContainer>
);

const mapStateToProps = createStructuredSelector({
  bestSellers: selectBestSeller 
})

export default connect(mapStateToProps)(BestSeller);