import React, {useContext, useState} from "react";
import {CategoryContext} from "../context/categoryContext";
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
import {CategoryIcon} from "../model/mode";

interface AddCategoryModelPropsType {
    open: boolean,
    handleClose: () => void
}

const AddCategoryModel: React.FC<AddCategoryModelPropsType> = ({open, handleClose}: any) => {
    const {add} = useContext(CategoryContext);
    const [name, setName] = useState('');
    const [icon, setIcon] = useState<string>('');

    const onSave = () => {
        if (icon !== '' && name !== '') {
            add({name, icon});
            setName('');
            setIcon('');
            handleClose();
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New category</DialogTitle>
            <DialogContent>
                <FormControl>
                    <TextField
                        variant='outlined'
                        autoFocus
                        margin="dense"
                        id="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        label="Name"
                        type="text"
                    />
                </FormControl>
                <FormControl variant='outlined'>
                    <InputLabel id="icon-label">Icon</InputLabel>
                    <Select
                        labelId="icon-label"
                        label="Icon"
                        onChange={event => setIcon(event.target.value as string)}
                    >
                        {CategoryIcon.map((icon, key) => <MenuItem value={icon} key={key}><Icon
                            color="primary">{icon}</Icon></MenuItem>)}

                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button disabled={name === '' || icon === ''} onClick={onSave} variant="contained" color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>

    )
}
export default AddCategoryModel
