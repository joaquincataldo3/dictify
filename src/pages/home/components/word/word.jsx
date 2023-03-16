import { useGlobalContext } from "../../../../hooks/context"
import { Howl, Howler } from 'howler'
import LoadingSpinner from "../loading-spinner/loadingSpinner"

import './word.css'

function Word() {

  const { data, modeActive, loading, fetchError } = useGlobalContext()

  const playSound = (src) => {
    const sound = new Howl({ src })
    sound.play()
  }

  Howler.volume(1.0)

  return (
    <>

      {
        loading && <LoadingSpinner />
      }




      {
        data.length > 0 &&
        <div className="word-content-container">

          <div className="word-container">

            {data.map((data, i) => {
              const { word } = data
              return <h2 key={i} className='word'>{word}</h2>
            })}

            {data.map((data, i) => {
              
              return (
              data.phonetics.map((phonetic, i) => {
                  if (data.phonetics.length <= 1 && i === 0) {
                    
                    const { text } = phonetic
                    return <h4 key={text} className="pronunciation">{text}</h4>
                  } else if (data.phonetics.length >= 2 && i === 1) {
                   
                    const { text } = phonetic
                    return <h4 key={text} className="pronunciation">{text}</h4>
                  }
                  
                }) 
              )

            })}
          </div>

          <div className="word-audio-container">
            {data.map((data, i) => {
              return (
                data.phonetics.map((phonetic, i) => {
                  if (i === 0) {
                    const { audio } = phonetic
                    return <i key={audio} className='bx bx-play-circle' onClick={() => playSound(audio)}></i>
                  }

                })
              )
            })}

          </div>
        </div>
      }
    </>
  )
}

export default Word
