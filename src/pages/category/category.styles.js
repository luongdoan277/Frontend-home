import styled from 'styled-components';
import CustomStyles from '../../components/custom-styles/custom-styles';

import { Link } from 'react-router-dom';

export const CategoryPageContainer = styled.div`
    display: block;
`;

export const TotalItemText = styled.p`
    text-align: left;
    font-size: 12px;
    margin-bottom: 30px;
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
`;

export const RouteContainer = styled.div`
    margin-bottom: 10px;
    
    span {
        font-family : ${CustomStyles.secondaryFontText};
        font-size: 15px;
        word-spacing: 10px;
    }
`;

export const LinkRouteText = styled(Link)`
    font-family : ${CustomStyles.secondaryFontText};
    font-size: 15px;
    color: ${CustomStyles.primaryColor};
    text-decoration: none;
`;