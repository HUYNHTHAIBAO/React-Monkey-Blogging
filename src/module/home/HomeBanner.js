import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";

const StyleHomePage = styled.div`
margin-bottom: 50px;
padding: 40px 20px;
    min-height: 520px;
    background: ${props => props.theme.gradient};
    .banner {
        display: flex;
        color: ${props => props.theme.white};;
        align-items: center;
        justify-content: space-between;
    }
    .banner-content {
        max-width: 500px;
    }
    .banner-heading {
        font-size: 48px;
        font-weight: 700;
    }
    .banner-text {
        line-height: 1.4;
        margin-top: 28px;
        font-size: 14px;
        color: ${props => props.theme.gray};;
    }
    .banner-button {
        margin-top: 48px;
       display: flex;
       justify-content: flex-start;
    }
`;

const HomeBanner = () => {
  return (
    <StyleHomePage>
        <div className="container">
            <div className="banner">
                <div className="banner-content">
                        <h1 className="banner-heading">Monkey Blogging</h1>
                        <p className="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                        <Button className="banner-button">Get Started</Button>
                </div>
                <div className="banner-img">
                    <img src="/banner.png" alt="" />
                </div>
            </div>
        </div>
    </StyleHomePage>
  );
};

export default HomeBanner;
