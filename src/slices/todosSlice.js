import { createSlice } from '@reduxjs/toolkit';

const generateNewId = (state) => {
    let newId = -1;
    state.todos.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
}

const initialState = {
    todos: [
        { id: 1, text: 'Learn React', completed: false, color: 'red' },
        { id: 2, text: 'Learn Redux', completed: true, color: 'green' },
        { id: 3, text: 'Build something fun!', completed: false, color: 'blue' },
    ]
}

const todosSlice = createSlice({
    name: 'todosNameInSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                text: action.payload.newTodo,
                id: generateNewId(state),
                completed: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        toggleComplete: (state, action) => {
            const { id } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        allCompleted: (state) => {
            state.todos.forEach(todo => {
                todo.completed = true;
            })
        },
        allIncompleted: (state) => {
            state.todos.forEach(todo => {
                todo.completed = false;
            })
        },
        allClear: (state) => {
            state.todos.forEach(todo => {
                if (todo.completed == true) {
                    state.todos = state.todos.filter((todo) => todo.completed !== true);
                }
            })
        }
    }
})

export const { addTodo, deleteTodo, toggleComplete, allCompleted, allIncompleted, allClear } = todosSlice.actions;
export default todosSlice.reducer;

export const selectTodos = state => state.todosKeyInStore.todos;