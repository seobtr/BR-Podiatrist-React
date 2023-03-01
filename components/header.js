import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Header = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`header-header ${props.rootClassName} `}
      >
        <div className="header-container">
          <div className="header-container1">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="header-image"
            />
            <div className="header-frame">
              <div className="header-frame1">
                <span className="header-text">
                  <span>{props.text3}</span>
                </span>
                <span className="header-text02">
                  <span>{props.text4}</span>
                </span>
              </div>
              <span className="header-text04">
                <span>{props.text}</span>
              </span>
            </div>
            <div className="header-gonzalesnav">
              <div className="header-frame2">
                <span className="header-text06">
                  <span>{props.text5}</span>
                </span>
                <span className="header-text08">
                  <span>{props.text6}</span>
                </span>
              </div>
              <span className="header-text10">
                <span>{props.text1}</span>
              </span>
            </div>
            <button className="header-button button">{props.button}</button>
          </div>
        </div>
        <div className="header-container2">
          <div className="header-nav">
            <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          </div>
        </div>
        <div data-role="BurgerMenu" className="header-burger-menu">
          <svg viewBox="0 0 1024 1024" className="header-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="header-mobile-menu">
          <div className="header-nav1">
            <div className="header-container3">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="header-image1"
              />
              <div data-role="CloseMobileMenu" className="header-menu-close">
                <svg viewBox="0 0 1024 1024" className="header-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="header-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="header-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="header-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="header-image2"
        />
      </header>
      <style jsx>
        {`
          .header-header {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .header-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            justify-content: center;
          }
          .header-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .header-image {
            width: 197px;
            height: 56px;
          }
          .header-frame {
            display: flex;
            padding: 11px 10px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 26px;
            flex-direction: column;
          }
          .header-frame1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 19px;
            flex-direction: column;
          }
          .header-text {
            color: rgba(1, 44, 109, 1);
            width: 145px;
            height: auto;
            font-size: 17px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 25.5px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 4px;
            text-decoration: none;
          }
          .header-text02 {
            color: rgba(84, 89, 95, 1);
            width: 118px;
            height: auto;
            font-size: 12px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 19.5px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .header-text04 {
            color: rgba(122, 122, 122, 1);
            width: 109px;
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 14px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .header-gonzalesnav {
            display: flex;
            padding: 11px 10px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 26px;
            flex-direction: column;
          }
          .header-frame2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 19px;
            flex-direction: column;
          }
          .header-text06 {
            color: rgba(1, 44, 109, 1);
            width: 110px;
            height: auto;
            font-size: 17px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 25.5px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 4px;
            text-decoration: none;
          }
          .header-text08 {
            color: rgba(84, 89, 95, 1);
            width: 149px;
            height: auto;
            font-size: 13px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 19.5px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .header-text10 {
            color: rgba(122, 122, 122, 1);
            width: 102px;
            height: auto;
            font-size: 14px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 14px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .header-button {
            color: #ffffff;
            font-family: Montserrat;
            background-color: #3a6ba6;
          }
          .header-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: #3a6ba6;
          }
          .header-nav {
            display: flex;
          }
          .header-burger-menu {
            display: none;
          }
          .header-icon {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-small);
          }
          .header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-image1 {
            height: 2rem;
          }
          .header-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-image2 {
            width: 197px;
            height: 56px;
            display: none;
          }

          @media (max-width: 767px) {
            .header-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: row;
            }
            .header-container {
              display: none;
            }
            .header-container1 {
              display: none;
            }
            .header-container2 {
              display: none;
            }
            .header-nav {
              display: none;
            }
            .header-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .header-image2 {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .header-container {
              display: none;
            }
            .header-container2 {
              display: none;
            }
            .header-icon {
              fill: #3b6ba3;
            }
            .header-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  image_alt2: 'logo',
  text3: 'Baton Rouge, LA​',
  text: '(225) 756-0034',
  image_src2: '/playground_assets/image1115-1rhf-200h.png',
  text5: 'Gonzales, LA',
  image_src1:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text1: '(225) 803-1516',
  text6: '​826 West Hwy 30 Ste A',
  rootClassName: '',
  image_alt1: 'image',
  image_alt: 'logo',
  button: 'Contact Us',
  text4: '6141 ParkForest Dr',
  image_src: '/playground_assets/image1115-1rhf-200h.png',
}

Header.propTypes = {
  image_alt2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  image_src2: PropTypes.string,
  text5: PropTypes.string,
  image_src1: PropTypes.string,
  text1: PropTypes.string,
  text6: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
