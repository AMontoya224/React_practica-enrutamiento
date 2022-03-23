import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Word from './Components/Word/Word';
import Box from './Components/Box/Box';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/home" render={ (routeProps) => <Welcome {...routeProps}/>} />
          <Route path="/:word/:letra/:back" render={ (routeProps) => <Box {...routeProps}/>} />
          <Route path="/:variable" render={ (routeProps) => <Word {...routeProps}/>} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
