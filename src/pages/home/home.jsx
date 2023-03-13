import { useRef } from "react"
import Header from "./components/header/header"
import Form from "./components/form/form"
import Word from './components/word/word'
import WordInfo from "./components/word-info/wordInfo"
import { useGlobalContext } from "../../hooks/context"
import './home.css'

function Home() {


  const {loading} = useGlobalContext()
  const wordWrapper = useRef(null)

  return (
    <>

      <Header />

      <main>

        <Form />

        <div className={`word-wrapper ${!loading && 'word-wrapper-active'}`} ref={wordWrapper}>
          <Word />

          <WordInfo />
        </div>


      </main>

    </>

  )
}

export default Home
