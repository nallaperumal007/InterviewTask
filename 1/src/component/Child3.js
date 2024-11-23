import React from "react";

function Child3({ sendData }) {
  return (
    <div>
      <h3>Child 3</h3>
      <button onClick={() => sendData("Data from Child 3")}>Send Data</button>
    </div>
  );
}

export default Child3;
