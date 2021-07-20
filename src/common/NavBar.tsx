import React, {useContext, useState} from "react";
import {CategoryContext} from "../context/categoryContext";
import {Category} from "../model/mode";
import {
    AppBar,
    Divider,
    Drawer,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Typography
} from "@material-ui/core";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {Link} from "react-router-dom";
import AddCategoryModel from "../dialog/AddCategoryModel";
import DeleteModel from "../dialog/DeleteModel";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    addBtn: {
        position: "absolute",
        bottom: 0
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}));


const NavBar = () => {
    const classes = useStyles();
    const {categories} = useContext(CategoryContext)
    const [deleteModelOpen, setDeleteModelOpen] = useState(false);
    const [deletingCategory, setDeletingCategory] = useState<Category>();
    const [open, setOpen] = useState(false);
    const [addModelOpen, setAddModelOpen] = useState(false);

    return <>
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setOpen(true)}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    TO DO
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >

            <div className={classes.toolbar}>
                <IconButton onClick={() => setOpen(false)}>
                    <ChevronLeftIcon/>
                    {open && <Typography variant="h6">
                        Categories
                    </Typography>}
                </IconButton>
            </div>
            <Divider/>
            <List>
                {categories.map(({name, icon, id}, key) =>
                    <ListItem button key={key} component={Link} to={`/todo?category=${id}`}
                              onDoubleClick={() => {
                                  setDeleteModelOpen(true);
                                  setDeletingCategory({name, icon, id})
                              }}>
                        <ListItemIcon><Icon color="primary">{icon}</Icon> </ListItemIcon>
                        <ListItemText primary={name}/>
                    </ListItem>
                )}
            </List>

            <Divider/>
            <ListItem className={classes.addBtn} button onClick={() => setAddModelOpen(true)}>
                <ListItemIcon>
                    <Icon color="primary">add</Icon>
                </ListItemIcon>
                <ListItemText primary='Add'/>
            </ListItem>

        </Drawer>
        <AddCategoryModel
            handleClose={() => setAddModelOpen(false)}
            open={addModelOpen}/>
        {deletingCategory && <DeleteModel
            category={deletingCategory}
            handleClose={() => setDeleteModelOpen(false)}
            open={deleteModelOpen}/>}
    </>
}

export default NavBar
