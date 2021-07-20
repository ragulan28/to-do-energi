import React from 'react';
import {CssBaseline, makeStyles} from "@material-ui/core";
import {BrowserRouter, Route} from "react-router-dom";
import TodoScreen from "./TodoScreen";
import NavBar from "../common/NavBar";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <BrowserRouter>
                    <Route path='/'>
                        <CssBaseline/>
                        <NavBar/>
                        <main className={classes.content}>
                            <div className={classes.toolbar}/>
                            <TodoScreen/>
                        </main>
                    </Route>
                </BrowserRouter>
            </div>
        </div>
    );
}
