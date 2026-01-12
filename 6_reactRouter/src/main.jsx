import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact_us from './components/Contact.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact-us',
        element: <Contact_us/>
      },
      {
        path: '/user/:userId',
        element: <User/>
      },
      {
        path: '/github',
        element: <Github/>
      },
    ]
  }
])

//  or we can use 
{/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact_us />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>
  </Routes>
</BrowserRouter> */}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
