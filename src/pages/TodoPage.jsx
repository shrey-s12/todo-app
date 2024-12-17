import React from 'react';
import Todo from '../components/Todo';

const TodoPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 w-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl m-5">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Todo List</h1>
                <Todo />
            </div>
        </div>
    );
};

export default TodoPage;
