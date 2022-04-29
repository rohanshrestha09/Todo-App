const Solve = (props) => {
  return (
    <div className="solve">
      <h5>50/50</h5>
      <h5 onClick={props.colorUpdate}>Solve</h5>
    </div>
  );
};

export default Solve;
