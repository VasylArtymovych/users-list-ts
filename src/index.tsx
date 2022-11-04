import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UsersProvider } from 'hooks';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
    <ToastContainer />
  </React.StrictMode>
);
