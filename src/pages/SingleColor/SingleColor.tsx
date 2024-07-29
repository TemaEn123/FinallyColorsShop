import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { useGetColorsByIdQuery } from "../../redux/services/colors";
import Skeleton from "../../components/ui/Skeleton/Skeleton";
import ColorItem from "../../components/ui/ColorItem/ColorItem";
import { useEffect } from "react";

const SingleColor = () => {
  const params = useParams();

  const {
    data: color,
    isLoading: isLoadingColor,
    error: isErrorColor,
  } = useGetColorsByIdQuery(params.id!);

  useEffect(() => {
    if (isErrorColor) {
      throw new Error("Not Found");
    }
  }, [isErrorColor]);

  return (
    <section className={styles.color}>
      {!isLoadingColor && color ? (
        <ColorItem link={false} color={color} />
      ) : (
        <Skeleton count={1} />
      )}
    </section>
  );
};

export default SingleColor;
