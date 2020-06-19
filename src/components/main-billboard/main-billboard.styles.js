import styled, { css } from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';

export const MainBillboardContainer = styled.div`
    margin: 0px auto 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Chevron = css`
    position: absolute;
    top: 360px;
    color: ${CustomStyles.primaryColor};
    font-size: 30px;
    z-index: 3;
    cursor: pointer;
    transition: all .4s;
    opacity: 0;
`;

export const ChevronLeft = styled.div`
    left: -10px;
    ${Chevron}
`;

export const ChevronRight = styled.div`
    right: -10px;
    ${Chevron}
`;

export const ImagesSlideContainer = styled.div`
    flex: 1;
    width: 100%;
    overflow: hidden;
    position: relative;

    &:hover ${ChevronLeft} {
        color: white;
        transform: translateX(30px);
        opacity: 1;
    }

    &:hover ${ChevronRight} {
        color: white;
        transform: translateX(-30px);
        opacity: 1;
    }
`;