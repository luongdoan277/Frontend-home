import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryOverviewContainer from '../../components/category-overview/category-overview.container';
import CategoryPageContainer from '../category/category.container';
import { DefaultContainer } from './shop.styles';

import { fetchCategoriesStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ match, fetchCategoriesStart } ) => {

    useEffect(() => {
        fetchCategoriesStart();
    }, [fetchCategoriesStart]);

    return (
        <DefaultContainer>
            <Route exact path={`${match.path}`} component={CategoryOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CategoryPageContainer}/>
        </DefaultContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);