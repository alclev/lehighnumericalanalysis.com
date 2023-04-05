import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import Demo from './pages/demo';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className="nav-links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/demo">Demo</Link>
                </li>
              </ul>
          </nav>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/demo" component={Demo} />
            <Route path="/about" component={About} />
          </Routes>
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            2023 Capstone Research
          </p>
          <a>
            Alex Clevenger, Luke Hale, Micheal Speckhart, Diep Luong
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
