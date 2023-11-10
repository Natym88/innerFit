import './App.css'
import { Home } from './components/pages/Home'
import LanguageProvider from './context/LanguageContext'

function App() {

  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  )
}

export default App
