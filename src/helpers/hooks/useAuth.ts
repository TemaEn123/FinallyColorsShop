import { selectUser } from "../../redux/slices/userSlice";
import { useAppSelector } from "../../redux/store";

export const useAuth = () => {
  const { email, token, id } = useAppSelector(selectUser);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
