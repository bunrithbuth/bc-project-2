const React = require('react')
const Fragment = React.Fragment

const Multiple = (props) =>

    <Fragment>
        <div id="cardContainer" className="grid-x grid-padding-x">
            <div className="medium-12 cell">
                <div class="card">
                        <h3>{props.poll.name}</h3>
                    <div class="card-divider">
                        <div className="multiple">
                            <input className="star star-5" id="star-5" type="radio" name="star" />
                            <label className="star star-5" for="star-5">{props.poll.pollOptions[0].name}</label>
                            <input className="star star-5" id="star-4" type="radio" name="star" />
                            <label className="star star-5" for="star-4">{props.poll.pollOptions[1].name}</label>
                            <input className="star star-5" id="star-3" type="radio" name="star" />
                            <label className="star star-5" for="star-3">{props.poll.pollOptions[2].name}</label>
                            <input className="star star-5" id="star-2" type="radio" name="star" />
                            <label className="star star-5" for="star-2">{props.poll.pollOptions[3].name}</label>
                            <input className="star star-5" id="star-1" type="radio" name="star" />
                            <label className="star star-5" for="star-1">{props.poll.pollOptions[4].name}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>

module.exports = Multiple