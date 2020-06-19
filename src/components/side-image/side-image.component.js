import React from 'react';
import { Link } from 'react-router-dom';

import {
    AbsoluteContainerImage,
    LogoContainer,
    WelcomeText,
    BerryBerriText,
    ImageContainer
} from './side-image.styles';
import BerryBerri from '../../assets/logos/berryberri-1.png';

const SideImage = ({ imageUrl, mainText, detailText }) => (
    <ImageContainer>
        <img src={imageUrl} alt="sideimage" width='100%' height='100%' />
        <AbsoluteContainerImage>
            <LogoContainer>
                <Link to='/'><img src={BerryBerri} alt="logo" /></Link>
            </LogoContainer>
            <WelcomeText>{detailText}</WelcomeText>
            <BerryBerriText>{mainText}</BerryBerriText>
        </AbsoluteContainerImage>
    </ImageContainer>
);

export default SideImage;