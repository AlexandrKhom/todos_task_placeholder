import React from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Registration} from '../registration/Registration';
import {Logo} from '../logo/Logo';


export function Header() {

  return (
    <div>
      <Navbar collapseOnSelect expand={'lg'} bg={'dark'} variant={'dark'}>
        <Navbar.Brand className={'ms-1'}>
          <Logo/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id={'responsive-navbar-nav'}>
          <Nav className={'me-auto'}>
            <Nav.Link className={'ms-5'}><Link to={'/home'}>HOME</Link> </Nav.Link>
            <Nav.Link className={'ms-5'}><Link to={'/createTodo'}>Create Todos</Link> </Nav.Link>
            <Nav.Link className={'ms-5'}><Link to={'/todos'}>All Todos</Link> </Nav.Link>
          </Nav>
          <Nav>
            <Button variant={'primary'} className={'me-1'}><Registration/></Button>
            <Button variant={'primary'} className={'me-1'}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
