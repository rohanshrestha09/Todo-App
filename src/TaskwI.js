const Task = ({
  changeVal,
  tempText,
  tempDay,
  handleEvent,
  formHide,
  formHideFunc,
  add,
}) => {
  return (
    <div className="task">
      <div className="AddTask">
        <h1>Task Tracker</h1>
        <h3 onClick={formHideFunc}>{add}</h3>
      </div>
      <form
        onSubmit={handleEvent}
        className="form"
        style={{ display: formHide }}
      >
        <input
          type="text"
          value={tempText}
          placeholder="Add a Task"
          onChange={(e) => changeVal.changeText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Completion Time"
          value={tempDay}
          onChange={(e) => changeVal.changeDay(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Task;
