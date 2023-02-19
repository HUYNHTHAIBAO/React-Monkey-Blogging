import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/auth-context";
import { auth } from "../../firebase-app/firebase-config";
import Button from "../button/Button";

const StyleHeader = styled.div`
  padding: 30px 0;
  .header-main {
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
  }
  .menu-items {
    list-style: none;
    margin-left: 30px;
  }
  .menu-link {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 20px;
  }
  .header-search {
    margin-left: auto;
    width: 100%;
    max-width: 320px;
    border: 1px solid #ccc;
    padding: 15px 30px;
    border-radius: 10px;
    position: relative;
    margin-right: 20px;
  }
  .search-input {
    flex: 1;
    width: 100%;
    padding-right: 30px;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
  }
`;
// Lấy tên cuối để hiển thị ra bên ngoài
function getName(name) {
  if (!name) return "";
  const length = name.split(" ").length;
  return name.split(" ")[length - 1];
}
const Header = () => {
  function handleSignOut() {
    signOut(auth);
  }
  const { userInfo } = useAuth();
  return (
    <StyleHeader>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img src="/monkey-logo.png" alt="" style={{ width: "70px" }} />
          </a>
          <ul className="menu">
            <li className="menu-items">
              <a href="/" className="menu-link">
                Trang Chủ
              </a>
            </li>
            <li className="menu-items">
              <a href="/blog" className="menu-link">
                Bài Viết
              </a>
            </li>
            <li className="menu-items">
              <a href="/contact" className="menu-link">
                Liên Hệ
              </a>
            </li>
          </ul>
          <div className="header-search">
            <input
              type="text"
              className="search-input"
              placeholder="Tìm kiếm bài viết ..."
            />
            <span className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          {!userInfo ? (
            <NavLink to={"/sign-in"}>
              <Button style={{ marginLeft: "20px" }}>Đăng nhập</Button>
            </NavLink>
          ) : (
            <div className="header-auth" style={{ marginRight: "50px" }}>
              <span>Xin chào ! </span>
              <strong>{getName(userInfo?.displayName)}</strong>
            </div>
          )}
          {userInfo?.displayName ? (
            <div>
              <button style={{ marginLeft: "20px" }} onClick={handleSignOut}>
                Đăng xuất
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </StyleHeader>
  );
};

export default Header;
