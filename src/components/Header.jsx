import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Title from '../components/Title';

const AppHeader = styled.header`
  background-color: #161b22;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px 0;
`;

function Header() {
  const [active, setActive] = useState('/');
  return (
    <>
      <AppHeader>
        <Title
          header='Trending'
          subHeader='See what the GitHub community is most excited about today.'
        />
      </AppHeader>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav
            activeKey={active}
            onSelect={(selectedKey) => setActive(selectedKey)}
            className='me-auto'
            variant='pills'>
            <Nav.Item className='pe-2'>
              <Nav.Link as={Link} to='/' eventKey='/'>
                Repositories
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to='/developers' eventKey='/developers'>
                Developers
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
