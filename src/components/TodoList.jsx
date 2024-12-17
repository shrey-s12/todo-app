import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodos, toggleComplete, updatedColor } from '../slices/todosSlice';
import { selectColorFilter } from '../slices/filtersSlice';

const TodoList = ({ colors, filter }) => {

  const allTodos = useSelector(selectTodos);
  const selectedColorFilter = useSelector(selectColorFilter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id, "id");
    dispatch(deleteTodo({ id }));
  }

  const handleCheckbox = (id) => {
    console.log(id, "Checked id");
    dispatch(toggleComplete({ id }));
  }

  const handleColorChange = (id, color) => {
    dispatch(updatedColor({ id, color }));
  };

  const filteredTodos = allTodos.filter((todo) => {
    if (filter === "active" && todo.completed) {
      return false;
    }
    if (filter === "completed" && !todo.completed) {
      return false;
    }

    if (selectedColorFilter.length > 0 && !selectedColorFilter.includes(todo.color)) {
      return false;
    }

    return true;
  });


  console.log(allTodos, "allTodos");

  return (
    <div className="mt-4 min-h-[235px]">
      {filteredTodos.length === 0
        ? (
          <div className="text-center text-gray-500">No todos to show</div>
        )
        : (<ul className="space-y-4">
          {filteredTodos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 border rounded-md shadow-sm hover:shadow-md transition duration-200"
            >
              {/* Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckbox(todo.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className={`${todo.completed ? "line-through text-gray-400" : "text-gray-800"} font-medium`}>
                  {todo.text}
                </span>
              </div>

              {/* Color Selector and Actions */}
              <div className="flex items-center space-x-4">
                <select
                  value={todo.color}
                  onChange={(e) => handleColorChange(todo.id, e.target.value)}
                  className={`px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-${todo.color}-100 text-${todo.color}-800`}
                >
                  <option value="">No Filter</option>
                  {colors.map((color, index) => (
                    <option
                      key={index}
                      value={color}
                      className={`bg-${color}-100 text-${color}-800`}
                    >
                      {color}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-500 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        )}
    </div>
  );
};

export default TodoList;