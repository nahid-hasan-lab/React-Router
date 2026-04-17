import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='text-center '>Hello From React Router!!</div>
  },

  {
    path: '/about',
    element: <div className='text-center'>I am in the about page </div>
  },
  {
    path: '/nahid',
    element: <div>My name is Nahid Hasan . I read in Social Polytechnic Institute in CST department</div>
  },
  {
    path: '/abdur',
    element: <div className='text-center bg-yellow-200 rounded-sm h-[100px] text-black'>
      <h1>Name : Abdur Rahman</h1>
      <p>Contact : 01709409266</p>
    </div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
