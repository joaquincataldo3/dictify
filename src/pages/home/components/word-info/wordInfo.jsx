import { useGlobalContext } from "../../../../hooks/context"
import LoadingSpinner from "../loading-spinner/loadingSpinner"
import './wordInfo.css'

function wordInfo() {

    const { data, loading } = useGlobalContext()

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
                                            <h3>{partOfSpeech}</h3>
                                            <div className="line"></div>
                                        </div>
                                        <div className="info-description">
                                            <p>Example</p>
                                            <ul  type='none'>
                                                {
                                                    meaning.definitions.map((item, i) => {
                                                        const { definition } = item
                                                        return (
                                                            <li key={i}>{definition}</li>
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
