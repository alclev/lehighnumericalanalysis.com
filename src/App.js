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
          <nav className = "link-nav">
            <ul>
              <li>
                <a href="/">
                    <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a href="/demo">
                    <Link to="/demo">Demo</Link>
                </a>
              </li>
              <li>
                <a href="/about">
                    <Link to="/about">About</Link>
                </a>
              </li>
            </ul>
          </nav>
          <h1>2023 Capstone Research</h1>         
          <Routes>
            <Route exact path="/" component={< Home />} />
            <Route exact path="/demo" component={< Demo />} />
            <Route path="/about" component={< About />} />
          </Routes>
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            Alex Clevenger, Luke Hale, Micheal Speckhart, Diep Luong
          </p>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
