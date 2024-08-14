
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login';
import Registro from './pages/Registro';
import PageDashboard from './pages/PageDashboard';

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

    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className=' flex-grow p-4 items-center'>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          ></Route>
          <Route
            path='/login'
            element={
              <LoginPage
                handleStartLoginRegistroClick={() => handleStartLoginRegistroClick(2)}
                handleStartHomeDashboardCLick={() => handleStartLoginRegistroClick(3)}
              />
            }
          ></Route>
          <Route
            path='/registro'
            element={
              <Registro
                handleStartLoginRegistroClick={() => handleStartLoginRegistroClick(1)}
                handleStartHomeDashboardCLick={() => handleStartLoginRegistroClick(3)}
              />
            }
          ></Route>
          <Route
            path='/homedashboard'
            element={
              <PageDashboard />
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>

  )
}

export default App
