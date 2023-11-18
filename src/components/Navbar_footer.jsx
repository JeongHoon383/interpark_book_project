import React from "react";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Navbar_footer = () => {
  return (
    <div>
      <ul className="navbar_footer">
        <li>
          <FaBars />
        </li>
        <li>
          전체 카테고리
          <span><FaAngleDown/></span>
        </li>
        <li>베스트셀러</li>
        <li>신간</li>
        <li>이벤트</li>
      </ul>
    </div>
  );
};

export default Navbar_footer;
