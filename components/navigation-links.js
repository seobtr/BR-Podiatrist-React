import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-links-link">{props.text}</a>
        </Link>
        <span className="navigation-links-text">{props.text1}</span>
        <span className="navigation-links-patient-resources">
          {props.text2}
        </span>
        <svg viewBox="0 0 1024 1024" className="navigation-links-icon">
          <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
          <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
        </svg>
        <span className="navigation-links-text1">{props.text3}</span>
        <span className="navigation-links-text2">{props.text31}</span>
        <Link href="/about-us">
          <a className="navigation-links-link1">{props.text311}</a>
        </Link>
        <div className="navigation-links-container"></div>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            color: #fff8f8;
            text-decoration: none;
          }
          .navigation-links-text {
            color: #fff8f8;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-patient-resources {
            color: #fff8f8;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-icon {
            fill: var(--dl-color-gray-900);
            width: 13px;
          }
          .navigation-links-text1 {
            color: #fff8f8;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text2 {
            color: #fff8f8;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-link1 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            flex-direction: row;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-patient-resources {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text311: 'About Us',
  rootClassName: '',
  text: 'Home',
  text2: 'Patient Resources',
  text1: 'What We Treat',
  text3: 'Locations',
  text31: 'Contact Us',
}

NavigationLinks.propTypes = {
  text311: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text31: PropTypes.string,
}

export default NavigationLinks
