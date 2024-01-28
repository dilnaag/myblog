import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Details } from './pages/Details'

import { SignInUp } from './pages/SignInUp'
import { PwReset } from './pages/PwReset'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
import { UserProvider } from './Context/UserContext'
import { CategProvider } from './Context/CategContext'
import { AddPost } from './pages/AddPost'
import { EditPost } from './pages/EditPost'


function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <CategProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='details/:id' element={<Details />} />
            <Route path='create' element={<AddPost />} />
            <Route path='update/:id' element={<EditPost />} />
            <Route path='/signinup/:type' element={<SignInUp />} />
            <Route path='pwreset' element={<PwReset />} />
            <Route path='profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        </CategProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
