import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <div className="heading-logo-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9XZWSv0LAHaKeAnbcf6URKYM1s2qNz0BoOUIzRBAtg&s"
            alt="logo"
            className="title-logo"
          />
          <h1 className="title-heading">ToDo List</h1>
        </div>
        <p className="title-description">
          Get organized and conquer your day with ToDo List
        </p>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
