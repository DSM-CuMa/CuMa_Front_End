import react, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

// Styles
import * as S from "./style";

function MyPage():React.ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [position, setPosition] = useState<any>();
    const toggleSide = () => {
        setIsOpen(true);
    }

    const newMapPin = () => {
        setIsClick(true);
    }

    const handleMapPin = (_t: any, mouseEvent: { latLng: { getLat: () => any; getLng: () => any; }; }) => {
        setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
        })
    }
    return(
        <Map
            center={{ lat: 36.39151269716873, lng: 127.36332665035195 }}
            style={{ width: "100%", height: "100vh" }}
            onClick={handleMapPin}
            level={3}
            maxLevel={10}
            >
            <S.MapPinBtn>
                {position && <MapMarker position={position} />}
            </S.MapPinBtn>
        </Map>
    )
} 

export default MyPage;