import React from "react";

const PersonForm = (props) => {
  const handleChangeName = (event) => {
    props.setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    props.setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObj = {
      name: props.newName,
      number: props.newNumber,
    };
    if (props.persons.some((p) => p.name === props.newName)) {
      window.alert(`${props.newName} is already added to the phonevook`);
    } else {
      props.setPersons(props.persons.concat(newObj));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={props.newName} onChange={handleChangeName} />{" "}
        Number: <input value={props.newNumber} onChange={handleChangeNumber} />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
