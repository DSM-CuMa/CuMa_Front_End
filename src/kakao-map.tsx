import { useEffect } from "react";

export const KakaoMap = () => {
    useEffect(() => {
        let container = document.getElementById("map");
        let options = {
        center: new window.kakao.maps.LatLng(
        37.558090961074825,
        126.99847210567884
    ),
    level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
    }, []);
    return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};