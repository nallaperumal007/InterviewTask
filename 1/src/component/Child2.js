import React from "react";

function Child2({ sendData }) {
  return (
    <div>
      <h3>Child 2</h3>
      <button onClick={() => sendData("Data from Child 2")}>Send Data</button>
    </div>
  );
}

export default Child2;