import React from "react";

const TodoList = (props) => {
  const handleDelete = (index) => {
    const updatedItems = props.items.filter((item, i) => i !== index);

    props.setItems(updatedItems);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">Todo List</h1>
      {props.items.length === 0 ? (
        <p className="text-center text-gray-500">No items yet</p>
      ) : (
        <ul className="space-y-2">
          {props.items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between p-3 bg-white rounded border border-gray-300 hover:bg-gray-200 transition-colors duration-300"
            >
              <label className="flex items-center space-x-2">
                <span className={` ${item.completed ? "text-gray-600" : ""}`}>
                  {item.items}
                </span>
              </label>
              <button
                className="text-white-600 hover:text-red-800"
                onClick={() => handleDelete(idx)}
              >
                Completed
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
