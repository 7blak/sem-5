import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CarsPage from './components/CarsPage';
import NewCar from './components/NewCar';
import CarDetails from './components/CarDetails';
import Error404Page from './components/Error404Page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "cars",
        element: <CarsPage />,
        children: [
          {
            path: "new",
            element: <NewCar />,
          },
          {
            path: ":id",
            element: <CarDetails />
          },
        ],
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
