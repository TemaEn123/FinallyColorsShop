import { useGetColorsQuery } from "../../redux/services/colors";
import { useAppSelector } from "../../redux/store";
import { selectFilters } from "../../redux/slices/filtersSlice";

import styles from "./styles.module.scss";

import ColorItem from "../../components/ui/ColorItem/ColorItem";
import Skeleton from "../../components/ui/Skeleton/Skeleton";
import Search from "../../components/Search/Search";
import Select from "../../components/Select/Select";
import Pagination from "../../components/Pagination/Pagination";

const Colors = () => {
  const filters = useAppSelector(selectFilters);

  const {
    data: colors,
    isLoading: isLoadingColors,
    error: isErrorColors,
  } = useGetColorsQuery(filters);

  return (
    <section className={styles.colors}>
      <Search />
      <Select />
      <div className={styles.colors__items}>
        {isLoadingColors ? (
          <Skeleton count={5} />
        ) : isErrorColors ? (
          "Not Found Colors..."
        ) : (
          colors?.map((color) => (
            <ColorItem key={color.id} link color={color} />
          ))
        )}
      </div>
      <Pagination currentPage={filters.p} />
    </section>
  );
};

export default Colors;
