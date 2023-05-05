import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard31 from './feature-card31'

const Features = (props) => {
  return (
    <>
      <div className="features-features">
        <h1 className="features-text">
          <span>Explore our services</span>
          <br></br>
        </h1>
        <span className="features-text3">{props.text}</span>
        <div className="features-container">
          <FeatureCard31 rootClassName="rootClassName"></FeatureCard31>
          <FeatureCard31 rootClassName="rootClassName3"></FeatureCard31>
          <FeatureCard31 rootClassName="rootClassName1"></FeatureCard31>
        </div>
      </div>
      <style jsx>
        {`
          .features-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .features-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .features-text3 {
            color: var(--dl-color-gray-700);
            width: 70%;
            font-size: 1.15rem;
            text-align: center;
          }
          .features-container {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .features-text {
              text-align: center;
            }
            .features-text3 {
              text-align: center;
            }
            .features-container {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .features-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .features-text {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .features-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .features-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.​',
}

Features.propTypes = {
  text: PropTypes.string,
}

export default Features
