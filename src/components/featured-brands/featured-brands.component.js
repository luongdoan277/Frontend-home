import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { LogoContainer } from './feature-brands.styles';
import { TitleText, CategoryContainer } from '../home-category/home-category.styles';
import BrandItem from '../brand-item/brand-item.component';

import { selectBrands } from '../../redux/directory/directory.selectors';

const FeaturedBrands = ({brands}) => (
    <CategoryContainer>
        <TitleText>Featured Brands</TitleText>
        <LogoContainer>
            {brands.map((brand) => (
                <BrandItem brand={brand} key={brand.id}/>
            ))}
        </LogoContainer>
    </CategoryContainer>
);

const mapStateToProps = createStructuredSelector({
    brands: selectBrands
});

export default connect(mapStateToProps)(FeaturedBrands);