import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import { useForm } from "react-hook-form";
import IconEyeInput from "../components/icon/IconEyeInput";
import IconCloseInput from "../components/icon/IconCloseInput";
import Field from "../components/field/Field";
import Button from "../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { values } from "lodash";
import AuthenticationPages from "./AuthenticationPages";

const schema = yup
  .object({
    fullname: yup.string().required("Vui lòng nhập họ và tên"),
    email: yup.string().required("Vui lòng nhập email"),
    password: yup.string().min(8, "Mật khảu Không được nhập ít hơn 8 kí tự"),
  })
  .required();
//
const SignUpPage = () => {
  // sau khi tạo tk thành công sẽ quay về trang chủ
  const navigate = useNavigate();
  // react hook form
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  //    đăng kí tài khoản
  const handleSignUp = async (value) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );
    // hiển thị tên ra bên ngoài
    await updateProfile(auth.currentUser, {
      displayName: value.fullname,
    });
    // // thêm dữ liệu từ auth sang firestore trong firebase
    // const colRef = collection(db, "user");
    // await addDoc(colRef, {
    //   fullname : values.fullname,
    //   email : values.email,
    //   password : values.password
    // })
    toast.success("Đăng kí tài khoản thành công");
    // toast.error("Đăng kí không thành công")
    // đk thành công sẽ chạy vào trang chủ
    navigate("/sign-in");
  };
  const [togglePassword, setTogglePassword] = useState(false);
  //   Hiển thị thông báo lỗi
  useEffect(() => {
    document.title = "Đăng kí";
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);
  return (
    <AuthenticationPages>
      <form
        action=""
        onSubmit={handleSubmit(handleSignUp)}
        style={{ marginTop: "30px" }}
      >
        <Field>
          <Label htmlFor="fullname">Họ và Tên</Label>
          <Input
            name="fullname"
            type="text"
            id="fullname"
            placeholder="Vui lòng nhập Họ và Tên..."
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Vui lòng nhập Email..."
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Mật khẩu</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Vui lòng nhập mật khẩu"
            control={control}
          >
            {" "}
            {!togglePassword ? (
              <IconCloseInput
                className="icon-eye"
                onClick={() => setTogglePassword(true)}
              ></IconCloseInput>
            ) : (
              <IconEyeInput
                className="icon-eye"
                onClick={() => setTogglePassword(false)}
              ></IconEyeInput>
            )}
          </Input>
        <div className="have-account">
          Bạn đã có tài khoản? <NavLink to={"/sign-in"}>Đăng nhập</NavLink>
        </div>
        </Field>
        <Button type="submit">Đăng kí</Button>
      </form>
    </AuthenticationPages>
  );
};

export default SignUpPage;
