import { useState } from "react";

export function NewToDoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function hanldeSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={hanldeSubmit} className="new-item-form">
      {/*class is a reserved keyword so use className*/}
      <div className="form-row">
        {/*for -> htmlFor */}
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
