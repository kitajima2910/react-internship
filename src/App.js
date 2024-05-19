import './App.scss';
import Header from './components/Header';
import TableUSers from './components/TableUsers';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className='app-container'>
      <Header />

      <Container>
        <TableUSers />
      </Container>
    </div>
  );
}

export default App;
