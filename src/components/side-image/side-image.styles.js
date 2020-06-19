import styled from 'styled-components';
import CustomStyles from '../../components/custom-styles/custom-styles';


export const ImageContainer = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;

    img {
        object-fit: cover;
        filter: grayscale(1);
    }

`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    overflow: hidden;

    img {
        object-fit: cover;
    }
`;

export const WelcomeText = styled.p`
    font-size: 60px;
    font-weight: bold;
    color: ${CustomStyles.secondaryColor};
    position: absolute;
    bottom: 70px;
    margin: 0;
    text-transform: uppercase;
    right: 20px;
    text-align: right;
    width: 50%;
`;

export const BerryBerriText = styled.p`
    font-size: 125px;
    font-weight: bold;
    color: #ffffff4f;
    letter-spacing: 2px;
    position: absolute;
    bottom: 0;
    margin: 0;
    text-transform: uppercase;
    text-align: left;
`;

export const AbsoluteContainerImage = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;