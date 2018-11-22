const React = require('react')
const Fragment = React.Fragment

const NewPoll = props =>
  <Fragment>
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <li id="bookTitle" data-booktitle={props.poll.name} className="collection-item"><i class="material-icons">book</i>  Title : {props.poll.name}</li>

          </div>
          <div className="stars">
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

        </div>
      </div>
    </div>
  </Fragment>

module.exports = NewPoll