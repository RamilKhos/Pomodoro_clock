export const Main = () => {
    return (
        <main className="main">

            <div className="main__timer">
                <div className="main__timer-title">Session</div>
                <div className="main__timer-time">
                    <span>21</span>
                    <span>:</span>
                    <span>00</span>
                    <span>:</span>
                    <span>00</span>
                </div>
                <div className="main__timer-btnWrapper">
                    <button type="button" className="main__timer-btn">
                        <i className="fa-solid fa-play"></i>
                        Start
                        </button>
                    <button type="button" className="main__timer-btn">
                        <i className="fa-solid fa-rotate"></i>
                        Reset</button>
                </div>
            </div>

            <div className="main__timer-settings">
                <div className="main__session-length">
                    <h3 className="main__session-length-title">Session Length</h3>
                    <div>
                        <input type="number"></input>
                    </div>
                </div>

                <div className="main__break-length">

                </div>
            </div>

        </main>
    )
}