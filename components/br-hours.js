import React from 'react'

import PropTypes from 'prop-types'

const BrHours = (props) => {
  return (
    <>
      <div className="br-hours-br-hours">
        <span className="br-hours-text">{props.text}</span>
        <span className="br-hours-text01">
          <span className="br-hours-text02">
            6141 ParkForest Dr. Baton Rouge, LA
          </span>
          <br></br>
        </span>
        <span className="br-hours-text04">
          <span className="br-hours-text05">Monday</span>
          <span> </span>
          <br></br>
          <span>8am - 5pm</span>
        </span>
        <span className="br-hours-text09">
          <span className="br-hours-text10">Wednesday</span>
          <br></br>
          <span>8am - 5pm</span>
          <br></br>
        </span>
        <span className="br-hours-text14">
          <span className="br-hours-text15">Friday</span>
          <span> </span>
          <br></br>
          <span>8am - 12:30</span>
        </span>
        <button className="br-hours-button button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .br-hours-br-hours {
            flex: 1;
            height: 450px;
            display: flex;
            position: relative;
            max-width: 450px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .br-hours-br-hours:hover {
            transform: scale(1.02);
          }
          .br-hours-text {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .br-hours-text01 {
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .br-hours-text02 {
            font-weight: 700;
          }
          .br-hours-text04 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .br-hours-text05 {
            font-weight: 700;
          }
          .br-hours-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .br-hours-text10 {
            font-weight: bold;
          }
          .br-hours-text14 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .br-hours-text15 {
            font-weight: 700;
          }
          .br-hours-button {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 767px) {
            .br-hours-br-hours {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

BrHours.defaultProps = {
  button: '(225) 756-0034',
  text: 'Baton Rouge',
}

BrHours.propTypes = {
  button: PropTypes.string,
  text: PropTypes.string,
}

export default BrHours
