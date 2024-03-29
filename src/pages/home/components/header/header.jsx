
import { useRef, useEffect, useState } from 'react'
import whiteLogo from '../../../../assets/logos/jc_logo_white.png'
import blackLogo from '../../../../assets/logos/jc_logo_black.png'
import { useGlobalContext } from '../../../../hooks/context'
import './header.css'


function Header() {

  const { modes, modeActive, letters, activeLetter, changeActiveLetter, changeActiveMode } = useGlobalContext()

  const toggleMode = useRef(null)
  const toggleModeContainer = useRef(null)
  const letterList = useRef(null)

  const handleToggleMode = () => {
    const btn = toggleMode.current
    const btnContainer = toggleModeContainer.current
    btn.classList.toggle('right')
    btnContainer.classList.toggle('active')
    changeActiveMode(modeActive)
  }

  const handleToggleLetterListMenu = () => {
    const list = letterList.current
    list.classList.toggle('list-active')
  }


  return (
    <header className={`header ${activeLetter === 'Sans Serif' && 'sans-serif-active'}`}>
      <div className='header-content-container'>
        <div className='logo-container'>
          <img src={modeActive === 'light' ? blackLogo : whiteLogo} alt='jc_logo' />
        </div>
        <div className='header-second-column'>
          <div className='letter-type-container'>
            <div className='active-letter-container' onClick={handleToggleLetterListMenu}>
              <p className={`${modeActive === 'dark' ? 'word-dark' : 'word-light'}`}>{activeLetter}</p>
              <i className={`bx bx-chevron-down ${modeActive === 'dark' ? 'word-dark' : 'word-light'}`}></i>
            </div>
            <div className='letter-list-container' ref={letterList}>
              <ul className='letter-list'>
                {
                  letters.map((letter, i) => {
                    if (letter !== activeLetter) {
                      const letterId = letter
                      return <p className={`letter-option ${modeActive === 'dark' ? 'word-dark' : 'word-light'}`} onClick={() => changeActiveLetter(letterId, letterList)} id={letterId} key={i}>{letter}</p>
                    }

                  })
                }
              </ul>

            </div>
          </div>
          <div className='mode-container' >
            <div className='mode-btn' ref={toggleModeContainer} onClick={handleToggleMode}>
              <div className='mode-toggle'  ref={toggleMode}></div>
            </div>
              <i className={`bx bx-moon ${modeActive === 'dark' && 'moon-dark'}`}></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
