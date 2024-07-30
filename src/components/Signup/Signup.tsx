import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import AuthForm from "../AuthForm/AuthForm";
import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setUser } from "../../redux/slices/userSlice";

const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (
    email: string,
    password: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const auth = getAuth();
    (async () => {
      try {
        const { user } = await createUserWithEmailAndPassword(
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
        alert("Error register");
      }
    })();
  };

  return <AuthForm handleSubmit={handleRegister} title={"Signup"} />;
};

export default Signup;
