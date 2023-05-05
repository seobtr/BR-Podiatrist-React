import React from 'react'

import PropTypes from 'prop-types'

const Claim1 = (props) => {
  return (
    <>
      <div className="claim1-claim1">
        <h3 className="claim1-text H3-Desktop">
          <span>Stop Paying More for the Same Service</span>
          <br></br>
        </h3>
        <span className="claim1-text3">{props.text}</span>
      </div>
      <style jsx>
        {`
          .claim1-claim1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .claim1-text {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .claim1-text3 {
            color: var(--dl-color-gray-700);
            width: 100%;
            font-size: 1.15rem;
            text-align: left;
          }
          @media (max-width: 991px) {
            .claim1-text {
              text-align: center;
            }
            .claim1-text3 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .claim1-claim1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .claim1-text {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .claim1-claim1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Claim1.defaultProps = {
  text: "Why pay up to 33% more for identical services for facility fees' charged by large hospital-based groups? As an independent provider, Footsteps, LLC does not charge facility fees.",
}

Claim1.propTypes = {
  text: PropTypes.string,
}

export default Claim1
