import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Movies } from './Movies/Movies';
import { Movie } from './Movies/Movie';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
