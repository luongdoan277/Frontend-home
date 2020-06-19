import styled from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';

export const Rectangular = styled.div`
    opacity: 0;
    transition: all 1.2s;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scale(0);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Triangel = styled.div`
    height: 70%;
    width: 70%;
    border: 1.5px solid ${CustomStyles.secondaryColor};
    border-radius: 3px;
`;

export const BrandLogoContainer = styled.div`
    height: 80px;
    width: 25%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        object-fit: cover;
    }

    &:hover ${Rectangular} {
        opacity: 1;
        transition: all .8s;
        transform: scale(1);
    }
`;