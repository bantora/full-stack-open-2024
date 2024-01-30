import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) =>
  courses.map(({ id, ...course }) => {
    return (
      <div key={id}>
        <Header {...course} />
        <Content {...course} />
        <Total {...course} />
      </div>
    );
  });

export default Course;
