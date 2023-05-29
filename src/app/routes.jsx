import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

const About = React.lazy(async () => import('../pages/About').then((m) => ({ default: m.About })));
const Services = React.lazy(async () => import('../pages/Services').then((m) => ({ default: m.Services })));
// const EmailConfirm = React.lazy(async () => import('../pages/Login/ForgotPassword/EmailConfirm').then((m) => ({ default: m.EmailConfirm })));

export function MyRoutes() {
  return (
    <Routes>

      <Route path="/" element={<About />} />

       <Route path="/services" element={<Services />} />
    {/*  <Route path="/forgotPassword/emailconfirm" element={<EmailConfirm />} /> */}

   </Routes>

  );
}
