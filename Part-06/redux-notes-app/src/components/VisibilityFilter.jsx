import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const VisibilityFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filterSelected = (filter) => {
    console.log(filter);
    dispatch(filterChange(filter));
  };
  return (
    <div>
      all
      <input
        type="radio"
        name="filter"
        onChange={() => {
          filterSelected("ALL");
        }}
      />
      important
      <input
        type="radio"
        name="filter"
        onChange={() => {
          filterSelected("IMPORTANT");
        }}
      />
      non-important
      <input
        type="radio"
        name="filter"
        onChange={() => {
          filterSelected("NON_IMPORTANT");
        }}
      />
    </div>
  );
};

export default VisibilityFilter;
