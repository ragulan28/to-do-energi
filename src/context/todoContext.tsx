import React, {createContext, useEffect, useState} from "react";
import {Todo} from "../model/mode";
import {v4 as uuidv4} from 'uuid';

type TodoContextType = {
    todos: Todo[]
    add: (newTodo: Todo) => Todo
    deleteById: (id: string) => void
    getByCategory: (categoryId: string) => Todo[]
    deleteByCategory: (categoryId: string) => Todo[]
};

// @ts-ignore
export const TodoContext = createContext<TodoContextType>();

const TodoProvider: React.FC<React.ReactNode> = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const _todos = localStorage.getItem('todos');
        if (_todos){
            setTodos(JSON.parse(_todos))
        }
    }, []);

    useEffect(() => {
        updateCache()
    }, [todos]);


    const add = (newTodo: Todo): Todo => {
        newTodo.id = uuidv4();
        setTodos([...todos, newTodo]);
        return newTodo
    }

    const getByCategory = (categoryId: string): Todo[] => {
        return todos.filter(t => t.category.id === categoryId);
    }

    const deleteByCategory = (categoryId: string): Todo[] => {
        const _todos = todos.filter(t => t.category.id !== categoryId);
        setTodos([..._todos])
        return _todos
    }

    const deleteById = (id: string) => {
        const _todos = todos;

        const _todo = _todos.find(t => t.id === id);
        if (_todo) {
            const index = _todos.indexOf(_todo);
            _todos.splice(index, 1);
        }
        setTodos([..._todos]);
    }

    const updateCache = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    return (
        <TodoContext.Provider value={{todos, add, deleteById, getByCategory, deleteByCategory}}>
            {children}
        </TodoContext.Provider>
    );
};
export default TodoProvider;
