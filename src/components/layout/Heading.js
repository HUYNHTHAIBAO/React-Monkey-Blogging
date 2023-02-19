import React from "react";
import styled from "styled-components";
const HeadingStyles = styled.h2`

  color: #000000;
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
  &:before {
    content: "";
    width: 50px;
    height: 4px;
    background: ${(props) => props.theme.gradient};
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -150%);
  }
`;
const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;