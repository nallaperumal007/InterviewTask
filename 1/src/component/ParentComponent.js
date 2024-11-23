import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

function ParentComponent() {
  const [childData, setChildData] = useState({});

  const handleChildData = (child, value) => {
    setChildData((prev) => ({ ...prev, [child]: value }));
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Child1 Data: {childData.Child1 || "N/A"}</p>
      <p>Child2 Data: {childData.Child2 || "N/A"}</p>
      <p>Child3 Data: {childData.Child3 || "N/A"}</p>
      <Child1 sendData={(value) => handleChildData("Child1", value)} />
      <Child2 sendData={(value) => handleChildData("Child2", value)} />
      <Child3 sendData={(value) => handleChildData("Child3", value)} />
    </div>
  );
}

export default ParentComponent;