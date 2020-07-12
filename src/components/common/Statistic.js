import React from "react";

export default function Statistic({ name, value }) {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {value} {name === "Positive" && "%"}{" "}
      </td>
    </tr>
  );
}
