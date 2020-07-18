import React from "react";

const Filter = (props) => {
  const handleChangeFilter = (event) => {
    props.setFilter(event.target.value);
  };

  return (
    <div>
      Filter entries:{" "}
      <input value={props.filter} onChange={handleChangeFilter} />
    </div>
  );
};

export default Filter;
