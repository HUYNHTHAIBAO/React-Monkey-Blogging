import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import IconEyeInput from "../icon/IconEyeInput";

const StyledInput = styled.div`
  position: relative;
  input {
    transition: all 0.2s linear;
    background-color: ${(props) => props.theme.gray};
    width: 100%;
    margin-top: 10px;
    border: 1px solid transparent;
    /* padding: 20px; */
    border-radius: 10px;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    outline: none;
    &:focus {
      border-color: ${(props) => props.theme.primary};
      background-color: ${(props) => props.theme.white};
    }
  }
  .icon-eye {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-100%, 0);
    cursor: pointer;
  }
`;

const Input = ({
  name = "",
  type = "text",
  children,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <StyledInput hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} />
      {children}
    </StyledInput>
  );
};

export default Input;
