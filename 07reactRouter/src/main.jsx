import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'

import { gitHubInfoLoader } from './components/GitHub/GitHub.jsx'



// one way to create a router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <ContactUs />
//       }
//     ]

//   }
// ])

// another way to create a router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader={gitHubInfoLoader}
      path="github" 
      element={<GitHub />} 
      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
