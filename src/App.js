import { useState } from "react";
import "./App.css";
import Task from "./TaskwI";
import Element from "./Element";

const App = () => {
  const [db, setDb] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Go Shopping",
      day: "Jesth 1th at 9:00am",
      reminder: true,
    },
  ]);

  const [tempText, setTempText] = useState("");
  const [tempDay, setTempDay] = useState("");
  const [formHide, setFormHide] = useState("none");
  const [add, setAdd] = useState("Add");
  const [gar, setGar] = useState(0);

  const handleEvent = (event) => {
    event.preventDefault();
    tempText
      ? setDb([
          ...db,
          {
            id: db.length + 1,
            text: tempText,
            day: tempDay,
            reminder: true,
          },
        ])
      : alert("Please Type something");
    setTempText("");
    setTempDay("");
  };

  const removeTask = (val) => {
    setDb(db.filter((element) => element.id !== val));
  };

  const changeVal = {
    changeText: function (tVal) {
      setTempText(tVal);
    },
    changeDay: function (dVal) {
      setTempDay(dVal);
    },
  };

  const taskCompletion = (val) => {
    setGar(gar + 1);
    db[val - 1].reminder = false;
  };

  const formHideFunc = () => {
    const ChFunc = () => {
      setFormHide("flex");
      setAdd("Close");
    };
    const ChFuncR = () => {
      setAdd("Add");
      setFormHide("none");
    };
    add === "Add" ? ChFunc() : ChFuncR();
  };

  return (
    <div className="container">
      <div className="insider">
        <Task
          changeVal={changeVal}
          tempText={tempText}
          tempDay={tempDay}
          handleEvent={handleEvent}
          formHide={formHide}
          formHideFunc={formHideFunc}
          add={add}
        />
        <Element
          db={db}
          removeTask={removeTask}
          taskCompletion={taskCompletion}
        />
      </div>
    </div>
  );
};

export default App;
