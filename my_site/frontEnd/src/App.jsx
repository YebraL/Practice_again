import './App.css'

import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects';

function App() {
  

  return (
    
      <div className="App">
        <h1>Starting Page</h1>
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
          </ul>
        </nav>
      <Routes>
   
          <Route path='/' element={<Home/>}/>
          <Route path='projects/' element={<Projects/>}/>
      
      </Routes>
      </Router>
     
      </div>
    
  )
}

export default App
