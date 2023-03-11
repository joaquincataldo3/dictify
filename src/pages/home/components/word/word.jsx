import { useGlobalContext } from "../../../../hooks/context"

function Word() {

  const { data } = useGlobalContext()

  return (

    <div className="word-content-container">
      {
        data.length > 0 &&
        <div className="word-container">

          {data.map(data => {
            const { word } = data
            return <h2>{word}</h2>
          })}

          {data.map(data => {
            const {text} = data.phonetics[1]
           return <h4>{text}</h4> 
          })}
        </div>
      }
    </div>

  )
}

export default Word
