const Nav = (props) => {
  return (
    <div className="navSection">
      <div>Question&nbsp;{props.index + 1}</div>
      <div>Points:{props.pts}</div>
      <div onClick={props.restart} className="restart">
        Restart
      </div>
      <div onClick={props.onclick} className="next">
        Next
      </div>
    </div>
  );
};

export default Nav;
