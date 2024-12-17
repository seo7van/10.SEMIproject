import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/HeaderStyle.css'; // CSS 파일 import

function Header() {

	const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();

	const handleSearch = () => {
        // 검색 처리 로직 추가
        console.log("검색어:", searchTerm);
        setIsModalOpen(false); // 검색 후 모달 닫기
    };

    const handleMenuClick = (event) => {
        // 모든 메뉴 항목의 색상 초기화
        const menuItems = document.querySelectorAll('.nav-menu-content li');
        menuItems.forEach(item => {
            item.style.color = ''; // 기본 색상으로 초기화
        });
        // 클릭된 메뉴 항목 색상 변경
        event.target.style.color = '#FF4500'; // 원하는 색상으로 변경
        navigate(event.target.dataset.path); // 해당 경로로 이동
    };


	return (
        <header className="header-all">
            <nav className="header-nav-menu">
                <span className="header-logo" onClick={() => { navigate('/'); }}>
                    POPinnn
                </span>

                <ul className="nav-menu-content">
                    <li data-path="/popup" onClick={handleMenuClick}>pop-up</li>
                    <li data-path="/share" onClick={handleMenuClick}>share</li>
                    <li data-path="/supports/faq" onClick={handleMenuClick}>Support</li>
                    <li data-path="/Login" onClick={handleMenuClick}>로그인</li>
                </ul>
				{/* 검색 버튼 추가 */}
                <div className="search-container">
                    <button className="search-button" 
                    onClick={() => setIsModalOpen(true)}
                    ><img src="/img/search-icon.png" alt="Search" className="search-icon" 
                    />
                    </button>
                </div>
            </nav>
            
            {/* 모달 검색 창 */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="검색..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button 
                            className="search-button" 
                            onClick={handleSearch}
                        >
                            search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;