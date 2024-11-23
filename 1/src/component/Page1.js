import React, { useState } from "react";

const CompA = () => <div>Component A</div>;
const CompB = () => <div>Component B</div>;
const CompC = () => <div>Component C</div>;

function Page1() {
  const [component, setComponent] = useState(null);

  return (
    <div>
      <h1>Page 1: Conditional Rendering</h1>
      <button onClick={() => setComponent("A")}>Show CompA</button>
      <button onClick={() => setComponent("B")}>Show CompB</button>
      <button onClick={() => setComponent("C")}>Show CompC</button>
      <div>
        {component === "A" && <CompA />}
        {component === "B" && <CompB />}
        {component === "C" && <CompC />}
      </div>
      <br />
      <a href="/page2">Go to Page 2</a>
    </div>
  );
}

export default Page1;
