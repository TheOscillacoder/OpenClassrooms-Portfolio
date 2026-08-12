import './app.scss'
import HeaderMenu from './components/Header/Header.jsx'
import FooterContent from './components/Footer/Footer.jsx'


import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <HeaderMenu />
      <main>
        <Outlet />
      </main>
      <FooterContent />
    </>
  )
}

export default App
