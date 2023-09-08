"use client";
import { useState } from "react";

export default function TodoForm(props) {
  const [form, setForm] = useState({
    item: "",
    completed: false,
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.setItems([
      ...props.items,
      {
        items: form.item,
        completed: form.completed,
      },
    ]);
    setForm({
      item: "",
      completed: false,
    });
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Todo Form</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="item" className="mb-2">
              Item
            </label>
            <input
              onChange={handleUpdate}
              type="text"
              name="item"
              value={form.item}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-center space-x-2"></div>
          <input onClick={handleClick} type="submit" />
        </form>
      </div>
    </div>
  );
}
