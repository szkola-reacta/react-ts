import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Movies } from './Movies/Movies';
import { Movie } from './Movies/Movie';
import { Contact } from './Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">News</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
