import React, { useState, useEffect, useRef } from "react";
import { Map, MapMarker, ZoomControl, MapTypeControl, Roadview } from "react-kakao-maps-sdk";
import axios from "axios";
import Swal from "sweetalert2";

// Styles
import * as S from "./style";

// Images
import Category from "../../../assets/images/cateogory.svg";
import Create from "../../../assets/images/create.svg";
import Search from "../../../assets/images/search.svg";
import MapPin from "../../../assets/images/mappin.png";
import MapPin2  from "../../../assets/images/mappin2.png";
import Add from "../../../assets/images/add.svg";
import Del  from "../../../assets/images/del.svg";
import Edit from "../../../assets/images/edit.svg";
import Info from "../../../assets/images/info.svg";

interface locationProps {
    title: string,
    info: string,
    position: {
        lat: number,
        lng: number
    }
}

interface categoryProps {
    title: string,
    user?: string,
    locations: locationProps[]
}

function MyPage(): React.ReactElement {

    const [menu, setMenu] = useState<string>("");
    const [mode, setMode] = useState<string>("");
    const [categories, setCategories] = useState<categoryProps[]>([]);
    const [locations, setLocations] = useState<locationProps[]>([]);
    const [selectedMaker, setSelectedMaker] = useState<any>(-1);

    //현재위치 가져오기
    const [location, setLoacation] = useState<any>({latitude: 37.5776087830657, longitude: 126.976896737645});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(getLocationSuccess);
	}, [])

	const getLocationSuccess = (response: any) => {
		console.log(response);
		const { latitude, longitude } = response.coords;
		setLoacation({ latitude, longitude });
	};
    //

    //맵 클릭 함수
    const handleMap = (mouseEvent: any) => {
        
        const lat = mouseEvent.latLng.getLat();
        const lng = mouseEvent.latLng.getLng();

        if(mode === "add" && menu === "create") {
            const checkSame = (e: any) => {
                if(e.position.lat === lat && e.position.lng === lng)
                    return true;
            }
            const already  = locations.some(checkSame)
            if(!already)
                setLocations([...locations, {title: "", info:"", position:{lat: lat, lng: lng}}])
            setSelectedCategory(-1);
        }
    };

    //마커 클릭 함수
    const handleMapMaker = (idx: number) => {
        console.log(idx);
        if(mode === "del" && menu === "create") {
            if(idx === selectedMaker)
                setSelectedMaker(-1);
            else if(selectedMaker > idx)
                setSelectedMaker(selectedMaker-1);
            setLocations(locations.filter((i, index) => index !== idx))
            setSelectedCategory(-1);
        }
        else if(mode === "edit" || mode === "" || menu !== "create") {
            setSelectedMaker(idx);
            setMenu("info")
        }
    }

    const changeMenu = (e: string) => {
        if(menu === e)
            setMenu("");
        else
            setMenu(e);
    }

    const changeMode = (e: string) => {
        if(mode === e)
            setMode("");
        else
            setMode(e);
    }

    //주소 검색
    const [adressList, setAdressList] = useState<any[]>([]);

    const kakaoToken = "7065b28ba1ac02a1ac133a6afe786462"

    function getList(keyword: string) {
        axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`, {headers: {Authorization: `KakaoAK ${kakaoToken}`}})
        .then((res: any) => {
            const list : any[] = [];
            res.data.documents.map((i: any)=> {
            list.push({name: i.place_name, adressName: i.address_name, x: i.x, y: i.y})
            })
            setAdressList(list);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    } 

    const searchHandleOnKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            getList(e.target.value)
        }
    };

    //토스트
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

    useEffect(()=>{
        getCategoryList();
    },[])

    const getCategoryList = (keyword?: string) => {
        axios.get(`/category${keyword ? `?q=${keyword}` : ""}`)
            .then(res => {
                console.log(res.data);
                setCategories(res.data);
            })
            .catch(err => {
                Toast.fire({ icon: 'error', title: '불러오는데 실패했습니다' })
            })
    }

    const categoryHandleOnKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            getCategoryList(e.target.value)
        }
    }

    const moveToAdress = (i: any) => {
        setLoacation({latitude: Number(i.y), longitude: Number(i.x)})
        const checkSame = (e: any) => {
            if(e.position.lat === Number(i.y) && e.position.lng === Number(i.x))
                return true;
        }
        const already  = locations.some(checkSame)
        if(!already)
            setLocations([...locations, {title: i.name, info: "", position: {lat: Number(i.y), lng: Number(i.x)}}])
    }

    const onChangeInfo = (e: any) => {
        const { name, value } = e.target;
        let loc = locations[selectedMaker];
        loc = {...loc, [name]: value};
        console.log(loc);
        let list = locations;
        list[selectedMaker] = loc;
        setLocations(list);
        setSelectedCategory(-1);
    }

    //카테고리 등록
    const postCategory = () => {
        Swal.fire({
            title: '카테고리 등록',
            text: '카테고리를 등록 하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            reverseButtons: true,
        })
        .then(result => {
            if(locations.length >= 3) {
                if(titleRef.current?.value) {
                    axios.post("/category", {title: titleRef.current?.value, locations: locations})
                        .then(res => {
                            Toast.fire({ icon: 'success', title: '성공적으로 등록했습니다' })
                            getCategoryList();
                        })
                        .catch(err => {
                            console.log(err);
                            if(err.response.status === 409)
                                Toast.fire({ icon: 'error', title: '중복되는 카테고리명 입니다' })
                            else
                                Toast.fire({ icon: 'error', title: '등록에 실패했습니다' })
                        })
                }
                else
                    Toast.fire({ icon: 'error', title: '제목을 입력해주세요' })
            }
            else
                Toast.fire({ icon: 'error', title: '최소 3개 이상의 마커를 등록해주세요' })
        });
    }

    const [selectedCategory, setSelectedCategory] = useState<number>(-1);

    const selectCategory = (clocations: locationProps[], idx: number) => {
        setSelectedCategory(idx);
        setSelectedMaker(-1);
        setLocations([...clocations]);
    }

    const titleRef = useRef<HTMLInputElement | null>(null);

    const SideBarContent = () => {
        switch(menu) {
            case "create":
                return (
                    <S.CreateDiv>
                        <S.ToolList>
                        <S.SearchInputDiv>
                            <input placeholder="카테고리 이름을 입력하세요." ref={titleRef}/>
                        </S.SearchInputDiv>
                            <S.Tool className="f" selected={mode==="add"} onClick={()=>changeMode("add")}>
                                <div>
                                    <img src={Add}/>
                                </div>
                                <span>마커 추가</span>
                            </S.Tool>
                            <S.Tool selected={mode==="edit"} onClick={()=>changeMode("edit")}>
                                <div>
                                    <img src={Edit}/>
                                </div>
                                <span>마커 수정</span>
                            </S.Tool>
                            <S.Tool selected={mode==="del"} onClick={()=>changeMode("del")}>
                                <div>
                                    <img src={Del}/>
                                </div>
                                <span>마커 삭제</span>
                            </S.Tool>
                        </S.ToolList>
                        <S.PostBtn onClick={()=>postCategory()}>등록</S.PostBtn>
                    </S.CreateDiv>
                )
            case "search":
                return (
                    <>
                        <S.SearchInputDiv>
                            <input placeholder="장소, 도로를 검색하세요." onKeyPress={searchHandleOnKeyPress}/>
                        </S.SearchInputDiv>
                        <S.AdressList>
                            {adressList.map((i: any, idx: number) => (
                                <li key={idx} onClick={()=>moveToAdress(i)}>
                                    <span>{i.name}</span>
                                    <span className="adress">{i.adressName}</span>
                                </li>
                            ))}
                        </S.AdressList>
                    </>
                )
            case "category":
                return (
                    <>
                    <S.SearchContainer>
                        <S.Search placeholder="카테고리를 검색하세요." onKeyPress={categoryHandleOnKeyPress}/>
                    </S.SearchContainer>
                    <S.CategoryContainer>
                        {categories.map((category: categoryProps, idx: number) => (
                            <S.Category selected={idx===selectedCategory} key={idx} onClick={()=>selectCategory(category.locations, idx)}>
                                <S.CategoryTitle>{category.title}</S.CategoryTitle>
                                <S.CategoryUser>{category.user}</S.CategoryUser>
                            </S.Category>
                        ))}
                    </S.CategoryContainer>
                    </>
                )
            case "info":
                return (
                    <S.InfoDiv>
                        <Roadview 
                            style={{ width: "100%", height: "255px", margin: "0px" }}
                            position={{ lat: locations[selectedMaker].position.lat, lng: locations[selectedMaker].position.lng, radius: 30}}
                        />
                        <S.MarkerName placeholder="이름을 입력해주세요." onChange={(e)=>onChangeInfo(e)} name="title" defaultValue={locations[selectedMaker].title}/>
                        <S.MarkerInfo placeholder="설명을 입력해주세요." onChange={(e)=>onChangeInfo(e)} name="info" defaultValue={locations[selectedMaker].info}/>
                    </S.InfoDiv>
                )
            default:
                return <></>
        }
    }

    return (
        <>
            <S.Page>
                <S.MenuDiv>
                    <div className="logo">
                        <img src={MapPin}/>
                    </div>
                    <S.Menu selected={menu==="category"} onClick={()=>changeMenu("category")}>
                        <div>
                            <img src={Category}/>
                        </div>
                        <span>카테고리</span>
                    </S.Menu>
                    <S.Menu selected={menu==="search"} onClick={()=>changeMenu("search")}>
                        <div>
                            <img src={Search}/>
                        </div>
                        <span>지도 검색</span>
                    </S.Menu>
                    <S.Menu selected={menu==="create"} onClick={()=>changeMenu("create")}>
                        <div>
                            <img src={Create}/>
                        </div>
                        <span>만들기</span>
                    </S.Menu>
                    {selectedMaker !== -1 ?
                        <S.Menu selected={menu==="info"} onClick={()=>changeMenu("info")}>
                            <div>
                                <img src={Info}/>
                            </div>
                            <span>정보</span>
                        </S.Menu>
                        :
                        <></>
                    }
                </S.MenuDiv>
                {menu !== "" ?
                    <S.SideConents>
                        <SideBarContent/>
                    </S.SideConents>
                    :
                    <></>
                }
                <Map
                    center={{ lat: location.latitude, lng: location.longitude }}
                    style={{ width: "calc(100vw-63px)", height: "100vh", margin: "0px", position: "relative" }}
                    onClick={(_t, mouseEvent) => handleMap(mouseEvent)}
                    level={3}
                    maxLevel={10}
                >
                    {locations.map((loc: locationProps, idx) => (
                        <MapMarker 
                            key={`${loc.title}-${loc.position}`}
                            position={loc.position} 
                            title={loc.title}
                            image={{src: `${idx === selectedMaker ? MapPin2 : MapPin}`, size: {width: 25, height: 33}}}
                            onClick={()=>handleMapMaker(idx)}
                        />
                    ))}
                    <ZoomControl position={kakao.maps.ControlPosition.RIGHT} />
                    <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
                </Map>
            </S.Page>
        </>
    );
}

export default React.memo(MyPage);
