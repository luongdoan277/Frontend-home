import styled from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';
import { Link } from 'react-router-dom';

export const CategoryItemsContainer = styled.div`
    margin-bottom: 50px;
`;

export const TitleText = styled.p`
    text-align: center;
    color: ${CustomStyles.primaryColor};
    font-size: 40px;
    text-decoration: none;
    display: inline-block;
    margin: 12px 0;
    font-family : ${CustomStyles.secondaryFontText};
`;

export const AllCollectionLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    display: block;
    margin-bottom: 30px;
    color: ${CustomStyles.primaryColor};
    font-family : ${CustomStyles.secondaryFontText};
    word-spacing: 5px;
    letter-spacing: 2px;
   
`;

export const CategoryItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
`;