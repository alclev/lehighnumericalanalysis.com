import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './home';
import Demo from './demo';
import Download from './download';
import About from './about';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className = "link-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/demo">Demo</Link>
              </li>
              <li>
                <Link to="/download">Download</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <h1>2023 Capstone Research</h1>         
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
          </Routes>
          
          <p className="Signature">
            Alex Clevenger, Luke Hale, Michael Speckhart, Diep Luong
          </p>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
