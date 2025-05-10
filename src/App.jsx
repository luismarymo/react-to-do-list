import { useEffect, useState } from "react";
import "./styles.css";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";

export default function App() {
  //pass a function to state, so it checks the local storage and sets the state to what it finds, or an empty array
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos));
  }, [toDos]);
  //every time toDos are modified, useSEffect will run the function

  function addToDo(title) {
    // when using set, if you wanna handle the old value, always create a new object, do not mutate it
    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDos) => {
      return currentToDos.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, completed };
        }

        return toDo;
      });
    });
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((toDo) => toDo.id !== id);
    });
  }

  return (
    <>
      <NewToDoForm onSubmit={addToDo} />
      <h1 className="header">To Do List</h1>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  );
}
