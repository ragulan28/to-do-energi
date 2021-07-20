import {useHistory} from "react-router-dom";
import React, {useContext} from "react";
import {CategoryContext} from "../context/categoryContext";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {Category} from "../model/mode";

interface DeleteModelPropsType {
    open: boolean,
    handleClose: () => void,
    category: Category
}

const DeleteModel :React.FC<DeleteModelPropsType>  = ({open, handleClose, category}) => {
    const history = useHistory();
    const {deleteById} = useContext(CategoryContext);

    const onDelete = () => {
        if (category.id) {
            deleteById(category.id);
            handleClose()
        }
        const path = `todo`;
        history.push(path);
    }

    return (
        <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Do you want to delete category: <strong>{category?.name}</strong>?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='contained' color="primary">
                    Cancel
                </Button>
                <Button onClick={onDelete}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>

    )
}
export default DeleteModel
