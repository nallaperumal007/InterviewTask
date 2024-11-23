import React from "react";

function Child1({ sendData }) {
  return (
    <div>
      <h3>Child 1</h3>
      <button onClick={() => sendData("Data from Child 1")}>Send Data</button>
    </div>
  );
}

export default Child1;
