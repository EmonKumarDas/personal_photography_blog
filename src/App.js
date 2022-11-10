import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Router/Route';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
