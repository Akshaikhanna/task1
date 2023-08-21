import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", `"Name:"${name},"Email:" ${email}`);
  };

  return (
    <div>
      <form>
        <div></div>
        <div>
          <label>Name</label>
          <input  onChange={handleName} />
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={handleEmail} />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
