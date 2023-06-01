import React, { useState, useRef } from 'react'

const StopwatchApp: React.FC = () => {
  const [timer, setTimer] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [laps, setLaps] = useState<number[]>([])
  const intervalRef = useRef<number | null>(null)

  const formatTime = (time: number): string => {
    const minutes: string = Math.floor(time / 6000)
      .toString()
      .padStart(2, '0')
    const seconds: string = Math.floor((time / 100) % 60)
      .toString()
      .padStart(2, '0')
    const milliseconds: string = (time % 100).toString().padStart(2, '0')
    return `${minutes}:${seconds}.${milliseconds}`
  }

  const handleStartStop = (): void => {
    setIsActive((prev) => !prev)
    console.log({ isActive })
    if (!isActive) {
      intervalRef.current = window.setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 10)
    } else {
      window.clearInterval(intervalRef.current!)
    }
  }

  const handleReset = (): void => {
    setIsActive(false)
    setTimer(0)
    setLaps([])
    window.clearInterval(intervalRef.current!)
  }

  const handleLap = (): void => {
    setLaps((prevLaps) => [...prevLaps, timer])
  }

  return (
    <div>
      <div>{formatTime(timer)}</div>
      <button onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLap}>Lap</button>
      {laps.length > 0 && (
        <div>
          <h2>Lap Times</h2>
          <ul>
            {laps.map((lapTime, index) => (
              <li key={index}>{formatTime(lapTime)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default StopwatchApp
