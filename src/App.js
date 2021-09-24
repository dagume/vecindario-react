import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        {/* sidebar */}
        <Sidebar />
        <Switch>
          <Route exact path="/">
            {/* Feed */}
            <Feed />
          </Route>
          <Route exact path="/post">
            {/* Feed */}
            <h2>Formulario Post</h2>
          </Route>
        </Switch>
      </Router>
          {/* Widgets */}
          <Widgets />

    </div>
  );
}

export default App;
