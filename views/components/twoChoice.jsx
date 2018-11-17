const React = require("react")


const Form1 = () =>
<div>

// ~~~~ input circle ~~~~~
    <div> 
        <div className="grid-x grid-padding-x">
            <div className="medium-4 cell">
                <label>
                    <input id="statement" className="input-group-rounded" type="text" placeholder="Input your statement here" />
                </label>
            </div>
            <div className="medium-4 cell">
                <label>
                    <input id="statement" className="input-group-rounded" type="text" placeholder="Input your statement here number dos" />
                </label>
            </div>
        </div>
    </div>
// ~~~~~~~~~~~~~~~~~~~~~~~

        <div>
            <p>Make it private?</p>
            <div className="switch large">
                <input id="isPrivate" className="switch-input" type="checkbox" name="Switch" />
                <label className="switch-paddle" htmlFor="isPrivate">
                    <span className="switch-active" aria-hidden="true">Yes</span>
                    <span className="switch-inactive" aria-hidden="true">No</span>
                </label>
            </div>
        </div>
        <button id="submit" data-type="star" type="submit" className="success button">Create Poll</button>
</div>        

module.exports = Form1 