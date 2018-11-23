const React = require('react')



const TwoChoices = (props) =>


        <div id="cardContainer" className="grid-x grid-padding-x">
            <div className="medium-12 cell">
                <div className="card">
                    <div class="card-divider">
                        <div className="twoChoices">
                            <input className="star star-5" id="twoChoices1" type="radio" name="star" />
                            <label className="star star-5" htmlFor="twoChoices1">{props.poll.pollOptions[0].name}</label>
                            <input className="star star-5" id="twoChoices2" type="radio" name="star" />
                            <label className="star star-5" htmlFor="twoChoices2">{props.poll.pollOptions[1].name}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>


module.exports = TwoChoices