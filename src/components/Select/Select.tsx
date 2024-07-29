import { useAppDispatch } from "../../redux/store";
import { changeFilters } from "../../redux/slices/filtersSlice";

import styles from "./styles.module.scss";

const Select = () => {
  const dispatch = useAppDispatch();

  const handleSelectChange = (value: string) => {
    if (value === "priceDown") {
      dispatch(changeFilters({ key: "sortBy", value: "price" }));
      dispatch(changeFilters({ key: "order", value: "desc" }));
    } else {
      dispatch(changeFilters({ key: "sortBy", value }));
      dispatch(changeFilters({ key: "order", value: "asc" }));
    }
  };

  return (
    <div className={styles.select}>
      <select onChange={(e) => handleSelectChange(e.target.value)}>
        <option value="id">Default</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="priceDown">Price down</option>
      </select>
    </div>
  );
};

export default Select;
