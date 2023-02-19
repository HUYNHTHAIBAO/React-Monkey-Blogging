import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  // đăng nhập và đk sẽ chạy vào này
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === "undefined") throw new Error("Auth bị lỗi");
  return context;
}
export { AuthProvider, useAuth };
