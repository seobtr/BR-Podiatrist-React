import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className="hero-hero">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="hero-image"
        />
        <div className="hero-container">
          <h1 className="H1-Desktop hero-text">{props.heading}</h1>
          <h2 className="hero-text1 H2-Desktop">{props.heading1}</h2>
          <span className="hero-text2 H5-Desktop">
            <span>
              &quot;Why suffer from foot pain when you could be dancing&quot;
            </span>
            <br></br>
          </span>
          <div className="hero-btn-group">
            <button className="hero-button button">{props.button}</button>
            <button className="hero-button1 button whiteButton">
              {props.button1}
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero-image {
            width: auto;
            object-fit: cover;
          }
          .hero-container {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .hero-text1 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .hero-text2 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-threeunits);
          }
          .hero-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .hero-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #3a6ba6;
          }
          .hero-button:hover {
            transform: scale(1.02);
          }
          .hero-button1 {
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .hero-hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .hero-image {
              order: revert;
              width: 80%;
            }
            .hero-container {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .hero-text {
              text-align: center;
            }
            .hero-text1 {
              text-align: center;
            }
            .hero-text2 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .hero-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .hero-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .hero-container {
              margin-bottom: var(--dl-space-space-unit);
            }
            .hero-text2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-btn-group {
              flex-direction: column;
            }
            .hero-button1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  button1: 'Gonzales',
  button: 'Baton Rouge',
  image_alt: 'image',
  image_src: '/playground_assets/image1907-jkwp-1200w.png',
  heading1: 'Podiatrist Serving Baton Rouge & Gonzales',
  heading: 'Footsteps Podiatry',
}

Hero.propTypes = {
  button1: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default Hero
