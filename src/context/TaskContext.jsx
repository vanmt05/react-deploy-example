import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    const newTask = {
      title: task.title,
      id: tasks.length,
      description: task.description,
    };

    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
