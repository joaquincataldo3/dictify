import { useGlobalContext } from "../../../../hooks/context"
import {Howl, Howler} from 'howler'
import './word.css'

function Word() {

  const { data, modeActive } = useGlobalContext()

  const playSound = (src) => {
    const sound = new Howl({src})
    sound.play()
  }

  Howler.volume(1.0)

  return (
    <>
      {
        data.length > 0 &&
        <div className="word-content-container">
          <div className="word-container">

            {data.map((data, i) => {
              const { word } = data
              return <h2 key={i} className={`word ${modeActive === 'dark' && 'word-dark'}`}>{word}</h2>
            })}

            {data.map((data, i) => {
              const { text } = data.phonetics[1]
              return <h4 key={i} className="pronunciation">{text}</h4>
            })}
          </div>
          <div className="word-audio-container">
          {data.map((data, i) => {
              const { audio } = data.phonetics[0]
              return <i key={i} className='bx bx-play-circle' onClick={() => playSound(audio)}></i>
            })}
          
          </div>
        </div>
      }
    </>
  )
}

export default Word
