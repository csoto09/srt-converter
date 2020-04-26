import React from "react"
import Song from "./components/Song"
import Header from "./components/Header"
// import SongTitle from "./components/SongTitle"
import "./App.css"

function App() {
  return (
    <div>
      <Header value='Lyric Fixer-Upper Converter Thingy!!' />
      <Song />
    </div>
  )
}

export default App
