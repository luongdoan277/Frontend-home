import styled, { css } from 'styled-components';

import CustomStyles from '../custom-styles/custom-styles';

export const TitleText = styled.p`
    font-size: 26px;
    font-weight: 200;
    margin: 0 0 35px 0;
    font-family: ${CustomStyles.secondaryFontText};
    color: #afafaf;
`;


export const FlexLeft = css`
    align-items: flex-start;
    justify-content: flex-end;
`;

export const FlexCenter = css`
    align-items: center;
    justify-content: flex-end;
`;

export const FlexRight = css`
    align-items: flex-end;
    justify-content: flex-end;
`;

export const TextAlignLeft = css`
    text-align: left;
`;

export const TextAlignRight = css`
    text-align: right;
`;

export const TextAlignCenter = css`
    text-align: center;
`;

const TextCaptionPosition = props => {
    if (props.position === 'left') {
        return TextAlignLeft;
    }
    else if (props.position === 'right') {
        return TextAlignRight;
    }
    return TextAlignCenter;
};

export const CaptionContainer = styled.div`
    width: 50%;
    margin-bottom: 20px;
    line-height: 4.5rem;
    ${TextCaptionPosition}
`;

const CaptionPosition = props => {
    if (props.position === 'left') {
        return FlexLeft;
    }
    else if (props.position === 'right') {
        return FlexRight
    }
    return FlexCenter
};

export const DescriptionContainer = styled.div`
    padding: 0 100px;
    text-align: left;
`;

export const Caption = styled.div`
    font-size: 50px;
    color: #fff;
    box-sizing: border-box;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    ${CaptionPosition}
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #2b2b2b54;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    img {
        object-fit: cover;
    }
`;

