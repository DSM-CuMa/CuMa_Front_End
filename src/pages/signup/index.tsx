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
    const [checkPassword, setCheckPassword] = useState('');
    const navigate = useNavigate();

    const Toast = Swal.mixin({   
        toast: true,   
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {     
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)  
        }
    })  

    async function SignUp() {
        if(accountId && password && email) {
            if(password === checkPassword) {
                if(accountId.length >= 6 && password.length >= 6) {
                    var regId =  /^[a-zA-Z0-9]*$/;
                    if(regId.test(accountId)) {
                        var regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;
                        if(!regEmail.test(email)) {
                            var regPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
                            if(!regPassword.test(password)) {
                                axios.post("http://localhost:3001/signup", {
                                    id: accountId,
                                    email: email,
                                    password: password
                                })
                                .then((res) => {
                                    console.log(res);
                                    navigate("/login", {replace: true});
                                    Toast.fire({ icon: 'success', title: '회원가입에 성공했습니다' })
                                })
                                .catch((err) => {
                                    Toast.fire({ icon: 'error', title: '회원가입에 실패했습니다' })
                                })
                            }   
                            else {
                                Toast.fire({ icon: 'error', title: '비밀번호가 형식에 맞지 않습니다.' })
                            }
                        }   
                        else {
                            Toast.fire({ icon: 'error', title: '이메일이 형식에 맞지 않습니다.' })
                        }
                    }
                    else {
                        Toast.fire({ icon: 'error', title: '아이디가 형식에 맞지 않습니다.' })
                    }
                }
                else {
                    Toast.fire({ icon: 'error', title: '아이디와 비밀번호는 모두 6자 이상이어야 합니다' })
                }
            }
            else {
                Toast.fire({ icon: 'error', title: '비밀번호가 일치하지 않습니다' })
            }
        }
        else {
            Toast.fire({ icon: 'error', title: '정보를 모두 입력해주세요' })
        }
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
                        value={accountId}
                        onChange={(e)=>setAccountId(e.target.value)}
                        type={"text"}
                        placeholder="아이디를 입력해주세요."
                    />
                </L.InputWrapper>
                <L.InputWrapper>
                    <L.InputName>이메일</L.InputName>
                    <L.Input 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type={"email"}
                        placeholder="이메일을 입력해주세요."
                    />
                </L.InputWrapper>
                <L.InputWrapper>
                    <L.InputName>비밀번호</L.InputName>
                    <L.Input 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type={"password"}
                        placeholder="비밀번호를 입력해주세요."
                    />
                </L.InputWrapper>
                <L.InputWrapper>
                    <L.InputName>비밀번호 재입력</L.InputName>
                    <L.Input 
                        value={checkPassword}
                        onChange={(e)=>setCheckPassword(e.target.value)}
                        type={"password"}
                        placeholder="비밀번호를 다시 입력해주세요."
                    />
                </L.InputWrapper>
                <L.BtnWrapper>
                    <L.SubmitBtn onClick={()=>SignUp()}>확인</L.SubmitBtn>
                </L.BtnWrapper>
            </S.SignUpWrapper>
            <L.MapImage>
                <img src={MapImg} />
            </L.MapImage>
        </S.Page>
    );
}

export default SignUpPage;