import React from 'react';

import { 
    ImageContainer,
    Overlay,
    DescriptionContainer,
    Caption,
    CaptionContainer,
    TitleText
} from './image-slider.styles';
import CustomButton from '../custom-button/custom-button.component';

const ImageSlider = ({imageUrl, caption, textPosition, title}) => (
    <ImageContainer>
        <img src={imageUrl} alt="images-slide-1" width='100%' height='100%' />
        <Overlay>
            <DescriptionContainer>
                <Caption position={textPosition}>
                    <CaptionContainer position={textPosition}>
                        {caption}
                    </CaptionContainer>
                    <TitleText>{title}</TitleText>
                    <CustomButton large>Shop Now</CustomButton>
                </Caption>
                
            </DescriptionContainer>
        </Overlay>
    </ImageContainer>
);

export default ImageSlider;