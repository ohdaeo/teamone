import { MainContentDiv } from "../styles/styledMain";
import Banner from "./Banner";
import ImageSlide from "./ImageSlide";
import NoticeGallery from "./NoticeGallery";
import Shortcut from "./Shortcut";

const Main = () => {
  return (
    <div>
      <ImageSlide>이미지 슬라이드</ImageSlide>
      <MainContentDiv>
        <NoticeGallery>공지사항/갤러리</NoticeGallery>
        <Banner>배너</Banner>
        <Shortcut>바로가기</Shortcut>
      </MainContentDiv>
    </div>
  );
};
export default Main;
