const React = require('react')

const StarRating = () =>
    <form>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="medium-6 cell">
              <label>
                <input className="input-group-rounded" type="text" placeholder="Input your statement here" />
              </label>
            </div>
          </div>
          <div className="stars">
            <input disabled className="star star-5" id="star-5" type="radio" name="star" />
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
          <div>
            <p>Make it private?</p>
            <div className="switch large">
              <input className="switch-input" id="yes-no" type="checkbox" name="exampleSwitch" />
              <label className="switch-paddle" htmlFor="yes-no">
                <span className="switch-active" aria-hidden="true">Yes</span>
                <span className="switch-inactive" aria-hidden="true">No</span>
              </label>
            </div>
          </div>
        </div>
      </form>

module.exports = StarRating