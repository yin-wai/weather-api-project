import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import History from './pages/History'
import Nav from './components/Nav'
import Astronomy from './pages/Astronomy';
import './App.css';
import Home2 from './pages/Home2';
// import Forecast from './pages/Forecast';
import Forecast_2 from './pages/Forecast_2';

function App() {
  return (
    <Router>
<<<<<<< HEAD
=======
    <section className='app-section'> 
>>>>>>> 5b8d2954f0b6fe1c89274bf38894803b10fea7c6
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          {/* <Route path='/forecast.json' component={Forecast} /> */}
          <Route path='/forecast.json' component={Forecast_2} />
          <Route path='/history.json' component={History} />
          <Route path='/astronomy.json' component={Astronomy} />
          <Route path='/' component={Home2} />
        </Switch>
      </main>
<<<<<<< HEAD
=======
    </section>
>>>>>>> 5b8d2954f0b6fe1c89274bf38894803b10fea7c6
    </Router>
  );
}

export default App;
