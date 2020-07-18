import React from "react";

const Persons = (props) => {
  return (
    <>
      {props.filteredArray.map((p) => (
        <p key={p.number}>
          {p.name} {p.number}
        </p>
      ))}
    </>
  );
};

export default Persons;
