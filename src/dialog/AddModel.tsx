import React, {useContext, useEffect, useState} from "react";
import {CategoryContext} from "../context/categoryContext";
import {useHistory} from "react-router-dom";
import {Category, Todo} from "../model/mode";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Icon,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@material-ui/core";

interface AddTodoModelPropsType {
    open: boolean,
    handleClose: () => void,
    onAdd: (todo: Todo) => void,
    categoryId: string | null
}

const AddTodoModel: React.FC<AddTodoModelPropsType> = ({open, handleClose, onAdd, categoryId}) => {
    const {categories} = useContext(CategoryContext);
    const history = useHistory();
    const [name, setName] = useState('');
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        let _category = categories.find(c => c.id === categoryId);
        if (_category) {
            setCategory(_category);
        } else {
            let path = `todo`;
            history.push(path);
        }
    }, [categories, categoryId, history])

    const onSave = () => {
        if (name !== '' && category) {
            onAdd({name, category});
            setName('');
            handleClose();
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            {categories.length > 0 && <>
                <DialogTitle id="form-dialog-title">New Todo</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <TextField
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            id="name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            label="Title"
                            type="text"
                            fullWidth
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    {!categoryId &&
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="icon-label">Category</InputLabel>
                        <Select
                            variant="filled"
                            labelId="icon-label"
                            onChange={event => (setCategory(categories[(event.target.value as number)]))}
                        >
                            {categories.map((category, key) => <MenuItem value={key} key={key}>
                                <Icon style={{fontSize: '1rem'}}
                                      color="secondary">{category.icon}</Icon>&nbsp;{category.name}
                            </MenuItem>)}

                        </Select>
                    </FormControl>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={name === '' || category === undefined} onClick={onSave} variant="contained"
                            color="primary">
                        Add
                    </Button>
                </DialogActions>
            </>}
            {categories.length === 0 && <>
                <DialogContent id="form-dialog-title">No category available <br/> Add category first</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </>}
        </Dialog>

    )
}

export default AddTodoModel
