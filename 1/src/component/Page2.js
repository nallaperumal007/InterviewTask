import React from "react";
import ParentComponent from "./ParentComponent";

function Page2() {
  return (
    <div>
      <h1>Page 2: Parent and Child Communication</h1>
      <ParentComponent />
      <br />
      <a href="/">Go to Page 1</a>
    </div>
  );
}

export default Page2;