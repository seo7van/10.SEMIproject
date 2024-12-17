import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main/Main';
import PostRegister from './main/PostRegister';
import Header from './main/Header';
// import Footer from './main/Footer';
import React from 'react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> {/* 메인 페이지 */}
        <Route path="/PostRegister" element={<PostRegister />} /> {/* 게시물 등록 페이지 */}
        {/* <Route path="/footer" element={<Footer />} /> Footer 페이지 */}
      </Routes>
    </Router>
    );
  };

export default App;
    // <Router>
    //   <Routes>
    //     <Route path = "/" element = { <Home /> } />
    //     <Route path = "/List" element = { <List /> } />
    //     <Route path = "/Projects" element = { <Projects /> } />
    //     <Route path = "/Qusetions" element = { <Qusetions /> } />
    //     <Route path = "/ReactDoc" element = { <ReactDoc /> } />
    //   </Routes>
    // </Router>
  
