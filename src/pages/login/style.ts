import styled from "styled-components";
import "../../assets/fonts/font.css";
import { type } from "os";

export const Layout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const LoginWrapper = styled.div`
    width: 500px;
    height: 650px;
    margin-top: 130px;
    margin-right: 130px;
`;

export const PinImage = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    margin: 0;
`;

export const Title = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`;

export const MapImage = styled.div`
    height: 100vh;
    margin-left: 130px;
    display: flex;
    align-items: center;
`;

export const InputWrapper = styled.div`
    margin-bottom: 50px;
`;

export const InputName = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    margin-left: 20px;
`;

export const Input = styled.input`
    width: 466px;
    height: 50px;
    border-width: 1px;
    border-radius: 20px;
    border-color: #000;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding-left: 30px;
`;

export const CheckBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    margin-top: 3px;
`;

export const IdSave = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #000;
    &:checked{
        
    }
`;

export const CheckBoxLabel = styled.label`
    
`;

export const CheckBoxName = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-left: 5px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SignUpLink = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    :hover{
        cursor: pointer;
        color: #0000ff;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const SubmitBtn = styled.button`
    width: 500px;
    height: 50px;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #fff;
    background-color: #6b89ae;
    border: none;
    border-radius: 20px;
    :hover{
        cursor: pointer;
    }
`;