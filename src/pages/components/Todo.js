import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../../redux/todos/todoList';
import NavBar from './Navbar';
import {
  Typography,
  TextField,
  Button,
  Box,
  Container,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

const Todos = () => {
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const { text } = e.target.elements;
    dispatch(addTodo(text.value));
    text.value = '';
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container sx={{ p: 5 }}>
          <Typography variant="h3" color="#864313" pt={5} fontWeight="900">
            Todos
          </Typography>
          <Box
            component="form"
            onSubmit={handleAddTodo}
            sx={{
              marginTop: 8,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              autoComplete="given-name"
              name="text"
              required
              fullWidth
              id="text"
              autoFocus
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                ml: 1,
                p: 2,
              }}
            >
              {' '}
              ADD{' '}
            </Button>
          </Box>
          <Box component="div">
            {count > 0 &&
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  text={todo.text}
                  id={todo.id}
                  onCheck={handleTodoDone}
                />
              ))}
            {count === 0 && <p>No todos</p>}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Todos;
