import React from 'react'

import PropTypes from 'prop-types'

const GzHours = (props) => {
  return (
    <>
      <div className="gz-hours-gz-hours blueCard">
        <span className="gz-hours-text">{props.text}</span>
        <span className="gz-hours-text01">{props.text1}</span>
        <span className="gz-hours-text02">
          <span className="gz-hours-text03">Tuesday </span>
          <br></br>
          <span>8am - 5pm</span>
          <br></br>
        </span>
        <span className="gz-hours-text07">
          <span className="gz-hours-text08">Thursday </span>
          <br></br>
          <span>8am - 5pm</span>
        </span>
        <button className="gz-hours-button button whiteButton">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .gz-hours-gz-hours {
            position: relative;
          }
          .gz-hours-text {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .gz-hours-text01 {
            text-align: center;
            font-weight: bold;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .gz-hours-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .gz-hours-text03 {
            font-weight: bold;
          }
          .gz-hours-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .gz-hours-text08 {
            font-weight: 700;
          }
          .gz-hours-button {
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

GzHours.defaultProps = {
  button: '(225) 803-1516',
  text1: '826 West Hwy 30 Ste A Gonzales, LA 70737',
  text: 'Gonzales',
}

GzHours.propTypes = {
  button: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default GzHours
