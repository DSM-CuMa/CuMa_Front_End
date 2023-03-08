import React from 'react';
import { KakaoMap } from './kakao-map';

declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  return (
    <>
    <KakaoMap />
    </>
  );
}

export default App;
