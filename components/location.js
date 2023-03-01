import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks1 from './navigation-links1'

const Location = (props) => {
  return (
    <>
      <header
        data-role="Accordion"
        className={`location-location ${props.rootClassName} `}
      >
        <div className="location-separator"></div>
        <nav className="location-nav">
          <NavigationLinks1 rootClassName="rootClassName19"></NavigationLinks1>
        </nav>
      </header>
      <style jsx>
        {`
          .location-location {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .location-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #3b6ba3;
          }

          @media (max-width: 767px) {
            .location-location {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .location-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .location-nav {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .location-location {
              padding: var(--dl-space-space-unit);
            }
            .location-separator {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Location.defaultProps = {
  rootClassName: '',
}

Location.propTypes = {
  rootClassName: PropTypes.string,
}

export default Location
