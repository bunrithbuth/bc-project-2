const React = require('react')
const Fragment = React.Fragment

const Content = props =>
  <Fragment>
    <div className="hero-full-screen">

      <div className="top-content-section">
        {/* <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text"><img src="http://placehold.it/75x30" alt="logo"/></li>
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
            </ul>
          </div>
        </div> */}
      </div>

      <div className="middle-content-section">
        <h1>Deeze Polls</h1>
        <button className="button large">Create a Poll!</button>
        <button className="button large">View Community Polls!</button>
      </div>

      <div className="bottom-content-section" data-magellan data-threshold="0">
        <a href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></a>
      </div>

    </div>

    <div id="main-content-section" data-magellan-target="main-content-section">
      <div className="grid-container">
        <h3>Our Recent Community Polls!</h3>
        <div className="masonry-css">
          <div className="masonry-css-item">
            <img src="https://placehold.it/300x300" className="" height="" width="" alt=""/>
          </div>  
        </div>
        {/* other shit gets appended by get from js stuff */}
      </div>    

    </div>

<div className="full-width-testimonial">
  <div className="full-width-testimonial-section">

    <div className="full-width-testimonial-icon text-center">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="41px" height="34px" viewBox="-235 240 41 34"  space="preserve">
          <path className="quote-path" d="M-231.3,260.4c0-5,1.3-8.8,3.7-11.7c2.4-2.8,6-4.6,10.5-5.5v5c-3.5,1-6,2.8-7.1,5.5c-0.7,1.4-0.9,2.8-0.8,4
            h8.1v12.8h-14.4V260.4z"/>
          <path className="quote-path" d="M-212,260.4c0-5,1.3-8.8,3.7-11.7c2.4-2.8,6-4.6,10.5-5.5v5c-3.5,1-6,2.8-7.1,5.5c-0.7,1.4-0.9,2.8-0.8,4h8.1
            v12.8H-212V260.4z"/>
      </svg>
    </div>

    <div className="full-width-testimonial-content">
      <h5 className="full-width-testimonial-text">YuR GuRL Had a DiFfiCuLt TimE ChoOsinG BetWeEn CoaChellA or SavInG MonEy bY GoiNg To oHiO wItH My FaMilY.
      </h5>
      <p className="full-width-testimonial-source">Bougee Britt</p>
      <span className="full-width-testimonial-source-context">Had a Miserable Time with the Fam</span>
    </div>

  </div>
</div>







  </Fragment>

module.exports = Content