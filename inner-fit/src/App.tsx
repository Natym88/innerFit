import './App.css'
import { Header } from './components/pages/Header'
import { Navbar } from './components/pages/Navbar'
import LanguageProvider from './context/LanguageContext'

function App() {

  return (
    <LanguageProvider>
      <Header />
      <Navbar />
    </LanguageProvider>
  )
}

export default App
