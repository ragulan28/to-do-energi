import React, {useContext, useEffect, useState} from 'react';
import {Fab, Grid, makeStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {TodoContext} from "../context/todoContext";
import {Todo} from "../model/mode";
import {useLocation} from 'react-router-dom';
import TodoCard from "../common/TodoCard";
import AddModel from "../dialog/AddModel";

const useStyles = makeStyles(() => ({
    root: {textAlign: "center"},
    addButton: {
        position: "fixed",
        bottom: "2rem",
        right: '2rem'
    },
}));

const TodoScreen = () => {
    const search = useLocation().search;
    const classes = useStyles();
    const [categoryId, setCategoryId] = useState<string | null>('');
    const [open, setOpen] = useState(false);
    const [filteredTodo, setFilteredTodo] = useState<Todo[]>([]);

    const {todos: allTodo, deleteById, getByCategory, add} = useContext(TodoContext);
    useEffect(() => {
        const _categoryId = new URLSearchParams(search).get('category')
        setCategoryId(_categoryId);
    }, [search]);

    useEffect(() => {
        getTodo()
    }, [categoryId])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getTodo = () => {
        if (categoryId) {
            let byCategory = getByCategory(categoryId);
            setFilteredTodo(byCategory)
        } else {
            setFilteredTodo(allTodo);
        }
    }
    const onRemove = (todo: Todo) => {
        deleteById(todo.id!)
        getTodo()
    }
    const onAdd = (todo: Todo) => {
        let newToDo = add(todo);
        setFilteredTodo([...filteredTodo, newToDo])
    }
    return (

        <div className={classes.root}>
            {filteredTodo.length === 0 && <span>Add new todo</span>}
            <Grid container spacing={2}>
                {filteredTodo.map((todo) => <Grid key={todo.id} item sm={4}>
                    <TodoCard todo={todo}
                              onDelete={() => onRemove(todo)}/></Grid>)}
            </Grid>
            <Fab onClick={handleClickOpen} className={classes.addButton} color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
            <AddModel categoryId={categoryId} open={open} handleClose={handleClose} onAdd={(t: Todo) => onAdd(t)}/>
        </div>
    );
}
export default TodoScreen
