import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard41 from './feature-card41'

const FeatureSingle = (props) => {
  return (
    <>
      <div className="feature-single-feature-single">
        <h1 className="feature-single-text">
          <span>Discover our</span>
          <br></br>
          <span>unique features</span>
        </h1>
        <div className="feature-single-separator"></div>
        <div className="feature-single-container">
          <div className="feature-single-container1">
            <FeatureCard41 rootClassName="rootClassName5"></FeatureCard41>
          </div>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="feature-single-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .feature-single-feature-single {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .feature-single-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-single-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .feature-single-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .feature-single-container1 {
            display: grid;
            grid-template-columns: 1fr;
          }
          .feature-single-image {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          @media (max-width: 991px) {
            .feature-single-feature-single {
              align-items: center;
            }
            .feature-single-container {
              flex-direction: column;
            }
            .feature-single-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .feature-single-feature-single {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .feature-single-text {
              text-align: center;
            }
            .feature-single-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-single-feature-single {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .feature-single-container1 {
              grid-template-columns: 1fr;
            }
            .feature-single-image {
              width: 250px;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureSingle.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&ixlib=rb-1.2.1&h=1000',
}

FeatureSingle.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureSingle
