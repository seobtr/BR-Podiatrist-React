import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard41 from './feature-card41'

const FeaturesIcons = (props) => {
  return (
    <>
      <div className="features-icons-features-icons">
        <h1 className="features-icons-text">
          <span>Discover our</span>
          <br></br>
          <span>unique features</span>
        </h1>
        <div className="features-icons-separator"></div>
        <div className="features-icons-container">
          <div className="features-icons-container1">
            <FeatureCard41 rootClassName="rootClassName1"></FeatureCard41>
            <FeatureCard41 rootClassName="rootClassName4"></FeatureCard41>
            <FeatureCard41 rootClassName="rootClassName3"></FeatureCard41>
            <FeatureCard41 rootClassName="rootClassName2"></FeatureCard41>
          </div>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="features-icons-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .features-icons-features-icons {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .features-icons-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .features-icons-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .features-icons-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .features-icons-container1 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .features-icons-image {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          @media (max-width: 991px) {
            .features-icons-features-icons {
              align-items: center;
            }
            .features-icons-container {
              flex-direction: column;
            }
            .features-icons-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .features-icons-features-icons {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .features-icons-text {
              text-align: center;
            }
            .features-icons-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .features-icons-features-icons {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .features-icons-container1 {
              grid-template-columns: 1fr;
            }
            .features-icons-image {
              width: 250px;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

FeaturesIcons.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&ixlib=rb-1.2.1&h=1000',
}

FeaturesIcons.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeaturesIcons
