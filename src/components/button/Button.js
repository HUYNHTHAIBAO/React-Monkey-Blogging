import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  background: linear-gradient(107.61deg, #00a7b4 15.59%, #a4d96c 87.25%);
  padding: 15px 50px;
  border-radius: 10px;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  type = "button",
  children,
  onClick = () => {},
  ...props
}) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <StyleButton type={type} onClick={onClick} {...props}>
        {children}
      </StyleButton>
    </div>
  );
};

export default Button;
