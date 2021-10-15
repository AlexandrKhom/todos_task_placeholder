import {Link, Redirect, Route, Switch} from 'react-router-dom';
import {Format, Home, Registration, Todos} from './components';
import {Button, Nav, Navbar} from 'react-bootstrap';


export default function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand={'lg'} bg={'dark'} variant={'dark'}>
        <Navbar.Brand className={'ms-1'}>
          web-LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id={'responsive-navbar-nav'}>
          <Nav className={'me-auto'}>
            <Nav.Link className={'ms-5'}><Link to={'/home'}>HOME</Link> </Nav.Link>
            <Nav.Link className={'ms-5'}><Link to={'/createTodo'}>Create Todos</Link> </Nav.Link>
            <Nav.Link className={'ms-5'}><Link to={'/todos'}>All Todos</Link> </Nav.Link>
          </Nav>
          <Nav>
            <Button variant={'primary'} className={'m-1'}><Registration/></Button>
            <Button variant={'primary'} className={'m-1'}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path={'/home'} component={Home}/>
        <Route path={'/createTodo'} component={Format}/>
        <Route path={'/todos'} component={Todos}/>

        <Redirect to={'/home'}/>
      </Switch>
    </div>
  );
}
