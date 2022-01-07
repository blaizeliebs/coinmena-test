import { useState } from 'react';
import styled from 'styled-components'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Devs from './routes/Devs'
import Repos from './routes/Repos'

const AppHeader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

function App() {
  const [active, setActive] = useState('/');
  return (
    <Container fluid>
      <AppHeader>
        <h1>Trending</h1>
        <p>See what the GitHub community is most excited about today.</p>
      </AppHeader>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Nav 
          activeKey={active}
          onSelect={(selectedKey) => setActive(selectedKey)} 
          className="me-auto" 
          variant="pills"
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/" eventKey="/">Trending Repos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/developers" eventKey="/developers">Trending Developers</Nav.Link>
          </Nav.Item>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/developers' element={<Devs/>} />
        <Route path='/' element={<Repos/>} />
      </Routes>
    </Container>
  );
}

export default App;
