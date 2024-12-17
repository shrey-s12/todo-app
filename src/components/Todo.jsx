import React, { useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const Todo = () => {
    const [filter, setFilter] = useState("all");
    const colors = ['green', 'blue', 'orange', 'purple', 'red'];

    return (
        <div className="flex flex-col gap-4">
            {/* Add todo input */}
            <InputTodo />

            {/* List of all todos */}
            <TodoList colors={colors} filter={filter} />

            {/* Action buttons */}
            <Footer colors={colors} setFilter={setFilter} />
        </div>
    );
};

export default Todo;
