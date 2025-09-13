import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleFilterChange = (event) => {
    const filteredValue = event.target.value;
    dispatch(setFilter(filteredValue));
  };

  return (
    <div>
      Filter{" "}
      <input
        type="text"
        value={filter}
        onChange={(e) => handleFilterChange(e)}
      />
    </div>
  );
};

export default Filter;
