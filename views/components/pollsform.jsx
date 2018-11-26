const React = require('react')

const PollsForm = () =>
    <form id="pollsForm">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="medium-1 cell">
              <div className="avatarContainer text-right">
                <img className="avatar" src="" alt="profile avatar" />
              </div>
            </div>
            <div className="medium-10 cell">
                <input required required id="statement" className="input-group-rounded" type="text" placeholder="Name your poll!" />
              <div className="expanded button-group align-middle">
                <a id="multipleForm" className="button pollOptions">Multiple Options</a>
                <a id="twoChoicesForm" className="button pollOptions">Two Options</a>
                <a id="starForm" className="button pollOptions">Star Rating</a>
              </div>
            </div>
          </div>
        <div className="grid-x grid-padding-x full fluid align-center">
          <div className="stars medium-10 cell text-center">
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          </div>
          <div id="multiple" className="medium-10 cell">
          <div id="multipleInput">
            <input required id="option1" className="input-group-rounded options" type="text" placeholder="Option 1" />
            <input required id="option2" className="input-group-rounded options" type="text" placeholder="Option 2" />
            <input required id="option3" className="input-group-rounded options" type="text" placeholder="Option 3" />
          </div>
          <button id="add" className="button pollOptions"><i className="fas fa-plus"></i> Add more options</button>
          <button id="remove" className="button pollOptions"><i className="fas fa-minus"></i> Remove options</button>
          </div>
          {/* Need to fix this */}
          <div id="twoChoices" className="medium-10 cell">
          <input required id="a" className="input-group-rounded" type="text" placeholder="Option 1" />
          <input required id="b" className="input-group-rounded" type="text" placeholder="Option 2" />
          </div>
          </div>
          <div className="grid-x grid-padding-x">
          <div className="medium-1 cell"></div>
          <div className="medium-3 cell text-left">
            <p>Make it private?</p>
          </div>
          </div>
          <div className="grid-x grid-padding-x">
          <div className="medium-1 cell"></div>

            <div className="medium-1 cell text-left switch large">
              <input required id="isPrivate" className="switch-input" type="checkbox" name="Switch" />
              <label className="switch-paddle" htmlFor="isPrivate">
                <span className="switch-active" aria-hidden="true">Yes</span>
                <span className="switch-inactive" aria-hidden="true">No</span>
              </label>
            </div>
          </div>
        <div className="grid-x grid-padding-x ">
            <div className="medium-1 cell"></div>
            <div className="medium-1 cell">
              <label htmlFor="time" className="expireLabel text-left middle">Expire In: </label>
            </div>
            <div className="medium-3 cell">
                <input required id="time" type="number" min="1" />
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
        <div className="medium-2 cell text-left">
        <button id="submit" type="submit" className="createButton button">Create Poll</button>
        </div>
        </div>
        </div>
      </form>

module.exports = PollsForm