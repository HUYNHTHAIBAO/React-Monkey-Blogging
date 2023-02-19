import React from 'react';
import styled from 'styled-components';
import Heading from '../../components/layout/Heading';
import PostItem from '../post/PostItem';
import PostNewesLarge from '../post/PostNewesLarge';
import PostNewestItem from '../post/PostNewestItem';

const StyleHomeNewest = styled.div`
.layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 64px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: #f3edff;
    border-radius: 16px;
  }
`

const HomeNewest = () => {
    return (
        <StyleHomeNewest className='home-block'>
             <div className="container">
        <Heading>Mới nhất</Heading>
        <div className="layout">
          <PostNewesLarge></PostNewesLarge>
          <div className="sidebar">
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
          </div>
        </div>
        <div className="grid-layout grid-layout--primary">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
      </div>
        </StyleHomeNewest>
    );
};

export default HomeNewest;