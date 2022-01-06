import styled from 'styled-components'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const AppHeader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

function App() {
  return (
    <Container fluid>
      <AppHeader>
        <h1>Trending</h1>
        <p>See what the GitHub community is most excited about today.</p>
      </AppHeader>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto" variant="pills">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Trending Repos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/developers">Trending Developers</Nav.Link>
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

function Devs() {
  return <h2>Devs</h2>;
}

function Repos() {
  return <h2>Repos</h2>;
}

export default App;
