import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyleNotFoundPage = styled.div`
height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .back-home {
        padding: 15px 30px;
        background: ${props => props.theme.gradient};
        border-radius: 20px;
        color: ${props => props.theme.white};;
        text-decoration: none;
        font-weight: 600;
        margin-top: 30px;
    }
    .heading {
        margin-top: 30px;
    }
`;

const NotFoundPage = () => {
    return (
        <StyleNotFoundPage>
            <img src="/monkey-logo.png" alt="" />
            <h1 className="heading">Lỗi rồi! Không tìm thấy trang </h1>
            <NavLink to="/" className={"back-home"}>Quay về Trang Chủ</NavLink>
        </StyleNotFoundPage>
    );
};

export default NotFoundPage;