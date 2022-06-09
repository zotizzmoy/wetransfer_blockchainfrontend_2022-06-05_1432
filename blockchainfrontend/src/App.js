import "./styles/App.css";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
