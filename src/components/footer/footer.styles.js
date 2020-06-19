import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomStyles from '../custom-styles/custom-styles';

const TextColor = '#dedede';

export const FooterContainer = styled.div`
    background-color: #1f1f1f;
    margin: 80px 0 0;
`;

export const FooterPart = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-gap: 40px;
`;

export const FooterLargeContainer = styled.div`
    padding: 0px 20px 0 0;
    border-box: box-sizing;
    text-align: left;

    &:last-child {
        padding : 0;
    }
`;

export const FooterMediumContainer = styled.div`
    padding: 0px 20px 0 0;
    text-align: left;
`;

export const FooterLogoContainer = styled.div`
    width: 180px;
    height: 70px;
    margin-left: -10px;

    img {
        object-fit: cover;
    }
`;

export const Hightlight = styled.span`
    color:  ${CustomStyles.secondaryColor}
`;

export const AdditionalInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;

    &:first-child {
        margin-right: 20px;

    }
`;


export const DefaultFooterText = styled.p`
    font-size: 13px;
    color: ${TextColor};
    line-height: 30px;
    margin-top: 0;
`;

export const FooterMainTitleText = styled.p`    
    text-transform: uppercase;
    font-size: 17px;
    color: ${TextColor};
    line-height: 30px;
`;

export const FooterLinkText = styled(Link)`
    font-size: 13px;
    color: ${TextColor};
    display: block;
    text-decoration: none;
    line-height: 30px;

    &:hover {
        text-decoration: underline;
    }
`;

export const SocialMediaContainer =  styled.div`
    width: 100%;
`;

export const style = {
    socmedIconStyle : {
        fontSize: '26px',
        width: '60px',
        color: TextColor,
    }
}