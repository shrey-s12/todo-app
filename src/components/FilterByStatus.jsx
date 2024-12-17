import React from 'react';

const FilterByStatus = ({ filter, setFilter }) => {

    const showAllTodos = () => {
        console.log("All Todos");
        setFilter("all");
    };

    const showAllActiveTodos = () => {
        console.log("Active Todos");
        setFilter("active");
    };

    const showAllCompletedTodos = () => {
        console.log("Completed Todos");
        setFilter("completed");
    };

    return (
        <div className="p-4 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Filter by Status</h3>
            <div className="flex flex-col gap-4">
                <button
                    onClick={showAllTodos}
                    className={`px-4 py-2 rounded-md transition duration-200 ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
                >
                    All
                </button>
                <button
                    onClick={showAllActiveTodos}
                    className={`px-4 py-2 rounded-md transition duration-200 ${filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
                >
                    Active
                </button>
                <button
                    onClick={showAllCompletedTodos}
                    className={`px-4 py-2 rounded-md transition duration-200 ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
                >
                    Completed
                </button>
            </div>
        </div>
    );
};

export default FilterByStatus;
