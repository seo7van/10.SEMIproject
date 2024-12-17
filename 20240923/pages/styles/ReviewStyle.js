import styled from 'styled-components';

export const ReviewContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  background-color: #fffaf0;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Jeju Gothic', sans-serif;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const ReviewTitle = styled.h1`
  font-size: 2.4rem;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
`;

export const ReviewForm = styled.div`
  margin-bottom: 30px;
`;

export const ReviewInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 2px solid #f39c12;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-family: 'Jeju Gothic', sans-serif;
`;

export const ReviewRatingSelect = styled.div`
  margin-bottom: 20px;
  text-align: center;

  p {
    font-size: 1.5rem;
    color: #e67e22;
    margin-bottom: 10px;
  }
`;

// 별점 색상 변경
export const Star = styled.span`
  cursor: pointer;
  font-size: 30px;
  color: ${({ selected }) => (selected ? '#ffcc00' : '#d3d3d3')}; /* 선택된 별은 따뜻한 황금색, 선택되지 않은 별은 은은한 회색 */
  transition: color 0.3s ease;
  text-shadow: ${({ selected }) => (selected ? '0 0 5px #ffcc00' : 'none')}; /* 선택된 별에 약간의 빛 효과 */
`;

export const SubmitButton = styled.button`
  display: inline-block;
  background-color: #e67e22;
  color: white;
  width: 200px;
  height: 50px;
  font-size: 1.2rem;
  font-family: 'Jeju Gothic', sans-serif;
  border-radius: 50px;
  margin-top: 20px;
  text-align: center;
  line-height: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d35400;
    transform: scale(1.05);
  }

  &:active {
    background-color: #c0392b;
    transform: scale(0.98);
  }
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  padding: 15px 0;
  border-bottom: 2px dashed #f39c12;

  &:last-child {
    border-bottom: none;
  }
`;

export const ReviewContent = styled.p`
  font-size: 1.2rem;
  color: #2d3436;
  margin-bottom: 10px;
`;

export const ReviewRating = styled.p`
  font-size: 1.2rem;
  color: #ffcc00; 
  font-weight: bold;
  text-shadow: 0 0 5px #ffcc00; /* 별의 테두리 부분에 약간의 빛 효과 */
`;

// 수정 및 삭제 버튼 스타일 개선
export const ReviewButton = styled.button`
  background: linear-gradient(45deg, #ff7f7f, #ff4f4f); /* 부드러운 그라데이션 배경색 */
  color: white;
  border: none;
  padding: 5px 10px; /* 패딩을 조정하여 버튼을 컴팩트하게 */
  border-radius: 20px; /* 버튼의 테두리 둥글기 */
  font-size: 0.9rem; /* 폰트 크기 */
  cursor: pointer;
  margin-right: 5px; /* 버튼 사이 간격 */
  width: auto; /* 가로 길이를 자동으로 조절 */
  min-width: 60px; /* 버튼의 최소 너비를 지정하여 너무 작아지지 않도록 */
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 */

  &:hover {
    background: linear-gradient(45deg, #ff4f4f, #ff7f7f); /* 호버 시 색상 변경 */
    transform: translateY(-2px);
  }

  &:active {
    background: linear-gradient(45deg, #e64545, #ff4f4f);
    transform: scale(0.95);
  }
`;


export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #e67e22;
`;

export const NoReviews = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #e67e22;
  margin-top: 30px;
`;

export const ReviewTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 1.1rem;
  margin-bottom: 10px;
  border: 2px solid #f39c12;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #e67e22;
  }
`;

export const EditButton = styled.button`
  margin-top: 10px;
`;

// 반응형 스타일
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${ReviewContainer} {
      padding: 20px;
    }

    ${ReviewTitle} {
      font-size: 2rem;
    }

    ${ReviewInput} {
      font-size: 1rem;
      height: 100px;
    }

    ${ReviewContent} {
      font-size: 1rem;
    }

    ${SubmitButton} {
      font-size: 1rem;
      width: 180px;
      height: 45px;
      line-height: 45px;
    }

    ${ReviewButton} {
      font-size: 0.9rem;
      padding: 8px 16px;
    }
  }
`;
