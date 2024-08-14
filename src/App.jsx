
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login';
import Registro from './pages/Registro';

import PageDashboard from './pages/PageDashboard';
import HeaderDashboard from './components/Dashboard/HeaderDashboard';
import FooterDashboard from './components/Dashboard/FooterDashboard';

function App() {

  const path = [
    '/',
    '/login',
    '/registro',
    '/homedashboard'
  ]

  const navigate = useNavigate();

  const handleStartLoginRegistroClick = (i) => {
    navigate(path[i]);
  }

  return (

    <Routes>
      <Route
        path='/'
        element={
          <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-grow p-4 items-center'>
              <HomePage />
            </main>
            <Footer />
          </div>
        }
      ></Route>
      <Route
        path='/login'
        element={
          <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-grow p-4 items-center'>
              <LoginPage
                handleStartLoginRegistroClick={() => handleStartLoginRegistroClick(2)}
                handleStartHomeDashboardCLick={() => handleStartLoginRegistroClick(3)}
              />
            </main>
            <Footer />
          </div>
        }
      ></Route>
      <Route
        path='/registro'
        element={
          <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-grow p-4 items-center'>
              <Registro
                handleStartLoginRegistroClick={() => handleStartLoginRegistroClick(1)}
                handleStartHomeDashboardCLick={() => handleStartLoginRegistroClick(3)}
              />
            </main>
            <Footer />
          </div>
        }
      ></Route>

      <Route
        path='/homedashboard'
        element={
          <div className='min-h-screen flex flex-col'>
            <HeaderDashboard />
            <main className='flex-grow p-4 items-center'>
              <PageDashboard /> 
            </main>
            <FooterDashboard />
          </div>
        }
      ></Route>
    </Routes>

  )
}

export default App
