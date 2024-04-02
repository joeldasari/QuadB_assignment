import { useState } from "react"; // Import useState hook for managing component state
import { useDispatch } from "react-redux"; // Import useDispatch hook to dispatch actions to Redux store
import { addTask } from "../store/slice/todoSlice"; // Import addTask action creator

const TaskInput = () => {
  const dispatch = useDispatch(); // Get dispatch function from Redux store
  const [newTask, setNewTask] = useState(""); // Manage new task text in component state

  const handleInputChange = (event) => {
    setNewTask(event.target.value); // Update newTask state with user input
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (newTask.trim()) {
      // Check if new task has any content
      dispatch(addTask(newTask)); // Dispatch addTask action with new task text
      setNewTask(""); // Clear new task input after successful addition
    }
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={newTask}
          placeholder="Add a task..."
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskInput;
