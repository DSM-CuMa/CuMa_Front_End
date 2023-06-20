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
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 105px;
    :hover{
        cursor: pointer;
    }
`;

export const MenuDiv = styled.div`
    width: 63px;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    position: fixed;
    left: 0%;
    background-color: white;
    border-right: 1px solid rgba(0,0,0,.15);
    .logo {
        display: flex;
        flex: 0 0 auto;
        justify-content: center;
        align-items: center;
        height: 76px;
        border-bottom: 1px solid rgba(0,0,0,.15);
        box-sizing: border-box;
        img{
            width:  26px;
            height: 33px;
        }
    }
`

interface MenuProps {
    selected: boolean
}

export const Menu = styled.div<MenuProps>`
    font-family: 'ONEPOP';
    background-color: ${props => props.selected ? "#8362c3" : "white"};
    color: ${props => props.selected ? "white" : "#333"};
    fill: ${props => props.selected ? "white" : "#333"};
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
        filter: ${props => props.selected ? "" : "invert(0%) sepia(19%) saturate(0%) hue-rotate(103deg) brightness(30%) contrast(103%);"};
    }
    div{
        display: flex;
        justify-content: center;
    }
    span {
        display: block;
        min-height: 13px;
        margin-top: 3px;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -.44px;
        text-align: center;
    }
`

export const SideConents = styled.div`
    width: 25vw;
    height: 100%;
    position: fixed;
    background-color: #fff;
    left: 63px;
    z-index: 999;
    box-shadow: 10px 0px 10px -2px rgba(0, 0, 0, 0.2);
`;

export const CreateDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ToolList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    .f{
        border-top: 1px solid rgba(0,0,0,.15);
    }
    /*
    input{
        font-family: 'ONEPOP';
        font-size: 20px;
        letter-spacing: 2px;
        border: 0;
        padding: 0px 15px;
        width: 100%;
        height: 75px;
    }*/
`

interface ToolProps {
    selected: boolean
}

export const Tool = styled.li<ToolProps>`
    font-family: 'ONEPOP';
    padding: 0px 15px;
    height: 60.3px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: ${props => props.selected ? "#8362c3" : "white"};
    color: ${props => props.selected ? "white" : "#333"};
    display: flex;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        height: 20px;
        width: 20px;
        margin-right: 7px;
    }
    img{
        filter: ${props => props.selected ? "" : "invert(0%) sepia(19%) saturate(0%) hue-rotate(103deg) brightness(30%) contrast(103%);"};
    }
    :nth-child(1) {
        border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
`

export const PostBtn = styled.button`
    background-color: #8362c3;
    color: white;
    height: 44px;
    border-radius: 8px;
    margin: 15px;
    font-size: 17px;
    font-family: 'ONEPOP';
`

export const SearchInputDiv = styled.div`
    margin: 16px;
    border: 2px solid #8362C3;
    height: 43px;
    border-radius: 6px;
    input {
        font-family: 'ONEPOP';
        font-size: 16px;
        letter-spacing: 2px;
        border: 0;
        width: 100%;
        border-radius: 6px;
        height: 100%;
        padding: 0 15px;
    }
`

export const AdressList = styled.ul`
    padding: 0;
    list-style: none;
    margin-top: 30px;
    height: calc(100% - 90px);
    overflow-y: auto;
    font-family: 'ONEPOP';
    li {
        cursor: pointer;
        padding: 15px 15px;
        border-bottom: 1px solid #F4F4F4;
        display: flex;
        flex-direction: column;
        div{
            margin-top: 10px;
            display: flex;
        }
        .adress {
            margin-top: 5px;
            color: #666;
            font-size: 13px;
        }
    }
`

export const SearchContainer = styled.div`
    width: 100%;
    height: 76px;
    background-color: #8362C3;
    box-shadow: 1px 1px 3px 1px #dadce0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CategoryContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    height: calc(100% - 95px);
    overflow-y: auto;
`;

interface CategoryProps {
    selected: boolean
}

export const Category = styled.div<CategoryProps>`
    cursor: pointer;
    width: 90%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 1px 3px 3px 1px #dadce0;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 0px 30px;
    background-color: ${props => props.selected ? "#e1d2ff" : "white"};
`;

export const CategoryTitle = styled.div`
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
`;

export const CategoryUser = styled.div`
    margin-top: 3px;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    margin-left: 1px;
    color: #999;
`;

export const Search = styled.input`
    width: 90%;
    height: 46%;
    letter-spacing: 2px;
    background-color: #fff;
    box-shadow: 3px 3px hsl(0deg 0% 0% / 0.38);
    border: none;
    border-radius: 7px;
    text-align: center;
    font-family: 'ONEPOP';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
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

export const Pallete = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
    display: flex;
    flex-direction: column;
    z-index: 999;
    border: 1px solid rgb(226, 226, 226);
    border-top: 0;
    border-radius: 2px;
`

interface PalleteButtonProps {
    selected: boolean;
}

export const PalleteButton = styled.button<PalleteButtonProps>`
    background-color: ${props => props.selected ? "#8362c3" : "white"};
    border: 0;
    border-radius: 0;
    border-top: 1px solid rgb(226, 226, 226);
    outline: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const MarkerName = styled.input`
    margin: 0px 15px;
    margin-top: 20px;
    font-size: 15px;
    height: 43px;
    border: 2px solid #aaa;
    font-family: "ONEPOP";
    padding: 10px;
    outline: 0;
    border-radius: 5px;
    letter-spacing: 1.5px;
    :focus {
        border: 2px solid #8362c3;
    }
`

export const MarkerInfo = styled.textarea`
    letter-spacing: 1.5px;
    font-size: 15px;
    border-radius: 5px;
    height: 230px;
    margin: 0px 15px;
    margin-top: 15px;
    resize: none;
    border: 2px solid #aaa;
    padding: 10px;
    font-family: "ONEPOP";
    outline: 0;
    :focus {
        border: 2px solid #8362c3;
    }
`