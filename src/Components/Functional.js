import React, { useState } from "react";

function Functional() {
  //   let num = "arun";
  const [num, setNum] = useState(0);
  function update() {
    setNum(num + 1);
  }
  return (
    <div>
      <h3>{num}</h3>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default Functional;
