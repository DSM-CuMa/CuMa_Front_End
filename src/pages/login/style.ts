import styled from "styled-components";
import "../../assets/fonts/font.css";

export const Layout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const LoginWrapper = styled.div`
    width: 500px;
    height: 650px;
    margin-top: 150px;
    margin-right: 130px;
`;

export const PinImage = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    margin: 0;
`;

export const Pin = styled.img`

`;

export const Title = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    width: 100%;
    height: 80px;
    font-size: 72px;
    display: flex;
    justify-content: center;
`;

export const MapImage = styled.div`
    height: 100vh;
    margin-left: 130px;
    display: flex;
    align-items: center;
`;

export const Map = styled.img`
    margin-right: 150px;
`;

export const InputWrapper = styled.div`
    :first-child{
        margin-bottom: 50px;
    }
`;

export const InputName = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    margin-left: 20px;
`;

export const Input = styled.input`
    width: 470px;
    height: 60px;
    border-width: 0.1px;
    border-radius: 20px;
    border-color: #000;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding-left: 30px;
`;