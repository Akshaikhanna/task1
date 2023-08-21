import React from "react";

export default function App() {
  return <DummyComponent name="Ram" />;
}

function DummyComponent(props) {
  return (
    <div>
      <h2>Hi {props.name}</h2>
    </div>
  );
}
