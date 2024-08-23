
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login';
import Registro from './pages/Registro';

import PageDashboard from './pages/PageDashboard';
// import HeaderDashboard from './components/Dashboard/HeaderDashboard';
// import FooterDashboard from './components/Dashboard/FooterDashboard';

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
            <main className='flex-grow p-5 items-center'>
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
            <main className='flex-grow p-5 items-center'>
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
            <main className='flex-grow p-5 items-center'>
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
          <div className='flex min-h-screen'>
            {/* <HeaderDashboard /> */}
              <PageDashboard /> 
            <main className='flex-grow p-4 ml-64'>
              {/* <div className="artboard artboard-horizontal phone-1 bg-black">568×320</div>
              <div className="artboard artboard-horizontal phone-3 bg-blue-700">736×414</div>
              <div className="artboard phone-1 bg-red-600">320×568</div> */}
              <div className="grid grid-cols-6 grid-rows-6 gap-4">
                <div className='col-span-2 row-span-2 rounded-3xl bg-slate-400 px-5 py-20'>01 - Numero de tarjeta</div>
                <div className='col-span-2 row-span-2 rounded-3xl bg-slate-400 px-5 py-10'>02 - Wallet (income - expenses)</div>
                <div className='col-span-2 row-span-3 rounded-3xl bg-slate-400 px-5 py-52'>03 - Transactions</div>
                <div className='col-span-2 row-span-4 rounded-3xl bg-slate-400 px-5 py-10'>04 - Monthly earnings (income)</div>
                <div className='col-span-2 row-span-2 rounded-3xl bg-slate-400 px-5 py-10'>05 - Earnings (goals, analytics graphics)</div>
                <div className='col-span-2 row-span-2 rounded-3xl bg-slate-400 px-5 py-10'>06 - Payable Accounts (receipts(salary, service, rent or mortgage), payables(electricity Bill, rent or mortgage))</div>
              </div>
            </main>
            {/* <FooterDashboard /> */}
          </div>
        }
      ></Route>
    </Routes>

  )
}

export default App
