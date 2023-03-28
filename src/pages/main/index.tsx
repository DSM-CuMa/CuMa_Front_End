import React, { useState, useEffect } from "react";

// Styles
import * as S from "./style";

// Images
import Background1 from "../../assets/images/background 1.png";
import Background2 from "../../assets/images/background 2.png";
import Background3 from "../../assets/images/background 3.png";
import Background4 from "../../assets/images/background 4.png";
import Logo from "../../assets/images/logo.png";

function MainPage(): React.ReactElement {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [Background1, Background2, Background3, Background4];

    useEffect(() => {
        const intervalld = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalld);
    }, [images.length]);
    return(
        <S.Layout>
            <S.Background src={images[imageIndex]} alt="slider">

            </S.Background>
        </S.Layout>
    );
}

export default MainPage;