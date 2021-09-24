import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
      <Router>

        <Sidebar />

        <Switch>
            <Feed />
        </Switch>

      </Router>

      <Widgets />

    </div>
  );
}

export default App;
