import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './Create';
import ViewArticle from './ViewArticle';
import Error from './Error';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/article/:id">
            <ViewArticle />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
