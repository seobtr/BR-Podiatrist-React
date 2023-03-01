import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks1 from './navigation-links1'
import './location.css'

const Location = (props) => {
  return (
    <header
      data-role="Accordion"
      className={`location-location ${props.rootClassName} `}
    >
      <div className="location-separator"></div>
      <nav className="location-nav">
        <NavigationLinks1
          rootClassName="rootClassName19"
          className=""
        ></NavigationLinks1>
      </nav>
    </header>
  )
}

Location.defaultProps = {
  rootClassName: '',
}

Location.propTypes = {
  rootClassName: PropTypes.string,
}

export default Location
