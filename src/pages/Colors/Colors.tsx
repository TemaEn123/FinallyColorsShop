import { useGetColorsQuery } from "../../redux/services/colors";

import styles from "./styles.module.scss";

import ColorItem from "../../components/ui/ColorItem/ColorItem";
import Skeleton from "../../components/ui/Skeleton/Skeleton";

const Colors = () => {
  const { data: colors, isLoading: isLoadingColors } = useGetColorsQuery(null);

  return (
    <section className={styles.colors}>
      <div className={styles.colors__items}>
        {isLoadingColors ? (
          <Skeleton count={20} />
        ) : (
          colors?.map((color) => (
            <ColorItem key={color.id} link color={color} />
          ))
        )}
      </div>
    </section>
  );
};

export default Colors;
