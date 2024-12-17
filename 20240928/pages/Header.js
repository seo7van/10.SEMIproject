import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './styles/HeaderStyle.css'; // CSS 파일 import

function Header() {
  
  // 로그인 상태를 관리하는 state
  const [user, setUser] = useState(null);
  const savedUser = localStorage.getItem('user1');
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // 검색 처리 로직 추가
    console.log("검색어:", searchTerm);
    setIsSearchOpen(false); // 검색 후 창 닫기
  };


  const handleLogout = () => {
    // 로그아웃 시 localStorage에서 사용자 정보 제거
    localStorage.clear();
    alert("로그아웃 되었습니다!");
    navigate('/main'); // 메인 페이지로 이동
  };

  return (
    <header className="header-all">
      <nav className="header-nav-menu">
        <span className="header-logo" onClick={() => { navigate('/') }}>
          POPSPOT
        </span>
          <div className="nav-menu">
            <li className="nav-menu-content" onClick={() => { navigate('/popup') }}>Pop-up</li>
            <li className="nav-menu-content" onClick={() => { navigate('/share') }}>Share</li>
            <li className="nav-menu-content" onClick={() => { navigate('/supports') }}>Support</li>
            <li className="nav-menu-content" onClick={() => { navigate('/supports/faq') }}>FAQ</li>
            <button className="search-button" onClick={() => setIsSearchOpen(true)}
              ><img src="/img/search-icon.png" alt="Search" className="search-icon" 
              />
            </button>
            <div className={`search-panel ${isSearchOpen ? 'open' : ''}`}>
        <input
          type="text"
          className="search-input"
          placeholder="검색어를 입력하세요..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-submit" onClick={handleSearch}>Search</button>
      </div>
          </div>
          <div className="loginout">
              {savedUser ? (
                  <>
                    <span>{user}님 환영합니다!</span>
                    <li className="nav-menu-content" onClick={() => { navigate('/mypage') }}>My Page</li>
                    <li className="nav-menu-content" onClick={handleLogout}>LogOut</li>
                  </>
                ) : (
                  <li className="nav-menu-content" onClick={() => { navigate('/login') }}>Login</li>
                )}
          </div>
      </nav>

    </header>
  );
}

export default Header;