import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard31 = (props) => {
  return (
    <>
      <div className={`feature-card31-feature-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card31-image"
        />
        <h3 className="feature-card31-text">{props.title}</h3>
        <span className="feature-card31-text1">{props.description}</span>
        <span className="feature-card31-text2">{props.action}</span>
      </div>
      <style jsx>
        {`
          .feature-card31-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
          }
          .feature-card31-image {
            width: 200px;
            object-fit: cover;
          }
          .feature-card31-text {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card31-text1 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .feature-card31-text2 {
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

FeatureCard31.defaultProps = {
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  title: 'H3 Heading',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  text: 'Text',
  action: 'SEE MORE',
  image_alt: 'image',
}

FeatureCard31.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard31
