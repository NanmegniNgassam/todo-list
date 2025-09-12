import { Provider } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/home'
import { store } from './store/store'

function App() {

  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <div className="mainContainer">
          <Home />
        </div>
        <Footer />
      </div>
    </Provider>

  )
}

export default App
