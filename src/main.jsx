import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Blog from './pages/Blog';
import Home from './components/Home';
import SingleJobDetail from './components/SingleJobDetail';
import ApplyJob from './pages/ApplyJob';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './components/Error';
import getJobDetails from './components/loadiner/LoaderFunction'
import Statistics from './components/Statistics'


const router = createBrowserRouter([
    
            {
                path:'/',
                element:<App></App>,
                errorElement:<Error/>,
                children:[
                    {
                        path:'/',
                        element:<Home></Home>,
                        loader:async()=>fetch('webdata.json') 
                    },
                    {
                        path:'/:id',
                        element:<SingleJobDetail></SingleJobDetail>,
                        loader:getJobDetails
                    },
                ]
            },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/applyjob',
            element:<ApplyJob></ApplyJob>
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },
        
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </React.StrictMode>,
)
