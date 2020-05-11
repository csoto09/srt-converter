import React, { useState } from "react"
import moment from "moment"

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
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label htmlFor='title' className='label'>
            File Name:
          </label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='input'
                placeholder='Enter file name or song title here'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='textarea has-fixed-size'
            rows='20'
          />
        </div>
      </div>

      <div className='buttons is-centered'>
        <input
          type='submit'
          value='Submit'
          className='button is-success is-rounded is-centered'
        />
      </div>
    </form>
  )
}

export default Input
