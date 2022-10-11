import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home></Home> },
    { path: '/home', element: <Home></Home> },
    { path: '/blog', element: <Blog></Blog> },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;