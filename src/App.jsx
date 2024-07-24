
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import ContentHero from './components/ContentHero'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className=' flex-grow p-4'>
        <Carousel />
        <ContentHero />
      </main>
      <Footer />
    </div>
  )
}

export default App
