import react, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// Style
import * as S from "./style";
import * as L from "../login/style";

// Images
import MapImg from "../../assets/images/map.png";
import MapPin from "../../assets/images/RedMapPin.png";

function SignUpPage():React.ReactElement {
    const [accountId, setAccountId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function SignUp() {
        axios.post("http://localhost:3001/signup", {
            accountId: accountId,
            email: email,
            password: password
        })
        .then((res) => {
            console.log(res);
            navigate("/login", {replace: true});
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return(
        <S.Page>
            <S.SignUpWrapper>
                <L.PinImage>
                    <img src={MapPin} />
                </L.PinImage>
                <S.Title>회원가입</S.Title>
                <L.InputWrapper>
                    <L.InputName>아이디</L.InputName>
                    <L.Input
                        type={"text"}
                        placeholder="아이디를 입력해주세요."
                    />
                </L.InputWrapper>
                <L.InputWrapper>
                    <L.InputName>이메일</L.InputName>
                    <L.Input 
                        type={"email"}
                        placeholder="이메일을 입력해주세요."
                    />
                </L.InputWrapper>
                <L.InputWrapper>
                    <L.InputName>비밀번호</L.InputName>
                    <L.Input 
                        type={"password"}
                        placeholder="비밀번호를 입력해주세요."
                    />
                </L.InputWrapper>
                <L.InputWrapper>
                    <L.InputName>비밀번호 재입력</L.InputName>
                    <L.Input 
                        type={"password"}
                        placeholder="비밀번호를 다시 입력해주세요."
                    />
                </L.InputWrapper>
                <L.BtnWrapper>
                    <L.SubmitBtn>확인</L.SubmitBtn>
                </L.BtnWrapper>
            </S.SignUpWrapper>
            <L.MapImage>
                <img src={MapImg} />
            </L.MapImage>
        </S.Page>
    );
}

export default SignUpPage;