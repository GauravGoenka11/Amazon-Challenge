import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
function App() {
  return (
    //Router is use for routing
    <Router>
      <div className="App">
        {/* //if have put header outside the swicth bcz we don't want everytime it should go to that path? */}
     {/* header is repeated everytime so we move it out of switch */}
      <Header />

        {/* now we want to render the pages so we use switch  */}
        <Switch>
          <Route path="/checkout">
            <Checkout/>

          </Route>

        {/* Default route is given by / */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
