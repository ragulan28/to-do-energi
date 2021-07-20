import React from 'react';
import TodoProvider from "./context/todoContext";
import CategoryProvider from "./context/categoryContext";
import Home from "./screens/Home";

export default function App() {
    return (
        <div>
            <TodoProvider>
                <CategoryProvider>
                    <Home/>
                </CategoryProvider>
            </TodoProvider>
        </div>
    );
}
