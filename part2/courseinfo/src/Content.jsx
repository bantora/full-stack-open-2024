import Part from "./Part";

const Content = ({ parts }) =>
  parts.map(({id, ...data}) => <Part key={id} {...data} />);

export default Content;
