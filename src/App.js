import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import NewNote from './NewNote';
import MyNotes from './MyNotes';

const NavBar = () => {
  return (
    <nav className='navlinks'>
      <ul style={{textDecoration: 'none', listStyleType: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
        <li><Link to="/" style={{textDecoration: 'none', listStyleType: 'none', color: 'black', border:'2px solid black', padding: '2px'}}>Register</Link></li>
        <li><Link to="/newnote" style={{textDecoration: 'none', listStyleType: 'none', color: 'black', border:'2px solid black', padding: '2px'}}>New Note</Link></li>
        <li><Link to="/mynotes" style={{textDecoration: 'none', listStyleType: 'none', color: 'black', border:'2px solid black', padding: '2px'}}>My Notes</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/newnote" element={<NewNote />} />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;