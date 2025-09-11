import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/home'

function App() {

  return (
    <div className='container'>
      <Header />
      <div className="mainContainer">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
