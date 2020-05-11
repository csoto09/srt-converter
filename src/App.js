import React from "react"
import Song from "./components/Song"
import Header from "./components/Header"
import Container from "./layout/Container"

function App() {
  return (
    <section className='section'>
      <div className='columns is-centered'>
        <div className='column is-half-desktop is-one-third-widescreen is-half-tablet'>
          <Container>
            <Header value='Lyric Fixer-Upper Converter Thingy!!' />
            <Song />
          </Container>
        </div>
      </div>
    </section>
  )
}

export default App
