import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';

import ErrorPage from '../pages/Error/ErrorPage';
import Dashboard from '../pages/Dashboard/Dashboard';
import CallLogs from '../pages/Dashboard/CallLogs';
import Appointment from '../pages/Dashboard/Appointment';
import Setting from '../pages/Dashboard/Setting';
import Home from '../pages/Home/Home';
import Overview from '../pages/Dashboard/Overview';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true, 
        element: <Home></Home>
      },
      
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        index: true,
        element: <Overview></Overview>
      },
      {
        path: 'call-logs',
        element: <CallLogs></CallLogs>
      },
      {
        path: 'appointment',
        element: <Appointment></Appointment>
      },
      {
        path: 'setting',
        element: <Setting></Setting>
      },
    ]
  }
]);
