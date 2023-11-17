import React from "react";
import { BsArrowDownSquare } from "react-icons/bs";
import Navbar_myPage_box from "./Navbar_myPage_box";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <ul className="header-first-ul">
          <li>홈</li>
          <li>투어</li>
          <li>티켓</li>
          <li>쇼핑</li>
          <li>도서</li>
        </ul>
        <ul className="header-second-ul">
          <li>로그인</li>
          <li>회원가입</li>
          <li>북카트</li>
          <li>
            마이페이지
            <span className="myPage-icon"><BsArrowDownSquare/></span>
            <Navbar_myPage_box/>
          </li>
          <li>북피니언</li>
          <li>고객센터</li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
