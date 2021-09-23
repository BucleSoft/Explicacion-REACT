import  {Index}  from './pages/Index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Rhodesian } from './pages/Rhodesian';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>
          <Route path='/rhodesian'>
            <Rhodesian />
          </Route>
        </Switch>
      </Router>
    </div>
  );
  } 

export default App;
