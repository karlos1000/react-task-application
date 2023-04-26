import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    // bg-zinc-600
    <div className="h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
