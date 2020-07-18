import React from "react";
import Part from "./common/Part";

export default function Content({ parts }) {
  return parts.map((p) => {
    return <Part key={p.id} name={p.name} exercise={p.exercises} />;
  });
}
