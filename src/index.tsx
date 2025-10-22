import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { HomePage } from './pages/HonePage';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Todo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDetails } from './pages/ItemDetails';
import { Layout } from './layouts/Layout';

const todos: Todo[] = [
  {
    id: 1,
    title: "Learn JS",
    isCompleted: true
  },
  {
    id: 2,
    title: "Make pet-projects",
    isCompleted: false
  },
  {
    id: 3,
    title: "Create portfolio",
    isCompleted: true
  },
  {
    id: 4,
    title: "Get offer",
    isCompleted: false
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/list/:id',
        element:<ItemDetails todos={todos} />
      },
      {
        path: '/todo',
        element:<ToDoListPage />
      },
    ]
  }, 
  {
    path: '*',
    element: <NotFound />
  }
], {
  basename: '/app'
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />} />
        <Route path='/list/:id' element={<ItemDetails todos={todos} />} />
        <Route path="/todo" element={<ToDoListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
