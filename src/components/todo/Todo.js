import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import {deleteTask, editTask} from '../../redux';
import {Button, Card, Col, Modal, Row} from 'react-bootstrap';
import {Format} from '../forms/Format';
import {useState} from 'react';

export const Todo = ({task}) => {

  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(!show);

  const dispatch = useDispatch();
  const history = useHistory();

  const setFormState = (state) => history.push('/createTodo', state);

  const setNewEdit = (state) => {
    history.push(state);
    handleOpen();
  };

  const changeStatus = (task) => dispatch(editTask({...task, completed: !task.completed}));

  if (task.title.length > 120) {
    task.title = `${task.title.slice(0, 120)} ...`;
  }

  return (
    <div style={{margin: '1px'}}>
      <Row>
        <Col>
          <Card
            bg={task.completed ? 'dark' : 'success'}
            text={task.completed ? 'white' : 'dark'}
            border={'dark'}
            style={{width: '18rem', height: '21rem'}}
          >
            <Card.Header>Number {task.id}</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                {task.title}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant={task.completed ? 'secondary' : 'primary'}
                className={'m-1'}
                onClick={() => setFormState(task)}>Create</Button>
              <Button
                variant={task.completed ? 'secondary' : 'primary'}
                className={'m-1'}
                onClick={setNewEdit}>Modal Edit</Button>
              <Button
                variant={task.completed ? 'secondary' : 'primary'}
                className={'m-1'}
                onClick={() => changeStatus(task)}>Change status</Button>
              <Button
                variant={task.completed ? 'secondary' : 'primary'}
                className={'m-1'}
                onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body><Format task={task}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOpen}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};
