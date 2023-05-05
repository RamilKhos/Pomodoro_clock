import { Button, InputNumber } from "antd"
import { useEffect, useState } from "react"

export const Main = () => {
    const [ sessionTime, setSessionTime ] = useState<any>(0)
    const [ breakTime, setBreakTime ] = useState<any>(0)

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const formatTime = (number: number) => {
        return number < 10 ? '0' + number : number
    }

    useEffect(() => {
        if (sessionTime) {
            let hours = Math.floor(sessionTime / 60)
            let minutes = sessionTime - (hours * 60)
            setHours(hours)
            setMinutes(minutes)
        } else {
            setMinutes(0)
        }
    }, [sessionTime])


    return (
        <main className="main">

            <div className="main__timer">
                <div className="main__timer-title">Session</div>
                <div className="main__timer-time">
                    <span>{formatTime(hours)}</span>
                    <span>:</span>
                    <span>{formatTime(minutes)}</span>
                </div>
                <div className="main__timer-btnWrapper">
                    <Button className="main__timer-btn">
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
                    <h3 className="main__session-length-title">Session Length</h3>
                    <InputNumber onChange={(e) => setSessionTime(e)} style={{ width: '60%' }} placeholder="Enter minutes"/>
                </div>

                <div className="main__break-length">
                    <h3 className="main__break-length-title">Break Length</h3>
                    <InputNumber onChange={(e) => setBreakTime(e)} style={{ width: '60%' }} placeholder="Enter minutes"/>
                </div>
            </div>

        </main>
    )
}