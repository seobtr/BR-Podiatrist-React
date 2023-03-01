import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <span className="navigation-links1-text">{props.text}</span>
        <span className="navigation-links1-text1">{props.text1}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-text {
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-links1-text1 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links1-text {
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-links1-text {
              margin-right: var(--dl-space-space-halfunit);
            }
            .navigation-links1-text1 {
              margin-left: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text1: 'Gonzales, LA',
  rootClassName: '',
  text: 'Baton Rouge, LA',
}

NavigationLinks1.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1
