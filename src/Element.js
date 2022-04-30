import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Element = ({ db, removeTask, taskCompletion }) => {
  return (
    <div className="lists">
      {db.map((element) => (
        <div key={element.id}>
          <FontAwesomeIcon
            icon={faXmark}
            className="icon"
            onClick={() => removeTask(element.id)}
          />
          <ul
            onClick={() => taskCompletion(element.id)}
            style={{
              textDecoration: element.reminder ? "none" : "line-through",
            }}
          >
            <li>{element.text}</li>
            <p>{element.day}</p>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Element;
