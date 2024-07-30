import React from "react";
import { useAppDispatch } from "../../redux/store";
import AuthForm from "../AuthForm/AuthForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (
    email: string,
    password: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const auth = getAuth();
    (async () => {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const token = await user.getIdToken();

        dispatch(
          setUser({
            email: user.email!,
            id: user.uid,
            token,
          })
        );
        navigate("/about");
      } catch (error) {
        alert("user is not exist");
      }
    })();
  };

  return <AuthForm handleSubmit={handleLogin} title={"Login"} />;
};

export default Login;
