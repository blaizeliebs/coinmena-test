import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Devs from './routes/Devs';
import Repos from './routes/Repos';

const App = () => (
  <Container fluid>
    <Header />
    <Container>
      <Routes>
        <Route path='/developers' element={<Devs />} />
        <Route path='/' element={<Repos />} />
      </Routes>
    </Container>
  </Container>
);

export default App;
