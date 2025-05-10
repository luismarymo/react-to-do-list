import { ToDoItem } from "./ToDoItem";

export function ToDoList({ toDos, toggleToDo, deleteToDo }) {
  return (
    <ul className="list">
      {/* Short circuiting. When that is true, do whats after the && */}
      {toDos.length === 0 && "No To Dos"}
      {toDos.map((toDo) => {
        return (
          <ToDoItem
            {...toDo}
            key={toDo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        );
      })}
    </ul>
  );
}
