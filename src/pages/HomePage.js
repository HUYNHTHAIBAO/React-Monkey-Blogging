import React from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import HomeBanner from "../module/home/HomeBanner";
import HomeFeature from "../module/home/HomeFeature";
import HomeNewest from "../module/home/HomeNewest";

const StyleHomePage = styled.div``;

const HomePage = () => {
  return (
    <StyleHomePage>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </StyleHomePage>
  );
};

export default HomePage;
