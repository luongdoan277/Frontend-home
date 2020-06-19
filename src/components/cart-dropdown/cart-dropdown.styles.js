import styled from 'styled-components';
import CustomStyles from '../custom-styles/custom-styles';

export const CartContainer = styled.div`
    position: absolute;
    height: 500px;
    width: 340px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    top: 75px;
    border-radius: 5px;
    right: 50px;
    padding: 20px 15px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Triangel = styled.div`
    top: -20px;
    right: 114px;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 50px solid white;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.19));
`;

export const Clear = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    background-color: white;
    text-align: left;

    p {
        font-size: 18px;
        padding: 10px 15px;
    }
`;

export const CartDropdownContainer = styled.div`
    position: relative;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow-y: auto;
    margin: 30px 0 70px;
    width: 100%;
`;


export const CartButtonContainer = styled.div`
    position: absolute;
    bottom: 0px;
    text-align: center;
    left: 0;
    right: 0;
    padding: 7px 15px 0;
    height: 100px;
    background-color: white;
`;

export const SubtotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-top : 5px;
`;

export const SubtotalText = styled.p`
    font-size: 18px;
    margin: 0;
    font-family: ${CustomStyles.primaryFontTextBold};
`;

export const SubtotalNominalText = styled.p`
    font-size: 18px;
    color: ${CustomStyles.tertierColor};
    margin: 0;
    font-family: ${CustomStyles.primaryFontTextBold};
`;

export const EmptyText = styled.p`
    margin-top: 150px;
`;

const style = {
    closeIcon : {float: 'right', fontSize: '16px', cursor: 'pointer'}
};

export default style;