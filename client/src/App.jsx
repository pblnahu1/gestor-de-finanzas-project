import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import Registro from "./pages/Registro";

import PageDashboard from "./pages/PageDashboard";
import { Search } from "./components/Dashboard/Search";
import { NotifyIcon } from "./components/Dashboard/Notify";
import { NumeroTarjeta } from "./components/Dashboard/NumeroTarjeta";
import { Wallet } from "./components/Dashboard/Wallet";
import { Transactions } from "./components/Dashboard/Transactions";
import { PayableAccounts } from "./components/Dashboard/PayableAccounts";
import MonthlyEarnings from "./components/Dashboard/MonthlyEarnings";
import Earnings from "./components/Dashboard/Earnings";

function App() {
  const path = ["/", "/api/login", "/api/registro", "/api/homedashboard"];

  const navigate = useNavigate();

  const handleStartLoginRegistroClick = (i) => {
    navigate(path[i]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="items-center flex-grow p-5">
              <HomePage />
            </main>
            <Footer />
          </div>
        }
      ></Route>
      <Route
        path="/api/login"
        element={
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="items-center flex-grow p-5">
              <LoginPage
                handleStartLoginRegistroClick={() =>
                  handleStartLoginRegistroClick(2)
                }
              />
            </main>
            <Footer />
          </div>
        }
      ></Route>
      <Route
        path="/api/registro"
        element={
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="items-center flex-grow p-5">
              <Registro
                handleStartLoginRegistroClick={() =>
                  handleStartLoginRegistroClick(1)
                }
              />
            </main>
            <Footer />
          </div>
        }
      ></Route>

      <Route
        path="/api/homedashboard"
        element={
          <div className="flex min-h-screen">
            

            <main className="flex-grow p-4 lg:pl-72 font-jakarta">
              <div className="flex flex-row items-center justify-between mb-4">
                <div className="lg:block lg:fixed md:absolute lg:top-0 md:top-[8px] left-0 h-full z-10">
                  <PageDashboard />
                </div>
                <Search />
                <NotifyIcon />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                <NumeroTarjeta />
                <Wallet />
                <PayableAccounts />
                <Transactions />
                <MonthlyEarnings />
                <Earnings />
              </div>
            </main>
            
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
