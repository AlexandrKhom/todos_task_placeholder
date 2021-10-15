import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import { editTask, setTask } from '../../redux';
import {Button, Form} from 'react-bootstrap';

export const Format = ({task}) => {
  const [formState, setFormState] = useState({ title: '', completed: false });

  const history = useHistory();
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    if(task) {
      setFormState(task);
    }
  }, [task]);

  const taskToAdd = (e) => setFormState({...formState, [e.target.name]: e.target.value});

  const onSubmit = (e) => {
    e.preventDefault();
    formState.id
      ? dispatch(editTask(formState))
      : dispatch(setTask(formState));

    setFormState({title: '', completed: false });
    if(formState.id) {history.push('/todos');}
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Form onSubmit={onSubmit} className="" >
        <Form.Group controlId={taskToAdd}>
          <Form.Label>Write ur TODO</Form.Label>
          <Form.Control type="text" placeholder="Todo..." name={'title'} value={formState.title} onChange={taskToAdd}/>
          <Form.Text className="text-muted">
            brevity is the soul of wit
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className={'mt-3'}>
          Submit
        </Button>

      </Form>
    </div>
  );
};
