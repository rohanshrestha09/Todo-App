import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Question from "./Question";
import Ans from "./Ans";
import dbase from "./db.js";
import Count from "./Count";
import Solve from "./Solve";

const App = () => {
  const [index, setIndex] = useState(0);
  const [pts, setPts] = useState(0);
  const [styleChangeTrue, setStyleChangeTrue] = useState("initial");
  const [styleChangeFalse, setStyleChangeFalse] = useState("initial");
  const pointsChange = "green";

  const changeQuestion = () => {
    setIndex(index + 1);
    setStyleChangeTrue("initial");
    setStyleChangeFalse("initial");
  };

  const pointsUpdate = () => {
    setPts(pts + 5);
  };

  const colorUpdate = () => {
    setStyleChangeTrue("#6ECE53");
    setStyleChangeFalse("#F35F5D");
  };

  const restart = () => {
    setIndex(0);
    setPts(0);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9">
          {" "}
          {index < 15 ? (
            <Nav
              onclick={changeQuestion}
              index={index}
              pts={pts}
              restart={restart}
            />
          ) : (
            restart()
          )}{" "}
          <Question index={index} database={dbase} />
          {index < 15 ? (
            <Ans
              index={index}
              database={dbase}
              pointsUpdate={pointsUpdate}
              styleChangeTrue={styleChangeTrue}
              styleChangeFalse={styleChangeFalse}
              colorUpdate={colorUpdate}
            />
          ) : (
            restart()
          )}{" "}
        </div>{" "}
        <div className="col-lg-3">
          <Count pointsChange={pointsChange} index={index} />
          <Solve colorUpdate={colorUpdate} />
        </div>
      </div>
    </div>
  );
};

export default App;
