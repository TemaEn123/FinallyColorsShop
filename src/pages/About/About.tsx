import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { useAuth } from "../../helpers/hooks/useAuth";
import { useEffect } from "react";
import { removeUser } from "../../redux/slices/userSlice";

const About = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { isAuth, email } = useAuth();

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth]);

  return (
    <section>
      <h1>About</h1>

      <button onClick={() => dispatch(removeUser())}>
        Logout from {email}
      </button>
    </section>
  );
};

export default About;
