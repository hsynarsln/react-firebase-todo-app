import { Button, FormControl, Input, InputLabel, TextField } from '@mui/material';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [value, setValue] = useState('');

  //! when the app loads, we nedd to listen to database and fetch new todos as they get added/removed
  useEffect(() => {
    //! get data from firebase
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => ({ id: doc.id, date: doc.data().date, todo: doc.data().todo })));
      });
  }, []);

  const addTodo = event => {
    event.preventDefault();

    //! add firebase
    db.collection('todos').add({
      todo: input,
      date: value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // setTodos([...todos, input]);
    setInput('');
    setValue('');
  };

  // console.log(todos);

  return (
    <div className='App'>
      <h1>TODO APP</h1>
      <form style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto', padding: '20px' }}>
        <FormControl style={{ marginBottom: '20px' }}>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <FormControl style={{ marginBottom: '20px' }}>
          <TextField
            id='date'
            label='Day'
            type='date'
            value={value}
            onChange={event => setValue(event.target.value)}
            sx={{ width: 200 }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </FormControl>
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        {/* //! disabled={!input} --> input girişi yoksa button disabled oluyor */}
        <Button disabled={!input || !value} onClick={addTodo} type='submit' variant='contained' color='success'>
          Add Todo
        </Button>
        {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto', padding: '20px' }}>
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
