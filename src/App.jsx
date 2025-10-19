import { Route, Routes } from 'react-router';
import './index.css';

// pagine
import Home from './pages/home';
import Quiz from './pages/quiz';
import Profilo from './pages/profilo';
import Login from './pages/login';
import Register from './pages/register';

// componenti
import Navbar from './components/navbar';
import Footer from './components/footer';

// hook
import ProtectedRoute from './hook/protectedRoute';

export default function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<ProtectedRoute><Quiz /></ProtectedRoute>} path='/quiz/:id' />
          <Route element={<ProtectedRoute><Profilo /></ProtectedRoute>} path='/profilo' />
          <Route element={<Login />} path='/login' />
          <Route element={<Register />} path='/register' />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}