import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import 'normalize.css';
import './App.scss';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
