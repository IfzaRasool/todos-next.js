import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = (props) => {
  const deleteTodo = () => {
    props.onCheck(props.id);
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={deleteTodo}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton onClick={deleteTodo}>
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary={props.text} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default TodoItem;
