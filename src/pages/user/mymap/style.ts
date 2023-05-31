import styled from "styled-components";
import "../../../assets/fonts/font.css";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ShareBtn = styled.div`
    position: absolute;
    width: 40%;
    height: 30px;
    background-color: #8362C3;
    border-radius: 7px;
    box-shadow: 0 2px 2px gray inset;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    :hover{
        cursor: pointer;
    }
`;

export const SideConents = styled.div`
    width: 20vw;
    height: 100%;
    position: absolute;
    background-color: #fff;
    right: 0%;
`;

export const SearchContainer = styled.div`
    width: 100%;
    height: 15%;
    background-color: #8362C3;
    box-shadow: 1px 1px 3px 1px #dadce0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CategoryContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Category = styled.div`
    width: 90%;
    height: 10%;
    box-shadow: 1px 3px 3px 1px #dadce0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    border: 1px solid #ccc;
`;

export const CategoryTitle = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    margin-left: 30px;
`;

export const CategoryUser = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-left: 35px;
`;

export const Search = styled.input`
    width: 90%;
    height: 30%;
    background-color: #fff;
    box-shadow: 3px 3px hsl(0deg 0% 0% / 0.38);
    border: none;
    border-radius: 7px;
    text-align: center;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    outline: none;
`;

export const MapPinBtn = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #dadce0;
    z-index: 2;
    top: 50%;
    left: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        cursor: pointer;
    }
    :active{
        box-shadow: 1px 1px 3px 1px #dadce0 inset;
    }
`;

export const DefaultMaker = styled.img`
    width: 30px;
    height: 42px;
    text-align: center;
    position: absolute;
`;

export const CustomMapPinBtn = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #dadce0;
    z-index: 2;
    top: 44%;
    left: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        cursor: pointer;
    }
    :active{
        box-shadow: 1px 1px 3px 1px #dadce0 inset;
    }
`;

export const CustomMaker = styled.img`
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
`;

export const CommentBtn = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #dadce0;
    z-index: 2;
    top: 38%;
    left: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        cursor: pointer;
    }
    :active{
        box-shadow: 1px 1px 3px 1px #dadce0 inset;
    }
`;

export const CommentImg = styled.img`
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
`;

export const MenuBtn = styled.div`
    width: 30px;
    height: 30px;
    z-index: 3;
`;

export const MenuImg = styled.img`
    width: 30px;
    height: 30px;
    z-index: 3;
`;