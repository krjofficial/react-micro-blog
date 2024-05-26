import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
          <Route exact path="/"> {/* Add exact prop */}
              <Home/>
          </Route>
          <Route exact path="/create"> {/* Add exact prop */}
              <Create/>
          </Route>
          <Route exact path="/blogs/:id"> {/* Add exact prop */}
              <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
