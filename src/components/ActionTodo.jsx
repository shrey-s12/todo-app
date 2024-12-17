import React from 'react';
import { allCompleted, allIncompleted, allClear } from '../slices/todosSlice';
import { useDispatch } from 'react-redux';

const ActionTodo = () => {
    const dispatch = useDispatch();

    const handleAllCompleted = () => {
        console.log("All Completed");
        dispatch(allCompleted());
    };

    const handleAllIncompleted = () => {
        console.log("All Incompleted");
        dispatch(allIncompleted());
    }

    const handleAllClear = () => {
        console.log("All Clear");
        dispatch(allClear());
    };

    return (
        <div className="p-4 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Actions</h3>
            <div className="flex flex-col gap-4">
                <button
                    onClick={handleAllCompleted}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500 transition duration-200"
                >
                    Make All Completed
                </button>
                <button
                    onClick={handleAllIncompleted}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md shadow hover:bg-gray-500 transition duration-200"
                >
                    Make All Incompleted
                </button>
                <button
                    onClick={handleAllClear}
                    className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-500 transition duration-200"
                >
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default ActionTodo;