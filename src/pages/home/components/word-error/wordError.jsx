import { useGlobalContext } from "../../../../hooks/context"
import './wordError.css'

function wordError() {

    const {wordError} = useGlobalContext()

  return (
    <div className="error-container">
      <h2>Hmmm, we didn't find anything for "{wordError}"</h2>
      <h3>Try again !</h3>
    </div>
  )
}

export default wordError
