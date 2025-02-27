
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx';
import AboutUs from './components/About/AboutUs.jsx';
import Terms from './components/Terms/Terms.jsx';
import PrivacyPolicy from './components/Privacy/PrivacyPolicy.jsx';
import ContactUs from './components/Contact/ContactUs.jsx';
import RefundPolicy from './components/Refund/RefundPolicy.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<AboutUs />}/>
      <Route path="terms" element={<Terms />}/>
      <Route path="privacy" element={<PrivacyPolicy />}/>
      <Route path="contact" element={<ContactUs />}/>
      <Route path="refund" element={<RefundPolicy />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>,
)
