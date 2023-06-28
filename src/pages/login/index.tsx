import react, { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {Cookies} from 'react-cookie';

// Style
import * as S from "./style";

// Images
import MapImg from "../../assets/images/map.png";
import MapPin from "../../assets/images/RedMapPin.png";

function LoginPage():React.ReactElement {
    const [accountId, setAccountId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const cookies = new Cookies()
    const setCookie = (name: string, value: string, option?: any) => {
        return cookies.set(name, value, {...option})
    }

    async function Login() {
        axios.post("/login", {
            id: accountId,
            password: password,
        })
        .then((res) => {
            console.log(res);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });
            Toast.fire({
                icon: "success",
                title: "로그인에 성공하였습니다.",
            });
            setCookie("atk", res.data.access_token)
            setCookie("rtk", res.data.access_token)
            navigate("/map", {replace: true});
            window.location.reload();
        })
        .catch((err) => {
            if(err.response){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.header);
            }
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });
            Toast.fire({
                icon: "error",
                title: "로그인에 실패하였습니다.",
            });
        })
    }
    return(
        <S.Layout>
            <S.LoginWrapper>
                <S.PinImage>
                    <img src={MapPin} />
                </S.PinImage>
                <S.Title>로그인</S.Title>
                <S.InputWrapper>
                    <S.InputName>아이디</S.InputName>
                    <S.Input 
                        type={"text"}
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        placeholder="아이디를 입력해주세요."
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.InputName>비밀번호</S.InputName>
                    <S.Input
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력하세요."
                    />
                    <S.CheckBoxWrapper>
                        <S.IdSave
                            type={"checkbox"}
                        />
                        <S.CheckBoxName>아이디 저장</S.CheckBoxName>
                        <S.LinkWrapper>
                            <S.SignUpLink onClick={() => navigate("/signup")}>계정이 없으신가요?</S.SignUpLink>
                        </S.LinkWrapper>
                    </S.CheckBoxWrapper>
                </S.InputWrapper>
                <S.BtnWrapper>
                    <S.SubmitBtn onClick={()=>Login()}>확인</S.SubmitBtn>
                </S.BtnWrapper>
            </S.LoginWrapper>
            <S.MapImage>
                <img src={MapImg} />
            </S.MapImage>
        </S.Layout>
    );
}

export default LoginPage;