import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import * as S from "./style";

// Images
import Logo from "../../assets/images/logo.png";

function MainPage(): React.ReactElement {
    const navigate = useNavigate();
    return(
        <S.Background>
            <S.LogoWrapper>
                <img src={Logo} />
            </S.LogoWrapper>
            <S.IntroWrapper>
                <S.Intro>맵핀 공유 서비스 <S.MintColor>CuMa</S.MintColor> 다양한 사람들과 장소를 공유해보세요!</S.Intro>
                <S.BtnWrapper>
                    <S.TryBtn onClick={() => navigate("/login")}>시작하기</S.TryBtn>
                </S.BtnWrapper>
            </S.IntroWrapper>
        </S.Background>
    );
}

export default MainPage;