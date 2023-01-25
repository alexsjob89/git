import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div>
      {names.map((name) => (
        <h1 style={{ fontSize: "60px", color: "blue" }}>{name}</h1>
      ))}
    </div>
  );
}

export default NameList;
