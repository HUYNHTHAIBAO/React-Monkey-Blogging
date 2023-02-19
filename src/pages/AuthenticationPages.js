import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyleAuthenticationPage = styled.div`
  min-height: 100vh;
  padding: 10px;
  .logo {
    padding-top: 10px;
    margin: 0 auto;
    width: 100px;
  }
  .heading {
    font-size: 30px;
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    text-align: center;
    margin-top: 10px;
  }
  .have-account {
    margin-top: 30px;
  }
`;

const AuthenticationPages = ({ children }) => {
  return (
    <StyleAuthenticationPage>
      <div className="container">
        <NavLink to={"/"}>
          <img src="/monkey-logo.png" alt="" className="logo" />
        </NavLink>
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </StyleAuthenticationPage>
  );
};

export default AuthenticationPages;
