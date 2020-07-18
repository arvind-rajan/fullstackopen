import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <h3>
            Total of{" "}
            {course.parts.reduce((a, b) => {
              return a + b.exercises;
            }, 0)}{" "}
            exercises
          </h3>
        </>
      ))}
    </>
  );
};

export default Course;
