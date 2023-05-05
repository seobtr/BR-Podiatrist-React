import React from 'react'

import PropTypes from 'prop-types'

import BrHours from './br-hours'
import GzHours from './gz-hours'

const ClinicOperations = (props) => {
  return (
    <>
      <div className="clinic-operations-clinic-operations">
        <div className="clinic-operations-operations">
          <div className="clinic-operations-container">
            <h2>{props.heading}</h2>
            <span className="clinic-operations-text1">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="clinic-operations-image"
            />
          </div>
          <div className="clinic-operations-container1">
            <BrHours></BrHours>
            <GzHours></GzHours>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .clinic-operations-clinic-operations {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .clinic-operations-operations {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .clinic-operations-container {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .clinic-operations-text1 {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            margin-bottom: var(--dl-space-space-unit);
          }
          .clinic-operations-image {
            width: auto;
            max-height: 350px;
            object-fit: contain;
          }
          .clinic-operations-container1 {
            flex: 2;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          @media (max-width: 991px) {
            .clinic-operations-operations {
              align-items: center;
              flex-direction: column;
            }
            .clinic-operations-container {
              align-items: center;
            }
            .clinic-operations-text1 {
              text-align: center;
            }
            .clinic-operations-container1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .clinic-operations-operations {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .clinic-operations-container1 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .clinic-operations-operations {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .clinic-operations-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ClinicOperations.defaultProps = {
  image_alt: 'image',
  heading: 'Our Locations & Hours',
  image_src: '/playground_assets/image1942-sv1q-1400w.png',
}

ClinicOperations.propTypes = {
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default ClinicOperations
