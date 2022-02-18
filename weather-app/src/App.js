import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import History from "./pages/History";
import Nav from "./components/Nav";
import Astronomy from "./pages/Astronomy";
import "./App.css";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <body>
        <main>
          <Switch>
            <Route path="/forecast.json" component={Forecast} />
            <Route path="/history.json" component={History} />
            <Route path="/astronomy.json" component={Astronomy} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </body>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
