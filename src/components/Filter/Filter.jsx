import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filter, setFilter, filterOptions = [] }) => {
  return (
    <div className={styles.filter}>
      <label>Filter</label>
      <select
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        {filterOptions.map((option, index) => (
          <option key={option + index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
