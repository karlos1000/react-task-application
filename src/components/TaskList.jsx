import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const {tasks} = useContext(TaskContext);

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
