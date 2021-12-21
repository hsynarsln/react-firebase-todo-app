import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, ButtonGroup, Card, Input, List, ListItem, ListItemText, Modal } from '@mui/material';
import React, { useState } from 'react';
import db from './firebase';
import './Todo.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3)
//   }
// }));

const Todo = props => {
  console.log(props);
  // const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const [input, setInput] = useState('');
  const [date, setDate] = useState('');

  //! EDIT TODO
  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
        date: date
      },
      { merge: true }
    ); //? prevents to overwriting what was already in there

    setOpen(false);
  };

  return (
    <>
      {/* <Modal open={open} onClose={e => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <button onClick={e => setOpen(false)}></button>
        </div>
      </Modal> */}
      <Modal open={open} onClose={e => setOpen(false)}>
        <Box sx={{ ...style, width: 200 }}>
          <h2>Update todo</h2>
          <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
          <Input type='date' placeholder={props.todo.date} value={date} onChange={event => setDate(event.target.value)} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1
              }
            }}
          >
            <ButtonGroup variant='text' aria-label='text button group'>
              <Button color='error' onClick={e => setOpen(false)}>
                CANCEL
              </Button>
              <Button color='primary' disabled={!input || !date} onClick={updateTodo}>
                OKAY
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Modal>
      <Card sx={{ maxWidth: 1000 }} style={{ margin: '10px 0' }}>
        <List className='todo__list'>
          <ListItem>
            <ListItemText primary={props.todo.todo} secondary={props.todo.date} />
          </ListItem>
          <EditIcon color='primary' onClick={e => setOpen(true)} />
          <DeleteIcon variant='outlined' color='error' onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
      </Card>
    </>
  );
};

export default Todo;
