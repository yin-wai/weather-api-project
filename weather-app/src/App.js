import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Nav from './components/Nav';
import Astronomy from './pages/Astronomy';
import './App.css';
import Home2 from './pages/Home2';

function App() {
  return (
    <Router>
    <section className='app-section'> 
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route path='/astronomy.json' component={Astronomy} />
          <Route path='/' component={Home2} />
        </Switch>
      </main>
    </section>
    </Router>
  );
}

export default App;
