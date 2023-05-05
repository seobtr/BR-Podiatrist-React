import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Location from '../components/location'
import FeatureCard4 from '../components/feature-card4'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-Us - exported project</title>
          <meta property="og:title" content="About-Us - exported project" />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <Location rootClassName="location-root-class-name"></Location>
        <div className="about-us-features">
          <h1 className="about-us-text">Christopher Formanek, DPM </h1>
          <div className="about-us-separator"></div>
          <div className="about-us-container1">
            <img
              alt="image"
              src="/playground_assets/image1907-jkwp-500h.png"
              className="about-us-image"
            />
            <div className="about-us-container2">
              <div className="about-us-feature-card">
                <span className="about-us-text01">
                  With convenient business hours in both the Baton Rouge and
                  Gonzales clinic, the goal of Footsteps, LLC is to be
                  accessible to all patients. Dr. Formanek is most gratified
                  when he can alleviate symptoms with immediacy and provide
                  patients with a plan for the future.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-features1">
          <h2 className="about-us-text02">
            Board Certified, Diplomate Minimally Invasive Foot and Ankle
            Surgery.
          </h2>
          <div className="about-us-separator1"></div>
          <div className="about-us-container3">
            <div className="about-us-container4">
              <FeatureCard4
                new_prop="American College of Podiatric Physicians &amp; Surgeons"
                description=" "
                rootClassName="rootClassName5"
              ></FeatureCard4>
              <FeatureCard4
                new_prop="FAMIFAS"
                description=" "
                rootClassName="rootClassName6"
              ></FeatureCard4>
            </div>
          </div>
          <div className="about-us-aboutus">
            <div className="about-us-body">
              <div className="about-us-section1">
                <div className="about-us-columnsection">
                  <img
                    alt="IMAGE1012"
                    src="/playground_assets/image1012-fqyj-600w.png"
                    className="about-us-image1"
                  />
                  <div className="about-us-frame">
                    <div className="about-us-frame1">
                      <span className="about-us-text03">
                        <span>Your Trusted Podiatrist</span>
                      </span>
                    </div>
                    <div className="about-us-frame2">
                      <div className="about-us-frame3">
                        <span className="about-us-text05">D</span>
                        <span className="about-us-text06">
                          <span>R. FORMANEK’S STAFF PRIVILEGES:​</span>
                        </span>
                      </div>
                    </div>
                    <span className="about-us-text08">
                      <span>Baton Rouge and Gonzales clinic</span>
                      <span className="about-us-text10">,</span>
                      <span>DR. FORMANEK’S STAFF PRIVILEGES:​</span>
                      <br></br>
                      <span>
                        Our Lady of the Lake Regional Medical Center – Baton
                        Rouge
                      </span>
                      <br></br>
                      <span>
                        Our Lady of the Lake Regional Medical Center – Ascension
                      </span>
                      <br></br>
                      <span>Baton Rouge General Hospital</span>
                      <br></br>
                      <span>With convenient business hours in both the B</span>
                      <span>
                        {' '}
                        the goal of Footsteps, LLC is to be accessible to all
                        patients. Dr. Formanek is most gratified when he can
                        alleviate symptoms with immediacy and provide patients
                        with a plan for the future.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-us-section2">
                <div className="about-us-columnsection1">
                  <div className="about-us-content">
                    <div className="about-us-frame4">
                      <span className="about-us-text22">
                        <span>in the know</span>
                      </span>
                    </div>
                    <div className="about-us-frame5">
                      <div className="about-us-frame6">
                        <div className="about-us-frame7">
                          <span className="about-us-text24">
                            <span>DR. FORMANEK&apos;S TRAINING:​</span>
                          </span>
                          <span className="about-us-text26">
                            Los Angeles County + USC Medical Center
                          </span>
                          <span className="about-us-text27">
                            Specialized reconstructive surgical foot training,
                            St. Mary of Nazareth Hospital, Chicago
                          </span>
                          <span className="about-us-text28">
                            <span>
                              Bachelor’s degree in Biology and Physiology,
                              University of Minnesota
                            </span>
                          </span>
                          <span className="about-us-text30">
                            <span>
                              Doctor of Podiatric Medicine, California College
                              of Podiatric Medicine, San Francisco
                            </span>
                          </span>
                          <span className="about-us-text32">
                            <span>
                              Associate Membership Academy of minimally Invasive
                              Foot &amp; Ankle Surgery
                            </span>
                          </span>
                        </div>
                        <div className="about-us-frame8">
                          <span className="about-us-text34">
                            <span>CLINICAL EXTERNSHIPS</span>
                          </span>
                          <span className="about-us-text36">
                            <span>San Francisco General Hospital</span>
                          </span>
                          <span className="about-us-text38">
                            <span>
                              University of California San Francisco
                              (UCSF)/Parnassus Medical Center
                            </span>
                          </span>
                          <span className="about-us-text40">
                            <span>
                              Highland Hospital of Oakland, California
                            </span>
                          </span>
                          <span className="about-us-text42">
                            <span>
                              Veteran Administration Medical Centers of Phoenix,
                              Tucson, and Loma Linda, Arizona
                            </span>
                          </span>
                          <span className="about-us-text44">
                            <span>
                              Naval Training Center/Marine Corp Recruitment
                              Depot, Balboa Hospital, San Diego, California
                            </span>
                          </span>
                          <span className="about-us-text46">
                            <span>
                              Indian Health Services in Sacaton and Gila Bend,
                              Arizona
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    alt="IMAGE1013"
                    src="/playground_assets/image1013-h91r-300h.png"
                    className="about-us-image2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .about-us-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-us-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .about-us-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-image {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          .about-us-container2 {
            display: grid;
            grid-template-columns: 1fr;
          }
          .about-us-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            min-width: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-text01 {
            color: var(--dl-color-gray-700);
            font-size: 20px;
            font-family: Montserrat;
          }
          .about-us-features1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .about-us-text02 {
            font-size: 2.5rem;
            font-family: Montserrat;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-us-separator1 {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .about-us-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-container4 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .about-us-aboutus {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .about-us-body {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 32px;
            flex-direction: column;
          }
          .about-us-section1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 0px;
            flex-direction: column;
          }
          .about-us-columnsection {
            width: auto;
            display: flex;
            padding: 15px;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .about-us-image1 {
            width: 510px;
            height: 289px;
            position: relative;
            border-color: transparent;
            margin-right: 30px;
          }
          .about-us-frame {
            display: flex;
            padding: 0 24px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .about-us-frame1 {
            display: flex;
            padding: 2px 24px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 31px;
            background-color: rgba(119, 155, 191, 0.14000000059604645);
          }
          .about-us-text03 {
            color: rgba(58, 107, 166, 1);
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 18px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .about-us-frame2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 31px;
            flex-direction: column;
          }
          .about-us-frame3 {
            display: flex;
            position: relative;
            align-items: center;
            border-color: transparent;
          }
          .about-us-text05 {
            color: rgba(84, 89, 95, 1);
            width: 42px;
            height: auto;
            font-size: 50px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 50px;
            font-stretch: normal;
            margin-right: 10px;
            margin-bottom: 0;
            text-decoration: none;
          }
          .about-us-text06 {
            color: rgba(84, 89, 95, 1);
            width: 322px;
            height: auto;
            font-size: 17px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .about-us-text08 {
            color: rgb(84, 89, 95);
            width: auto;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .about-us-text10 {
            text-decoration: underline;
          }
          .about-us-section2 {
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: transparent;
            flex-direction: column;
          }
          .about-us-columnsection1 {
            width: auto;
            display: flex;
            padding: 15px;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
          }
          .about-us-content {
            width: auto;
            display: flex;
            padding: 15px;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .about-us-frame4 {
            display: flex;
            padding: 2px 24px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 3px;
            flex-direction: column;
            background-color: rgba(119, 155, 191, 0.14000000059604645);
          }
          .about-us-text22 {
            color: rgba(58, 107, 166, 1);
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 18px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .about-us-frame5 {
            display: flex;
            padding: 15px 0;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .about-us-frame6 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .about-us-frame7 {
            display: flex;
            padding: 0 12px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            margin-bottom: 12px;
            flex-direction: column;
          }
          .about-us-text24 {
            color: rgba(84, 89, 95, 1);
            height: auto;
            font-size: 26px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 26px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text26 {
            color: rgb(84, 89, 95);
            width: 379px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text27 {
            color: rgb(84, 89, 95);
            width: 458px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text28 {
            color: rgba(84, 89, 95, 1);
            width: 403px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text30 {
            color: rgba(84, 89, 95, 1);
            width: 447px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text32 {
            color: rgba(84, 89, 95, 1);
            width: 415px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-frame8 {
            display: flex;
            padding: 15px 5px;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .about-us-text34 {
            color: rgba(84, 89, 95, 1);
            width: 317px;
            height: auto;
            font-size: 26px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 31.200000762939453px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text36 {
            color: rgba(84, 89, 95, 1);
            width: 278px;
            height: auto;
            font-size: 17px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text38 {
            color: rgba(84, 89, 95, 1);
            width: 332px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text40 {
            color: rgba(84, 89, 95, 1);
            width: auto;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text42 {
            color: rgba(84, 89, 95, 1);
            width: 465px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text44 {
            color: rgba(84, 89, 95, 1);
            width: 432px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-text46 {
            color: rgba(84, 89, 95, 1);
            width: 438px;
            height: auto;
            font-size: 18px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 27px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-us-image2 {
            width: 434px;
            height: 252px;
            position: relative;
            border-color: transparent;
          }
          @media (max-width: 991px) {
            .about-us-features {
              align-items: center;
            }
            .about-us-container1 {
              flex-direction: column;
            }
            .about-us-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .about-us-features1 {
              align-items: center;
            }
            .about-us-container3 {
              flex-direction: column;
            }
            .about-us-body {
              width: auto;
              height: auto;
            }
            .about-us-section1 {
              width: auto;
              height: auto;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .about-us-columnsection {
              width: auto;
            }
            .about-us-columnsection1 {
              width: auto;
            }
            .about-us-content {
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .about-us-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-us-text {
              text-align: center;
            }
            .about-us-container1 {
              flex-direction: column;
            }
            .about-us-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-us-text02 {
              text-align: center;
            }
            .about-us-container3 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .about-us-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-us-image {
              width: 250px;
              height: 250px;
            }
            .about-us-container2 {
              grid-template-columns: 1fr;
            }
            .about-us-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-us-container4 {
              grid-template-columns: 1fr;
            }
            .about-us-body {
              width: 100%;
              height: 100%;
            }
            .about-us-columnsection {
              align-items: center;
              flex-direction: column;
            }
            .about-us-image1 {
              width: 100%;
              height: auto;
            }
            .about-us-frame {
              width: 100%;
              height: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-us-section2 {
              width: 100%;
              height: 100%;
            }
            .about-us-columnsection1 {
              width: 100%;
              height: 100%;
              align-items: center;
              flex-direction: column;
            }
            .about-us-content {
              width: 100%;
              height: 100%;
              margin-right: 0px;
            }
            .about-us-frame5 {
              width: 100%;
              height: 100%;
            }
            .about-us-frame6 {
              width: 100%;
              height: 100%;
              align-items: center;
            }
            .about-us-frame7 {
              width: 100%;
              height: 100%;
            }
            .about-us-text27 {
              width: auto;
            }
            .about-us-text28 {
              width: auto;
            }
            .about-us-text30 {
              width: auto;
            }
            .about-us-text32 {
              width: auto;
            }
            .about-us-frame8 {
              align-self: center;
            }
            .about-us-text36 {
              width: auto;
            }
            .about-us-text38 {
              width: auto;
            }
            .about-us-text40 {
              width: auto;
            }
            .about-us-text42 {
              width: auto;
            }
            .about-us-text44 {
              width: auto;
            }
            .about-us-text46 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
