import Song from "./components/Song"
import Header from "./components/Header"
import Container from "./layout/Container"
import Footer from "./components/Footer"

function App() {
  return (
    <section className='section'>
      <div className='columns is-centered'>
        <div className='column is-half-desktop is-one-third-widescreen is-half-tablet'>
          <Container>
            <Header value='Text to SRT Converter' />
            <Song />
          </Container>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default App
