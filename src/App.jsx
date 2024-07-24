
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login';

function App() {

  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className=' flex-grow p-4 items-center'>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/login' element={ <LoginPage/>}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
