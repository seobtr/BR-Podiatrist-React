import React from 'react'

import PropTypes from 'prop-types'

const Testimonial = (props) => {
  return (
    <>
      <div className="testimonial-testimonial">
        <div className="testimonial-testimonial1">
          <div className="testimonial-container">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="testimonial-icon"
            >
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="testimonial-text">
            <span>
              Never had issues until I had the wound, the other doctors saw were
              nightmares. My previous healthcare profession I&apos;ve dealt on
              this wound wanted to amputate my affected toes. It was also
              suggested by three other facilities. Two of the facilites couldn’t
              get it to heal. The other facilities wanted to amputate.
            </span>
            <br></br>
          </span>
          <div className="testimonial-container1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="testimonial-icon2"
            >
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="testimonial-text3">{props.Text}</span>
        <span className="testimonial-text4">{props.Text1}</span>
      </div>
      <style jsx>
        {`
          .testimonial-testimonial {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-testimonial1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .testimonial-container {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .testimonial-icon {
            width: var(--dl-size-size-small);
            margin-bottom: -6rem;
          }
          .testimonial-text {
            font-size: 1.15rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-threeunits);
            text-align: center;
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-twounits);
          }
          .testimonial-container1 {
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .testimonial-icon2 {
            width: var(--dl-size-size-small);
            margin-top: -6rem;
          }
          .testimonial-text3 {
            font-size: 1.5rem;
            max-width: 600px;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .testimonial-text4 {
            color: var(--dl-color-gray-500);
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .testimonial-text {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-testimonial {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .testimonial-testimonial {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .testimonial-icon {
              margin-bottom: 0px;
            }
            .testimonial-text {
              width: auto;
            }
            .testimonial-icon2 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  Text1: 'Walker, LA',
  Text: 'Kristina Jones',
}

Testimonial.propTypes = {
  Text1: PropTypes.string,
  Text: PropTypes.string,
}

export default Testimonial
