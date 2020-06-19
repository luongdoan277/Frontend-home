import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import CustomStyles from '../custom-styles/custom-styles';

export const TransparentBackgroundStyle = css`
    background-color: transparent;
`;

export const WhiteBackgroundStyle = css`
    background-color: #292929;
    box-shadow: ${(({offset}) => offset? '0px 0px 7px #4e4e4e96' : 'none')} ;
`;

const HeaderStyle = props => {
    if (props.transparent) {
        return WhiteBackgroundStyle;
    }
    return TransparentBackgroundStyle;
}

const OptionColor = props => {
    if (props.dark) {
        return CustomStyles.primaryColor
    }
    return '#e4e4e4'
}

export const Option = styled(Link)`
    font-size: 15px;
    color: ${OptionColor};
    text-decoration: none;
    padding: 0 25px;

    &:hover {
        color: ${CustomStyles.secondaryColor};
    }
`;


export const SignOutText = styled.p`
    font-size: 15px;
    color: ${OptionColor};
    text-decoration: none;
    padding: 0 25px;
    font-weight: bold;
`;

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin: auto;
    transition: all .6s;
    ${HeaderStyle}
`;

export const HeaderLeftMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoContainer = styled(Link)`
    height: 190px;
    width: 190px;
    padding-right: 30px;
    display: inline-block;
    margin-left: -10px;
`;


export const HeaderRightMenu = styled.div`
    div {
        display: inline-block;
    }
`;

export const ButtonShopNow = styled.div`
    padding-left: 35px;
`;

export const LogoWrap = styled.div`
    height: 50px;
    width: 220px;
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const style = {
    option: {
        color: CustomStyles.primaryColor,
        fontSize: '20px',
        padding: '0 25px'
    },
    option_grey : {
        color: '#e4e4e4',
        fontSize: '20px',
        padding: '0 25px'
    },
    signoutStyle: {
        fontSize: '16px',
        marginLeft: '10px'
    }
};

export default style;