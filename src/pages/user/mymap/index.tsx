import React, { useState, useCallback, useEffect, useRef } from "react";
import { Map, MapMarker, ZoomControl, MapTypeControl } from "react-kakao-maps-sdk";

// Styles
import * as S from "./style";

// Images
import Maker from "../../../assets/images/marker.png";
import Menu from "../../../assets/images/menu.png";
import Custom from "../../../assets/images/equalizer.png";
import Comment from "../../../assets/images/comment.png";
import { text } from "stream/consumers";

function MyPage(): React.ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [position, setPosition] = useState<any>();
    const [latitude, setLatitude] = useState<any>();
    const [longitude, setLongitude] = useState<any>();

    kakao.maps.event.addListener(map, 'click', function(mouseEvent: { latLng: any; }){
        const latLng = mouseEvent.latLng;
        setLatitude(latLng.getLat())
        setLongitude(latLng.getLng())
        
    })
    const toggleSide = () => {
        setIsOpen(true);
    };

    const toggleBtn = () => {
        setIsClick(!isClick);
    };

    const handleMapPin = (mouseEvent: any) => {
        if (isClick && mouseEvent.latLng) {
            const lat = mouseEvent.latLng.getLat();
            const lng = mouseEvent.latLng.getLng();
            setPosition({
                lat: lat,
                lng: lng,
            });
        }
    };

    // const handleSearch = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) => {
    //         const keyword = event.target.value;
    //         const filteredList = list.filter((item) =>
    //             item.title.toLowerCase().includes(keyword.toLowerCase())
    //         );
    //         setInterval(filteredList);
    //     },
    //     [list]
    // );

    return (
        <>
            <S.Page>
                <S.MapPinBtn onClick={toggleBtn}>
                    <S.DefaultMaker src={Maker} />
                </S.MapPinBtn>
                <S.CustomMapPinBtn onClick={toggleBtn}>
                    <S.CustomMaker src={Custom} />
                </S.CustomMapPinBtn>
                <S.CommentBtn onClick={toggleBtn}>
                    <S.CommentImg src={Comment} />
                </S.CommentBtn>
                <S.SideConents>
                    <S.SearchContainer>
                        <S.Search type={"text"} placeholder="카테고리를 검색하세요." />
                        <S.ShareBtn>공유하기</S.ShareBtn>
                    </S.SearchContainer>
                    <S.CategoryContainer>
                        <S.Category>
                            <S.CategoryTitle>은행동 오락실</S.CategoryTitle>
                            <S.CategoryUser>박상민</S.CategoryUser>
                        </S.Category>
                        <S.Category>
                            <S.CategoryTitle>내 집 주변 카페</S.CategoryTitle>
                            <S.CategoryUser>익명</S.CategoryUser>
                        </S.Category>
                        <S.Category>
                            <S.CategoryTitle>서울 스타트업 목록</S.CategoryTitle>
                            <S.CategoryUser>testuser01</S.CategoryUser>
                        </S.Category>
                        <S.Category>
                            <S.CategoryTitle>전국 관광지 목록</S.CategoryTitle>
                            <S.CategoryUser>testcase02</S.CategoryUser>
                        </S.Category>
                    </S.CategoryContainer>
                </S.SideConents>
                <Map
                    center={{ lat: 36.39151269716873, lng: 127.36332665035195 }}
                    style={{ width: "80vw", height: "100vh", margin: "0px" }}
                    onClick={handleMapPin}
                    level={3}
                    maxLevel={10}
                >
                    {position && position.lat && position.lng && (
                        <MapMarker position={position} />
                    )}    
                    <ZoomControl position={kakao.maps.ControlPosition.RIGHT} />
                    <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
                </Map>
            </S.Page>
        </>
    );
}

export default MyPage;
