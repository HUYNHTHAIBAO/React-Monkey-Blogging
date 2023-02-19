import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import IconCloseInput from "../components/icon/IconCloseInput";
import IconEyeInput from "../components/icon/IconEyeInput";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import { useAuth } from "../contexts/auth-context";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import AuthenticationPages from "./AuthenticationPages";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";

// validate
const schema = yup
  .object({
    email: yup.string().required("Vui lòng nhập email"),
    password: yup.string().min(8, "Mật khẩu Không được nhập ít hơn 8 kí tự"),
  })
  .required();
//
const SignInPage = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  //   Đăng nhập, đăng nhập xong thì sẽ về trang chủ
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Đăng nhập";
    // if (userInfo.email) navigate("/sign-in");
    // else navigate("./");
    if (userInfo?.email) navigate("/");
  }, []);
  const handleSignIn = async (value) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, value.email, value.password);
    toast.success("Đăng nhập tài khoản thành công");
    navigate("/");
  };
  //   Hiển thị thông báo lỗi
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);
  return (
    <AuthenticationPages>
      <form
        action=""
        onSubmit={handleSubmit(handleSignIn)}
        style={{ marginTop: "30px" }}
      >
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="Vui lòng nhập email"
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
            Bạn đã có tài khoản? <NavLink to={"/sign-up"}>Đăng ký</NavLink>
          </div>
        </Field>
        <Button type="submit">Đăng nhập</Button>
      </form>
    </AuthenticationPages>
  );
};

export default SignInPage;
