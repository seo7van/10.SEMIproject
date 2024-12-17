import React, { useState, useEffect } from 'react'
import './styles/Main.css';
import { Link } from 'react-router-dom';
import PostRegister from './PostRegister'; // 경로를 확인하세요

const Main = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    `/img/main_img1.jpg`,
    `/img/main_img2.jpg`,
    `/img/main_img3.jpg`, // 추가할 이미지 경로
  ];

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  // 3초마다 다음 이미지로 변경
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
  }, []);

  return (
    <>
      <div>
          <section className='main_container'> 
              <figure>
                  <img  
                      src={images[imageIndex]}
                      alt="Main" 
                      className="main_image" 
                  />

                  {/* 메인이미지 위에 올릴 텍스트 */}
                  <div className="overlay_text">
                      <h1 className="overlay_title">영화같은 하룻밤, 부커스 비치 호텔</h1>
                      <h3 className="overlay_detail">강원도 양양에 재현한 1970-80년대 미국의 레트로 무드</h3>
                  </div>
              </figure>

              {/* 버튼을 이미지 위에 배치 */}
              <div className="button_container">
                <button onClick={previousImage} className="image-toggle-button"> &lt; </button>
                <button onClick={nextImage} className="image-toggle-button"> &gt; </button>
              </div>
          </section>
      </div>

      <section className="container">
        <div className="list_items"> {/* 리스트 항목들을 감싸는 div 추가 */}
            <h2 className='list_main_name'>POPIN POP-UP</h2> {/* 제목 */}

            <div className="carousel"> {/* 캐러셀 컨테이너 추가 */}
            <button className="carousel-button prev" onClick={handlePrev}>이전</button>

            {/* 리스트 항목들을 감싸는 div 추가 */}
            <div className="list_content">
                {/* 첫번째 큰 리스트 */}
                <article className="list_item">  {/* 리스트1 제목 */}
                    <img src="/img/list1-img.jpg" alt="list_img" className="list_img" /> 

                    <div className="text_content">
                        <h3 className="list_subtitle">이토록 다채로운 블랙, 누아르 마르디 메크르디</h3>
                        <p className="list_detail">: 카페, 레코드숍, 리빙 편집숍이 한 건물에</p>
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}> {/* 버튼 추가 */}
                            키워드 1
                        </button> &nbsp;
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}>
                            키워드 2
                        </button>
                    </div>
                </article>
                <article className="list_item">  {/* 리스트2 제목 */}
                    <img src="/img/list2-img.jpg" alt="list_img" className="list_img" /> 
                    <div className="text_content">
                        <h3 className="list_subtitle">파친코2, 두 배로 몰입하는 방법</h3>
                        <p className="list_detail">프로젝트 렌트 3개 공간에 마련된 "Apple TV+ 파친코" 팝업스토어</p>
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}> {/* 버튼 추가 */}
                            키워드 1
                        </button> &nbsp;
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}>
                            키워드 2
                        </button>
                    </div>
                </article>
                <article className="list_item">  {/* 리스트3 제목 */}
                    <img src="/img/list3-img.jpg" alt="list_img" className="list_img" /> 
                    <div className="text_content">
                        <h3 className="list_subtitle">키아프 서울 2024에 주목할 시간</h3>
                        <p className="list_detail">예술이 깃든 9월 첫 주, 키아프 서울 "Kiaf SEOUL"과 함께!</p>
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}> {/* 버튼 추가 */}
                            키워드 1
                        </button> &nbsp;
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}>
                            키워드 2
                        </button>
                    </div>
                </article>
            </div> {/* 리스트 항목들을 감싸는 div 종료 */}

            <button className="carousel-button next" onClick={handleNext}>다음</button>
        </div>
        </div>

        
    </section>

    <section className="container">
        <div className="list_items"> {/* 리스트 항목들을 감싸는 div 추가 */}
            <h2 className='list_main_name'>지금 이 공간</h2> {/* 제목 */}

            {/* 리스트 항목들을 감싸는 div 추가 */}
            <div className="list_content">
                {/* 첫번째 큰 리스트 */}
                <article className="list_item">  {/* 리스트1 제목 */}
                    <img src="/img/list1-img.jpg" alt="list_img" className="list_img" /> 

                    <div className="text_content">
                        <h3 className="list_subtitle">이토록 다채로운 블랙, 누아르 마르디 메크르디</h3>
                        <p className="list_detail">: 카페, 레코드숍, 리빙 편집숍이 한 건물에</p>
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}> {/* 버튼 추가 */}
                            키워드 1
                        </button> &nbsp;
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}>
                            키워드 2
                        </button>
                    </div>
                </article>
                <article className="list_item">  {/* 리스트2 제목 */}
                    <img src="/img/list2-img.jpg" alt="list_img" className="list_img" /> 
                    <div className="text_content">
                        <h3 className="list_subtitle">파친코2, 두 배로 몰입하는 방법</h3>
                        <p className="list_detail">프로젝트 렌트 3개 공간에 마련된 "Apple TV+ 파친코" 팝업스토어</p>
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}> {/* 버튼 추가 */}
                            키워드 1
                        </button> &nbsp;
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}>
                            키워드 2
                        </button>
                    </div>
                </article>
                <article className="list_item">  {/* 리스트3 제목 */}
                    <img src="/img/list3-img.jpg" alt="list_img" className="list_img" /> 
                    <div className="text_content">
                        <h3 className="list_subtitle">키아프 서울 2024에 주목할 시간</h3>
                        <p className="list_detail">예술이 깃든 9월 첫 주, 키아프 서울 "Kiaf SEOUL"과 함께!</p>
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}> {/* 버튼 추가 */}
                            키워드 1
                        </button> &nbsp;
                        <button className="list_button" onClick={() => alert('버튼이 클릭되었습니다!')}>
                            키워드 2
                        </button>
                    </div>
                </article>
            </div> {/* 리스트 항목들을 감싸는 div 종료 */}
        </div>

        
    </section>
          

      </>
  );
}

export default Main;