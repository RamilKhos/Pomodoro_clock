import { Button, InputNumber } from "antd"
import { useEffect, useState } from "react"

export const Main = () => {
    const [ sessionTime, setSessionTime ] = useState<any>(0)
    
    let hours = Math.floor(sessionTime / 60)
    let minutes = Math.floor(sessionTime - (hours * 60))
    let seconds = sessionTime - ((hours * 60) + (minutes ))
    
    const formatTime = (number: number) => {
        return number < 10 ? '0' + number : number
    }
    const timer = setInterval(() => { setSessionTime(sessionTime - 1) }, 60000)
    const btnStartHandler = () => {
        return timer
    }

    useEffect(() => {
        if (sessionTime === 0) clearInterval(timer)
        return () => { clearInterval(timer) }
    }, [sessionTime])


    return (
        <main className="main">
            <div className="main__timer">

                <div className="main__timer-btnWrapper">
                    <Button style={{backgroundColor: '#FAD6B1'}} size="large">
                        Work time
                    </Button>
                    <Button style={{backgroundColor: '#FAD6B1'}} size="large">
                        Break time
                    </Button>
                </div>

                <div className="main__timer-time">
                    <span>{formatTime(hours)}</span>
                    <span>:</span>
                    <span>{formatTime(minutes)}</span>
                </div>
                
                <div className="main__timer-btnWrapper">
                    <Button className="main__timer-btn" onClick={btnStartHandler}>
                        <i className="fa-solid fa-play"></i>
                        Start
                    </Button>
                    <Button className="main__timer-btn">
                        <i className="fa-solid fa-rotate"></i>
                        Reset
                    </Button>
                </div>
            </div>

            <div className="main__timer-settings">
                <div className="main__session-length">
                    <h3 className="main__session-length-title">Session length</h3>
                    <InputNumber onChange={(e) => setSessionTime(e)} style={{ width: '60%' }} placeholder="Enter minutes"/>
                </div>
            </div>

        </main>
    )
}