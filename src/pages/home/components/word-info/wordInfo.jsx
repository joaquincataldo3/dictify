import { useGlobalContext } from "../../../../hooks/context"
import LoadingSpinner from "../loading-spinner/loadingSpinner"
import './wordInfo.css'

function wordInfo() {

    const { data, loading, modeActive } = useGlobalContext()

    return (
        <>

            {
                loading && <LoadingSpinner />
            }

            {
                data.length > 0 &&
                data.map(data => {
                    return (
                        data.meanings.map((meaning, i) => {
                            const { partOfSpeech } = meaning
                            return (
                                <div className="word-info-container" key={i}>
                                    <div className="info-box">
                                        <div className="info-title">
                                            <h3 className={`${modeActive === 'dark' && 'word-dark'}`}>{partOfSpeech}</h3>
                                            <div className="line"></div>
                                        </div>
                                        <div className="info-description">
                                            <p className="example">Example</p>
                                            <ul type='disc' className="definition-list">
                                                {
                                                    meaning.definitions.map((item, i) => {
                                                        const { definition } = item
                                                        return (
                                                            <li key={i} className={`definition ${modeActive === 'dark' && 'word-dark'}`}>{definition}</li>
                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            )

                        })
                    )
                })

            }
        </>
    )
}

export default wordInfo
