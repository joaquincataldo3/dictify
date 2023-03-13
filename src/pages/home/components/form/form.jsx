import { useRef } from "react"
import { useGlobalContext } from "../../../../hooks/context"
import './form.css'

function Form() {

    const { word, changeWordValue, fetchApi, modeActive } = useGlobalContext()
    const searchBox = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!word){
            const box = searchBox.current
            box.classList.add('input-error')
        } else {
            const box = searchBox.current
            if(box.classList.contains('input-error')){
                box.classList.remove('input-error')
            }
            fetchApi(word)
        }
    }

    return (

        <form onSubmit={handleFormSubmit} >
            <div className={`input-magnifying-container ${modeActive === 'dark' && 'input-dark-mode'}`} ref={searchBox}>
                <input type="text" value={word}  onChange={(e) =>
                    changeWordValue(e.target.value)} /><i className='bx bx-search-alt-2' onClick={handleFormSubmit}></i>
            </div>

        </form>


    )
}

export default Form
