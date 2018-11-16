const React = require('react')
const Fragment = React.Fragment

const MCForms = props =>

    <Fragment>
        <form>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="small-2 cell">
                        <label htmlFor="middle-label" className="text-right middle">Enter your question</label>   
                    </div>
                    <div className="small-10 cell">
                        <input type="text" id="mcQuestion middle-label" placeholder="What is 2pac's greatest song?" />
                    </div>
                    <div className="small-3 cell">
                        <label htmlFor="middle-label" className="text-right middle">A</label>
                        <label htmlFor="middle-label" className="text-right middle">B</label>
                        <label htmlFor="middle-label" className="text-right middle">C</label>
                        <label htmlFor="middle-label" className="text-right middle">D</label>
                    </div>
                    <div className="small-9 cell">
                        <input type="text" id="mcAnswerA middle-label" placeholder="Dear Mama" />
                        <input type="text" id="mcAnswerB middle-label" placeholder="Hit Em Up" />
                        <input type="text" id="mcAnswerC middle-label" placeholder="I Ain't Mad At Cha" />
                        <input type="text" id="mcAnswerD middle-label" placeholder="California Love" />
                    </div>
                </div>
            </div>
        </form>
        <div className="grid-container">
            <div className="grid-x grid-padding-x">
                <div className="small-5 cell">
                    <button type="button" id="goLivePoll" className="success button">Finalize Poll</button>
                </div>
            </div>
        </div>
    </Fragment>

module.exports = MCForms