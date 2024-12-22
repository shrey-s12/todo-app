import React from 'react';
import { useSelector } from 'react-redux';
import { selectPendingCount, selectCompletedCount } from '../slices/todosSlice';

const RemainingTodos = () => {

    const pendingCount = useSelector(selectPendingCount);
    const completedCount = useSelector(selectCompletedCount);

    return (
        <div className="p-4 bg-gray-50 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-black">Todo Summary</h3>
            <div className="flex flex-col justify-between gap-4">
                <div className="text-center">
                    <p className="text-xl font-bold text-gray-800">{pendingCount}</p>
                    <p className="text-sm text-gray-600">Remaining Todos</p>
                </div>
                <div className="text-center">
                    <p className="text-xl font-bold text-gray-800">{completedCount}</p>
                    <p className="text-sm text-gray-600">Completed Todos</p>
                </div>
            </div>
        </div>
    );
};

export default RemainingTodos;