import React from "react";
import {Todo} from "../model/mode";
import {Card, CardContent, Grid, Icon, makeStyles} from "@material-ui/core";

interface TodoCartType {
    todo: Todo;
    onDelete: () => void
}

const useStyles = makeStyles(() => ({
    cardContent: {
        minHeight: "5rem",
        position: "relative",
        backgroundColor: "#e6ecfa"
    },
    deleteBtn: {
        position: "absolute",
        top: '-0.1rem',
        right: '-0.1rem',
        color: '#82142d'
    },
}));

const TodoCard: React.FC<TodoCartType> = ({todo, onDelete}) => {
    const classes = useStyles();

    return (
        <Card variant="outlined">
            <CardContent className={classes.cardContent}>
                <Grid  container spacing={2}>
                    <Grid xs={2} item={true}><Icon color={"primary"}>{todo.category.icon}</Icon></Grid>
                    <Grid xs={8} item={true}>{todo.name}</Grid>
                    <Icon className={classes.deleteBtn} onClick={() => onDelete()}>close</Icon>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TodoCard
