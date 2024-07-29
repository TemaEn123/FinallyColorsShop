import { memo } from "react";
import { NUMBER_OF_PAGES } from "../../constants/constants";
import { useTheme } from "../../context/ThemeContext";
import { changeFilters } from "../../redux/slices/filtersSlice";
import { useAppDispatch } from "../../redux/store";

import styles from "./styles.module.scss";

interface Props {
  currentPage: number;
}

const Pagination = memo(({ currentPage }: Props) => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  const handlePageClick = (type: string, page = currentPage) => {
    if (type === "current") {
      dispatch(changeFilters({ key: "p", value: page }));
    } else if (type === "next") {
      dispatch(changeFilters({ key: "p", value: page + 1 }));
    } else {
      dispatch(changeFilters({ key: "p", value: page - 1 }));
    }
  };

  return (
    <div className={`${styles.pagination} ${theme ? styles.dark : ""}`}>
      <button
        onClick={() => handlePageClick("prev")}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {[...Array(NUMBER_OF_PAGES)].map((_, i) => (
        <button
          onClick={() => handlePageClick("current", i + 1)}
          disabled={currentPage === i + 1}
          key={i}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageClick("next")}
        disabled={currentPage === NUMBER_OF_PAGES}
      >
        {">"}
      </button>
    </div>
  );
});

export default Pagination;
