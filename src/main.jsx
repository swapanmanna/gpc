
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx';
import AboutUs from './components/About/AboutUs.jsx';
import Terms from './components/Terms/Terms.jsx';
import PrivacyPolicy from './components/Privacy/PrivacyPolicy.jsx';
import ContactUs from './components/Contact/ContactUs.jsx';
import RefundPolicy from './components/Refund/RefundPolicy.jsx';
import SuccessStories from './components/SuccessStories/SuccessStories.jsx';
import Events from "./components/Events/Events.jsx";
import Cia from './components/Courses/Cia.jsx';
import CoursesOverview from './components/CoursesOverview/CoursesOverview.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<AboutUs />}/>
      <Route path="terms" element={<Terms />}/>
      <Route path="privacy" element={<PrivacyPolicy />}/>
      <Route path="contact" element={<ContactUs />}/>
      <Route path="refund" element={<RefundPolicy />}/>
      <Route path="success" element={<SuccessStories />}/>
      <Route path="courses" element={<CoursesOverview />} />
      <Route path="courses/cia" element={<Cia />}/>
      <Route path="events" element={<Events />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </ThemeProvider>
)
