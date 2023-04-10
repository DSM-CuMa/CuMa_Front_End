import react, { useState } from "react";

// Style
import * as S from "./style";

// Images
import MapImg from "../../assets/images/map.png";
import MapPin from "../../assets/images/RedMapPin.png";

function LoginPage():React.ReactElement {
    const [accountId, setAccountId] = useState('');
    const [password, setPassword] = useState('');
    return(
        <S.Layout>
            <S.LoginWrapper>
                <S.PinImage>
                    <S.Pin src={MapPin} />
                </S.PinImage>
                <S.Title>로그인</S.Title>
                <S.InputWrapper>
                    <S.InputName>로그인</S.InputName>
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
                </S.InputWrapper>
            </S.LoginWrapper>
            <S.MapImage>
                <S.Map src={MapImg} />
            </S.MapImage>
        </S.Layout>
    );
}

export default LoginPage;