import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
