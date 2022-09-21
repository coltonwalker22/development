import React, { useState } from "react";

function Form(props) {
const {handleAdd} = props
const [item, setItem] = useState({name: ""})

  const handleChange = (e) => {
    const {name, value} = e.target
    setItem(prevItem => {
    return {
      ...prevItem, [name]: value
    }
    }
  )};

  const handleSubmit = (e) => {
    e.preventDefault();
    // setList(prevList => [...prevList, item])
      handleAdd(item.name)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        name="name"
        value={item.name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
