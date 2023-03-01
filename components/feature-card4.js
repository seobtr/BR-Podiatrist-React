import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard4 = (props) => {
  return (
    <>
      <div className={`feature-card4-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card4-text">{props.new_prop}</h2>
        <span className="feature-card4-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card4-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card4-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card4-text1 {
            color: var(--dl-color-gray-700);
          }
          .feature-card4-root-class-name {
            width: 100%;
          }

          @media (max-width: 479px) {
            .feature-card4-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard4.defaultProps = {
  new_prop: 'Lorem ipsum',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
}

FeatureCard4.propTypes = {
  new_prop: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard4
