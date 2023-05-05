import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <div className="banner-banner">
        <div className="banner-container">
          <h1 className="banner-text">
            <span>Be the first to get the latest features</span>
          </h1>
          <span className="banner-text2">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis, ut tincidunt lectus. Mauris luctus
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
            <span>
              rutrum mi ut rhoncus. Integer in dignissim tortor, id egestas
              ante. Proin at enim purus. Mauris ut felis nisi.
            </span>
          </span>
          <div className="banner-container1">
            <input
              type="text"
              placeholder={props.textinput_placeholder}
              className="banner-textinput input"
            />
            <button className="banner-button button">{props.button}</button>
          </div>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="banner-image"
        />
      </div>
      <style jsx>
        {`
          .banner-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .banner-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .banner-text {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .banner-text2 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .banner-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .banner-textinput {
            font-size: 0.75rem;
            border-color: var(--dl-color-gray-500);
            border-radius: var(--dl-radius-radius-radius4);
          }
          .banner-button {
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-500);
          }
          .banner-button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .banner-image {
            width: 300px;
            height: 300px;
            object-fit: cover;
            flex-shrink: 0;
          }
          @media (max-width: 991px) {
            .banner-banner {
              flex-direction: column;
            }
            .banner-container {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .banner-text2 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .banner-container1 {
              justify-content: center;
            }
            .banner-image {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
          }
          @media (max-width: 767px) {
            .banner-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .banner-text2 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .banner-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .banner-container1 {
              align-items: center;
              flex-direction: column;
            }
            .banner-button {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .banner-image {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  button: 'Subscribe',
  image_alt: 'image',
  textinput_placeholder: 'Email here...',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&ixlib=rb-1.2.1&w=1000',
}

Banner.propTypes = {
  button: PropTypes.string,
  image_alt: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
}

export default Banner
