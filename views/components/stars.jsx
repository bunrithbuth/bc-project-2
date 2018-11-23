const React = require('react')
const Fragment = React.Fragment


const Stars = (props) =>

    <Fragment>
        <div id="cardContainer" className="grid-x grid-padding-x">
            
            <div className="medium-12 cell">
                <div class="card-divider">
                    <div className="star">
                        <input className="star star-5" id="star-5" type="radio" name="star" />
                        <label className="star star-5" htmlFor="star-5"></label>
                        <input className="star star-5" id="star-4" type="radio" name="star" />
                        <label className="star star-5" htmlFor="star-4"></label>
                        <input className="star star-5" id="star-3" type="radio" name="star" />
                        <label className="star star-5" htmlFor="star-3"></label>
                        <input className="star star-5" id="star-2" type="radio" name="star" />
                        <label className="star star-5" htmlFor="star-2"></label>
                        <input className="star star-5" id="star-1" type="radio" name="star" />
                        <label className="star star-5" htmlFor="star-1"></label>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>

module.exports = Stars