const Total = ({ parts }) => (
  <p>
    Number of exercises {parts.reduce((acc, { exercise }) => acc + exercise, 0)}
  </p>
);

export default Total;
