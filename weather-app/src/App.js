import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Nav from './components/Nav'
import Astronomy from './pages/Astronomy';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path='/astronomy.json' component={Astronomy} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;
