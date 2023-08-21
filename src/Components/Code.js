import React, { useState } from "react";

const Code = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validate();
    setError(error);
    if(Object.keys(error).length === 0){
        alert("Done")
    }
  };

  const validate = () => {
    const error = {};
    if (!email) {
      error.email("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "";
    } else {
      error.email = "";
    }

    if (!password) {
      error.password("Password is required");
    } else if (!password.length < 8) {
      error.password = "";
    } else {
      error.password = "";
    }
  };

  return (
    <div>
      <form onClick={handleSubmit}>
        <div>
          <label>
            Email
            <input type="email" placeholder="Email" onChange={handleEmail} />
          </label>
          {error.email && <div>{error.email}</div>}
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="Password"
              onChange={handlePassword}
            />
          </label>
          {error.password && <div>{error.password}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Code();