import {Redirect, Route, Switch} from 'react-router-dom';
import {Format, Header, Home, Todos} from './components';
import './App.css';

export default function App() {
  return (
    <div className={'wrapper-App'}>

      <Header/>
      <Switch>
        <Route path={'/home'} component={Home}/>
        <Route path={'/createTodo'} component={Format}/>
        <Route path={'/todos'} component={Todos}/>

        <Redirect to={'/home'}/>
      </Switch>
    </div>
  );
}
