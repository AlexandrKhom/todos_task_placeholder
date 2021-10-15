import {Redirect, Route, Switch} from 'react-router-dom';
import {Format, Header, Home, Todos} from './components';


export default function App() {
  return (
    <div style={{height: '100vh', backgroundColor: 'lightblue'}}>
      <div>

        <Header/>
        <Switch>
          <Route path={'/home'} component={Home}/>
          <Route path={'/createTodo'} component={Format}/>
          <Route path={'/todos'} component={Todos}/>

          <Redirect to={'/home'}/>
        </Switch>
      </div>
    </div>
  );
}
