import React, {createContext, useContext, useEffect, useState} from "react";
import {Category} from "../model/mode";
import {v4 as uuidv4} from 'uuid';
import {TodoContext} from "./todoContext";


type CategoryContextType = {
    categories: Category[]
    add: (newCategory: Category) => void
    deleteById: (id: string) => void
};

// @ts-ignore
export const CategoryContext = createContext<CategoryContextType>();

const CategoryProvider: React.FC<React.ReactNode> = ({children}) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const {deleteByCategory} = useContext(TodoContext);

    useEffect(() => {
        const _categories = localStorage.getItem('categories');
        if (_categories) {
            setCategories(JSON.parse(_categories))
        }
    }, []);

    useEffect(() => {
        updateCache()
    }, [categories]);

    const add = (newCategory: Category) => {
        newCategory.id = uuidv4();
        setCategories([...categories, newCategory]);
    }

    const deleteById = (id: string) => {
        const _categories = categories;
        const _category = _categories.find(t => t.id === id);
        if (_category) {
            const index = _categories.indexOf(_category);
            _categories.splice(index, 1);
            deleteByCategory(id);
        }
        setCategories([..._categories]);
    }

    const updateCache = () => {
        localStorage.setItem('categories', JSON.stringify(categories));
    };

    return (
        <CategoryContext.Provider value={{categories, add, deleteById}}>
            {children}
        </CategoryContext.Provider>
    );
}
export default CategoryProvider;
