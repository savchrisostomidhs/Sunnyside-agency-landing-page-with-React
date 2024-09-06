import Header from "./Components/Header.jsx"
import Main from "./Components/Main.jsx"
import Clients from './Components/Clients.jsx'
import Images from './Components/Images.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Clients />
        <Images />
        <Footer />
      </div>
    </>
  )
}

export default App
