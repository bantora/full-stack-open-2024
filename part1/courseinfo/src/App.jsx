import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = {
    title: "Half Stack application development",
    parts: [
      { title: "Fundamentals of React", exercise: 10 },
      { title: "Using props to pass data", exercise: 7 },
      { title: "State of a component", exercise: 14 },
    ],
  };

  return (
    <div>
      <Header {...course} />
      <Content {...course} />
      <Total {...course} />
    </div>
  );
};

export default App;
