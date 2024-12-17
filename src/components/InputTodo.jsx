import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todosSlice';

const InputTodo = () => {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (newTodo.trim() === "") return;
        dispatch(addTodo({ newTodo }));
        setNewTodo("");
    };

    return (
        <div className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition duration-200"
            >
                Add
            </button>
        </div>
    );
};

export default InputTodo;
