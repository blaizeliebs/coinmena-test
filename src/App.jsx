import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Devs from './routes/Devs';
import Repos from './routes/Repos';

const Footer = styled.footer`
  display: flex;
`;

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid='location-display'>{location.pathname}</div>;
};

const App = () => (
  <Container fluid>
    <Header />
    <Container>
      <Routes>
        <Route exact path='/' element={<Repos />} />
        <Route path='/developers' element={<Devs />} />
      </Routes>
    </Container>
    <Footer>
      Ⓒ Blaize Liebenberg - <LocationDisplay />
    </Footer>
  </Container>
);

export default App;
