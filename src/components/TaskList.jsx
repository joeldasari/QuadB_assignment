import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import {
  removeTask,
  editTask,
  toggleTaskCompletion,
} from "../store/slice/todoSlice"; // Import toggleTaskCompletion action creator

const TaskList = () => {
  const tasks = useSelector((state) => state.todos?.tasks); // Access tasks from Redux state
  const dispatch = useDispatch(); // Get dispatch function from Redux store

  const handleEditClick = (taskId) => {
    // Prompt user for new task text (consider using a modal or inline editing)
    const newTaskText = prompt("Update the task:");
    if (newTaskText && newTaskText.trim()) {
      dispatch(editTask({ id: taskId, updates: { text: newTaskText } }));
    }
  };

  const handleToggleCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId)); // Dispatch toggleTaskCompletion action with task ID
  };

  return (
    <div className="tasklist-container">
      {tasks && tasks.length > 0 ? (
        <ul className="tasklist-ul">
          {tasks.map((task) => (
            <div key={task.id} className="tasklist-item">
              <div className="checkbox-and-task">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={task.completed} // Set checkbox checked state based on task.completed
                  onChange={() => handleToggleCompletion(task.id)} // Handle checkbox change
                />
                <div className="task-and-time">
                  <span
                    className={task.completed ? "task task-completed" : "task"}
                  >
                    {task.text}
                  </span>
                  <span className="time">{task.createdAt}</span>
                </div>
              </div>

              {/* Apply strike-through style conditionally */}
              <div className="task-options">
                <MdEdit
                  className="edit-icon"
                  onClick={() => handleEditClick(task.id)}
                />
                <MdDelete
                  className="delete-icon"
                  onClick={() => dispatch(removeTask(task.id))}
                />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="no-tasks-yet">
          <img
            className="productive-img"
            src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-completed-tasks-5037983-4202464.png"
            alt="productive-img"
          />
          <p className="starting-text">
            Let's get productive! Add your next task.
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
