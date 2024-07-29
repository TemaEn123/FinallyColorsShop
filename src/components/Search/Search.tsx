import { useEffect, useState } from "react";

import { useDebounce } from "../../helpers/hooks/useDebounce";

import { useAppDispatch } from "../../redux/store";

import styles from "./styles.module.scss";
import { changeFilters } from "../../redux/slices/filtersSlice";

const Search = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    dispatch(changeFilters({ key: "title", value: debouncedSearch }));
  }, [debouncedSearch]);

  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
