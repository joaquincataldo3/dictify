import { useRef } from "react"
import { useGlobalContext } from "../../../../hooks/context"
import './form.css'

function Form() {

    const { word, changeWordValue, fetchApi, modeActive, storageValues } = useGlobalContext()
    const searchBox = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!word) {
            const box = searchBox.current
            box.classList.add('input-error')
        } else {
            const box = searchBox.current
            if (box.classList.contains('input-error')) {
                box.classList.remove('input-error')
            }

            fetchApi(word)
        }
    }

    return (

        <div>

            <form onSubmit={handleFormSubmit} >

                <div className={`input-magnifying-container ${modeActive === 'dark' && 'input-dark-mode'}`} ref={searchBox}>
                    <input type="text" value={word} onChange={(e) =>
                        changeWordValue(e.target.value)} /><i className='bx bx-search-alt-2' onClick={handleFormSubmit}></i>
                </div>


            </form>


            <div className="latest-words-list-container">
                <h4>Recent searches</h4>
                <ul type='none' className="latest-words-list">
                    {
                        storageValues.length > 0 &&
                        storageValues.map(item => {
                            const { value } = item
                            return (
                                <li key={value} className="storage-value-item">{value}</li>
                            )

                        })
                    }
                </ul>
            </div>

        </div>



    )
}

export default Form
