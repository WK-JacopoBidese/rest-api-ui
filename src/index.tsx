import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contatto from './routes/users/Contatto';
import Contatti from './routes/users/Contatti';
import Layout from './components/Layout';
import Prodotto from './routes/products/Prodotto';
import Prodotti from './routes/products/Prodotti';
import CreaProdotto from './routes/products/CreaProdotto';
import CreaContatto from './routes/users/CreaContatto';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "contatti/:idContatto",
    element: <Contatto />
  },
  {
    path: "contatti",
    element: <Contatti />
  },
  {
    path: "contatti/crea",
    element: <CreaContatto />
  },
  {
    path: "prodotti/:idProdotto",
    element: <Prodotto />
  },
  {
    path: "prodotti",
    element: <Prodotti />
  },
  {
    path: "prodotti/crea",
    element: <CreaProdotto />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
