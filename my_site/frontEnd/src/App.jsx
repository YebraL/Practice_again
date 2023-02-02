import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  

  return (
    
      <div className="App">
        <Router>
          <Navbar className="color-nav" variant='light'>
            <Nav className="me-auto" style={{width:'20%', justifyContent:'space-around'}}>

              <Nav.Item>
                <Link to='/'> Home </Link>
              </Nav.Item>
                        
              <Nav.Item>
                <Link to='projects'> Projects </Link>
              </Nav.Item>

              <Nav.Item>
                <Link to='contact'> Contact </Link>
              </Nav.Item>

            </Nav>
          </Navbar>
        <Routes>
   
          <Route path='/' element={<Home/>}/>
          <Route path='projects/' element={<Projects/>}/>
          <Route path='contact/' element={<Contact/>}/>
      
        </Routes>
      </Router>
     
      </div>
  )
}

export default App
