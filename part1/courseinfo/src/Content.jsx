import Part from "./Part";

const Content = ({ parts }) =>
  parts.map((data, index) => <Part key={index + data} {...data} />);

export default Content;
