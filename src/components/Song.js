import React, { useState } from "react"
import styled, { css } from "styled-components"
import Container from "./Container"
import moment from "moment"

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 auto;
  padding: 0.25em 1em;
  display: block;
  font-size: 1.25em;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

const Input = () => {
  const [input, setInput] = useState("")
  const [title, setTitle] = useState("")

  const convertFile = (str) => {
    let line = 1
    let x = 0
    let xStamp = "00:00:00"

    let y = 5
    let yStamp = "00:00:05"

    let timeStamp = `${xStamp}.001 --> ${yStamp}.000`
    const makeTimestamp = (num) => {
      let numTime = new Date(null)
      numTime.setSeconds(num)
      let numStamp = moment(numTime).utc().format("HH:mm:ss")
      return numStamp
    }
    const updateTimeStamp = (x, y) => {
      return (timeStamp = `${xStamp}.001 --> ${yStamp}.000`)
    }
    let output = ""

    for (let i = 0; i < str.length; i++) {
      if (output === "") {
        output += line++ + "\r\n" + timeStamp + "\r\n"
        xStamp = makeTimestamp((x += 5))
        yStamp = makeTimestamp((y += 5))
        updateTimeStamp(x, y)
      }
      if (str[i] === "\n" || str[i] === "\r") {
        output += "\r\n\n" + line++ + "\r\n" + timeStamp + "\r\n"
        xStamp = makeTimestamp((x += 5))
        yStamp = makeTimestamp((y += 5))
        updateTimeStamp(x, y)
      } else {
        output += str[i]
      }
    }
    return output
  }

  const downloadFile = (e) => {
    e.preventDefault()
    const element = document.createElement("a")
    const file = new Blob([convertFile(input)], {
      type: "text/plain;charset=utf-8",
    })
    console.log(file)
    element.href = URL.createObjectURL(file)
    element.download = `${title}.srt`
    document.body.appendChild(element)
    element.click()
  }

  return (
    <form onSubmit={downloadFile}>
      <Container>
        <label htmlFor='title'>Enter song name here:</label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Container>
      <Container>
        <textarea
          rows='30'
          cols='50'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Container>
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default Input
