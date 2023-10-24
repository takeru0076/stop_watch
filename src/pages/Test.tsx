import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Timer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 0 10px #000;
  margin: 0 auto;
`

const Button = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  background-color: #000;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 0 10px #000;
`

const Test = () => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
  const [lapTime, setLapTime] = useState<number>(0)
  const [lapCount, setLapCount] = useState<number>(0)

  const handleStart = () => {
    if (timerId) return
    const id: NodeJS.Timeout = setInterval(() => {
      setTime((prevTime) => prevTime + 10)
      if (timerId) setLapTime((prevLapTime) => prevLapTime + 10)
    }, 10)
    setTimerId(id)
  }

  const handleStop = () => {
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  const handleReset = () => {
    setTime(0)
    setLapTime(0)
    setLapCount(0)
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  const handleLap = () => {
    setLapTime(0)
    setLapCount((prevLapCount) => prevLapCount + 1)
  }

  return (
    <Timer>
      <div style={{ textAlign: 'center' }}>
        {lapCount} 回目
      </div>
      <div style={{ textAlign: 'center' }}>
        {lapTime / 1000} s
      </div>
      <div style={{ textAlign: 'center' }}>
        {time / 1000} s
      </div>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
      <Button onClick={handleLap}>Lap</Button>
    </Timer>
  )
}

export default Test
