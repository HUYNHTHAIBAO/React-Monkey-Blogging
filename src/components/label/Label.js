import React from "react";
import styled from "styled-components";
const LabelStyle = styled.label`
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
`;

const Label = ({ htmlFor = "", children, ...props }) => {
  return <LabelStyle htmlFor={htmlFor} {...props}>
    {children}
  </LabelStyle>;
};

export default Label;
