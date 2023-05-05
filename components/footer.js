import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-frame">
          <div className="footer-frame01">
            <div className="footer-frame02">
              <img
                alt={props.IMAGE_alt}
                src={props.IMAGE_src}
                className="footer-image"
              />
            </div>
          </div>
        </div>
        <div className="footer-frame03">
          <div className="footer-frame04">
            <div className="footer-frame05">
              <span className="footer-text">
                <span>Locations</span>
              </span>
              <div className="footer-frame06">
                <div className="footer-frame07">
                  <div className="footer-frame08">
                    <span className="footer-text02">
                      <span>Baton rouge</span>
                    </span>
                    <span className="footer-text04">
                      <span>6141 ParkForest Dr</span>
                    </span>
                    <span className="footer-text06">
                      <span>Baton Rouge, LA</span>
                    </span>
                    <span className="footer-text08">
                      <span>(225) 756-0034</span>
                    </span>
                  </div>
                  <div className="footer-frame09">
                    <span className="footer-text10">
                      <span>Gonzales</span>
                    </span>
                    <span className="footer-text12">
                      <span>826 West Hwy 30 Ste A</span>
                    </span>
                    <span className="footer-text14">
                      <span>Gonzales, LA</span>
                    </span>
                    <span className="footer-text16">
                      <span>(225) 803-1516</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-frame10">
              <span className="footer-text18">
                <span>Resource Links</span>
              </span>
              <div className="footer-frame11">
                <span className="footer-text20">
                  <span>Insurance</span>
                </span>
              </div>
            </div>
            <div className="footer-frame12">
              <span className="footer-text22">
                <span>press</span>
              </span>
              <span className="footer-text24">
                <span>weekly newsletter sign up</span>
              </span>
              <div className="footer-frame13">
                <div className="footer-frame14">
                  <img
                    alt={props.Rectangle_alt}
                    src={props.Rectangle_src}
                    className="footer-rectangle"
                  />
                  <button className="footer-button button">
                    {props.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-disclaimer">
          <span className="footer-text26">
            <span>
              Content, including images, displayed on this website is protected
              by copyright laws. Downloading, republication, retransmission or
              reproduction of content on this website is strictly prohibited.
              Terms of Use | Privacy Policy
            </span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .footer-frame {
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            margin-bottom: 25px;
            flex-direction: column;
          }
          .footer-frame01 {
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: 0 400px;
            border-color: transparent;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: 0 400px;
          }
          .footer-frame02 {
            display: flex;
            padding: 29px 88px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .footer-image {
            width: 224px;
            height: 64px;
            position: relative;
            border-color: transparent;
          }
          .footer-frame03 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 25px;
            flex-direction: column;
          }
          .footer-frame04 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            justify-content: center;
          }
          .footer-frame05 {
            height: 100%;
            display: flex;
            padding: 8px 10px;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-right: 0px;
            flex-direction: column;
          }
          .footer-text {
            color: rgba(58, 107, 166, 1);
            width: 113px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 18px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 21px;
            text-decoration: none;
          }
          .footer-frame06 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .footer-frame07 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .footer-frame08 {
            display: flex;
            padding: 8px 19px;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-right: 0px;
            flex-direction: column;
          }
          .footer-text02 {
            color: rgba(58, 107, 166, 1);
            width: 151px;
            height: auto;
            font-size: 19px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 10px;
            text-decoration: none;
          }
          .footer-text04 {
            color: rgba(122, 122, 122, 1);
            width: 137px;
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
            margin-bottom: 10px;
            text-decoration: none;
          }
          .footer-text06 {
            color: rgba(122, 122, 122, 1);
            width: 123px;
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
            margin-bottom: 10px;
            text-decoration: none;
          }
          .footer-text08 {
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
          .footer-frame09 {
            display: flex;
            padding: 8px 16px;
            position: relative;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .footer-text10 {
            color: rgba(58, 107, 166, 1);
            width: 111px;
            height: auto;
            font-size: 19px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 10px;
            text-decoration: none;
          }
          .footer-text12 {
            color: rgba(122, 122, 122, 1);
            width: 157px;
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
            margin-bottom: 10px;
            text-decoration: none;
          }
          .footer-text14 {
            color: rgba(122, 122, 122, 1);
            width: 95px;
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
            margin-bottom: 10px;
            text-decoration: none;
          }
          .footer-text16 {
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
          .footer-frame10 {
            width: 308px;
            height: 100%;
            display: flex;
            padding: 8px 10px;
            position: relative;
            align-items: center;
            border-color: transparent;
            margin-right: 0px;
            flex-direction: column;
          }
          .footer-text18 {
            color: rgba(58, 107, 166, 1);
            width: 168px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 18px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 22px;
            text-decoration: none;
          }
          .footer-frame11 {
            display: flex;
            padding: 10px 135px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .footer-text20 {
            color: rgba(155, 155, 155, 1);
            height: auto;
            font-size: 17px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .footer-frame12 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 8px 7px;
            position: relative;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .footer-text22 {
            color: rgba(58, 107, 166, 1);
            width: 62px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 18px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .footer-text24 {
            color: rgba(58, 107, 166, 1);
            width: 319px;
            height: auto;
            font-size: 19px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 19px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 16px;
            text-decoration: none;
          }
          .footer-frame13 {
            height: 128px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
          }
          .footer-frame14 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 0 3px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 12px;
            flex-direction: column;
          }
          .footer-rectangle {
            width: 380px;
            height: 40px;
            position: relative;
            border-color: rgba(129, 138, 145, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 10px;
          }
          .footer-button {
            color: #ffffff;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Montserrat;
            background-color: #3a6ba6;
          }
          .footer-disclaimer {
            width: 100%;
            height: 100%;
            display: flex;
            padding: 24px 43px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            background-color: rgba(58, 107, 166, 1);
          }
          .footer-text26 {
            color: rgba(255, 255, 255, 1);
            width: 1114px;
            height: auto;
            font-size: 11px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 11px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .footer-root-class-name {
            height: auto;
          }
          @media (max-width: 991px) {
            .footer-frame01 {
              width: 100%;
              align-self: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-frame02 {
              align-self: center;
            }
            .footer-frame03 {
              width: 100%;
            }
            .footer-frame04 {
              width: 100%;
              flex-direction: column;
            }
            .footer-frame05 {
              width: 100%;
            }
            .footer-frame10 {
              width: 100%;
            }
            .footer-frame12 {
              width: 100%;
            }
            .footer-disclaimer {
              width: 100%;
              height: 100%;
              align-self: center;
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  Rectangle_src: '/playground_assets/rectangle1013-ibmj-200h.png',
  button: 'Contact Us',
  Rectangle_alt: 'Rectangle1013',
  IMAGE_alt: 'IMAGE1013',
  IMAGE_src: '/playground_assets/image1013-289g-200h.png',
  rootClassName: '',
}

Footer.propTypes = {
  Rectangle_src: PropTypes.string,
  button: PropTypes.string,
  Rectangle_alt: PropTypes.string,
  IMAGE_alt: PropTypes.string,
  IMAGE_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
