import styled from 'styled-components';

import CustomStyles from '../custom-styles/custom-styles';

export const CategoryContainer = styled.div`
    margin: 0 auto;
    padding: 40px 30px;
`;

export const HomeCategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const SectionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
`;

export const TitleText = styled.p`
    font-size: 50px;
    color: ${CustomStyles.primaryColor};
    font-family: ${CustomStyles.secondaryFontText};

`;