import { useGlobalContext } from "../../../../hooks/context"
import './form.css'

function Form() {

    const { word, changeWordValue } = useGlobalContext()

    return (

        <form>
            <input type="text" value={word} onChange={(e) => changeWordValue(e.target.value)} />
        </form>


    )
}

export default Form
