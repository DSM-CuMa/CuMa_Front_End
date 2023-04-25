import styled from "styled-components";
import Image from "../../assets/images/background.png";
import "../../assets/fonts/font.css";

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${Image});
`;

export const LogoWrapper = styled.div`
    width: 500px;
    height: 500px;
    margin-right: 338px;
`;

export const Logo = styled.img`
`;

export const IntroWrapper = styled.div`
    width: 700px;
`;

export const Intro = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    color: #fff;
    text-align: right;
`;

export const MintColor = styled.span`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    color: #32BE91;
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const TryBtn = styled.button`
    width: 300px;
    height: 100px;
    border: none;
    border-radius: 20px;
    background-color: #6b89ae;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #fff;
    :hover{
        cursor: pointer;
    }
`;