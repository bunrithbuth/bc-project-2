const React = require('react')

const PollsForm = () =>
    <form id="pollsForm">
        <div className="grid-container full fluid">
          <div className="grid-x grid-padding-x">
            <div className="medium-2 cell">
              <div className="avatarContainer text-right">
                <img className="avatar" src="" alt="profile avatar" />
              </div>
            </div>
            <div className="medium-9 cell">
                <input id="statement" className="input-group-rounded" type="text" placeholder="Input your statement here" />
              <div className="expanded button-group align-middle">
                <a id="multipleForm" className="button pollOptions">Multiple Options</a>
                <a id="twoChoicesForm" className="button pollOptions">Two Options</a>
                <a id="starForm" className="button pollOptions">Star Rating</a>
              </div>
            </div>
          </div>
        <div className="grid-x grid-padding-x full fluid align-center">
          <div className="stars medium-10 cell text-center">
            <input className="star star-5" id="star-5" type="radio" name="star" />
            <label className="star star-5" htmlFor="star-5"></label>
            <input className="star star-4" id="star-4" type="radio" name="star" />
            <label className="star star-4" htmlFor="star-4"></label>
            <input className="star star-3" id="star-3" type="radio" name="star" />
            <label className="star star-3" htmlFor="star-3"></label>
            <input className="star star-2" id="star-2" type="radio" name="star" />
            <label className="star star-2" htmlFor="star-2"></label>
            <input className="star star-1" id="star-1" type="radio" name="star" />
            <label className="star star-1" htmlFor="star-1"></label>
          </div>
          <div id="multiple" className="medium-10 cell">
          <div id="multipleInput">
            <input id="option1" className="input-group-rounded options" type="text" placeholder="Option 1" />
            <input id="option2" className="input-group-rounded options" type="text" placeholder="Option 2" />
            <input id="option3" className="input-group-rounded options" type="text" placeholder="Option 3" />
          </div>
          <button id="add" className="button"><i className="fas fa-plus"></i> Add more options</button>
          </div>
          {/* Need to fix this */}
          <div id="twoChoices" className="medium-10 cell">
          <input id="a" className="input-group-rounded" type="text" placeholder="Option 1" />
          <input id="b" className="input-group-rounded" type="text" placeholder="Option 2" />
          </div>
          </div>
          <div className="grid-x grid-padding-x full fluid align-left">
          <div className="medium-1 cell"></div>
          <div className="medium-2 cell text-left middle">
            <p>Make it private?</p>
            </div>
            <div className="medium-1 cell text-left switch large">
              <input id="isPrivate" className="switch-input" type="checkbox" name="Switch" />
              <label className="switch-paddle" htmlFor="isPrivate">
                <span className="switch-active" aria-hidden="true">Yes</span>
                <span className="switch-inactive" aria-hidden="true">No</span>
              </label>
            </div>
          </div>
        <div className="grid-x grid-padding-x align-left">
            <div className="medium-1 cell"></div>
            <div className="medium-1 cell">
              <label htmlFor="time" className="expireLabel text-right middle">Expire In: </label>
            </div>
            <div className="medium-3 cell">
                <input id="time" type="number" min="1" />
            </div>
            <div className="medium-3 cell">
                <select id="duration">
                    <option value="minutes">Minutes</option>
                    <option value="hours">Hours</option>
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                </select>
            </div>
        </div>
        <div className="grid-x grid-padding-x">
        <div className="medium-1 cell"></div>
        <div className="medium-2 cell text-center">
        <button id="submit" type="submit" className="createButton button">Create Poll</button>
        </div>
        </div>
        </div>
      </form>

module.exports = PollsForm