
import { useRef } from 'react'
import whiteLogo from '../../../../assets/logos/jc_logo_white.png'
import blackLogo from '../../../../assets/logos/jc_logo_black.png'
import { useGlobalContext } from '../../../../hooks/context'
import './header.css'


function Header() {

  const { modes, activeMode, setActiveMode, letters, activeLetter, setActiveLetter } = useGlobalContext()

  const toggleMode = useRef(null)

  const handleToggleMode = () => {

    const btn = toggleMode.current

    btn.classList.toggle('right')

  }

  return (
    <header className='header'>
      <div className='header-content-container'>
        <div className='logo-container'>
          <img src={activeMode === modes.light ? blackLogo : whiteLogo} alt='jc_logo' />
        </div>
        <div className='header-second-column'>
          <div className='letter-type-container'>
            <p>{activeLetter}</p>
            <i className='bx bx-chevron-down'></i>
          </div>
          <div className='mode-container'>
              <div className='mode-btn'>
                  <div className='mode-toggle' onClick={handleToggleMode} useRef={toggleMode}></div>
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
