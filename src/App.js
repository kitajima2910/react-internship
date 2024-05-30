import './App.scss';
import Header from './components/Header';
import TableUSers from './components/TableUsers';
import { Container } from 'react-bootstrap';
import { Bounce, ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <div className='app-container'>
        <Header />

        <Container>
          <TableUSers />
        </Container>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
