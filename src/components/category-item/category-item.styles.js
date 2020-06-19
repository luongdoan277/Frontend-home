import styled, { css } from 'styled-components';

import CustomStyles from '../custom-styles/custom-styles';


export const DefaultSectionContainerWidth = css`
    width: 23%;
`;

export const LargeSectionContainerWidth = css`
    width: 49%;
    img {
        filter: grayscale(100%);
    }
`;

const SectionWidth = props => {
    if (props.size === 'large') {
        return LargeSectionContainerWidth;
    }
    return DefaultSectionContainerWidth;
}


export const Zoom = css`
    cursor: pointer;
    &:hover img {
        transform: scale(1.2);
    }  
`;


const ZoomSectionContainer = props => {
    if (props.zoom) {
        return Zoom;
    }
}

export const SectionContainer = styled.div`
    height: 360px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    ${SectionWidth}

    img {
        object-fit: cover;
        transition: all 3.5s;
    }

    ${ZoomSectionContainer}
`;

export const LargeText = css`
    font-size: 70px;
    font-weight: bold;
    color: ${CustomStyles.secondaryColor};
    font-family: ${CustomStyles.primaryFontText} ;
`;


export const DefaultText = css`
    font-size: 43px;
    color: white;
    font-family: ${CustomStyles.secondaryFontText} ;
`;

const TextStyle = props => {
    if (props.size === 'large') {
        return LargeText;
    }
    return DefaultText;
}

export const SectionOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0000003d;

    p {
        position: absolute;
        text-transform: capitalize;
        bottom: 0;
        right: 20px;
        text-align: right;
        margin: 0;
        ${TextStyle}
    }
`;