import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Location from '../components/location'
import FeatureCard4 from '../components/feature-card4'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-Us - exported project</title>
        <meta property="og:title" content="About-Us - exported project" />
      </Helmet>
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
                Gonzales clinic, the goal of Footsteps, LLC is to be accessible
                to all patients. Dr. Formanek is most gratified when he can
                alleviate symptoms with immediacy and provide patients with a
                plan for the future.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-features1">
        <h2 className="about-us-text02">
          Board Certified, Diplomate Minimally Invasive Foot and Ankle Surgery.
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
                  <div className="about-us-frame01">
                    <span className="about-us-text03">
                      <span>Your Trusted Podiatrist</span>
                    </span>
                  </div>
                  <div className="about-us-frame02">
                    <div className="about-us-frame03">
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
                      Our Lady of the Lake Regional Medical Center – Baton Rouge
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
                  <div className="about-us-frame04">
                    <span className="about-us-text22">
                      <span>in the know</span>
                    </span>
                  </div>
                  <div className="about-us-frame05">
                    <div className="about-us-frame06">
                      <div className="about-us-frame07">
                        <span className="about-us-text24">
                          <span>DR. FORMANEK&apos;S TRAINING:​</span>
                        </span>
                        <span className="about-us-text26">
                          Los Angeles County + USC Medical Center
                        </span>
                        <span className="about-us-text27">
                          Specialized reconstructive surgical foot training, St.
                          Mary of Nazareth Hospital, Chicago
                        </span>
                        <span className="about-us-text28">
                          <span>
                            Bachelor’s degree in Biology and Physiology,
                            University of Minnesota
                          </span>
                        </span>
                        <span className="about-us-text30">
                          <span>
                            Doctor of Podiatric Medicine, California College of
                            Podiatric Medicine, San Francisco
                          </span>
                        </span>
                        <span className="about-us-text32">
                          <span>
                            Associate Membership Academy of minimally Invasive
                            Foot &amp; Ankle Surgery
                          </span>
                        </span>
                      </div>
                      <div className="about-us-frame08">
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
                          <span>Highland Hospital of Oakland, California</span>
                        </span>
                        <span className="about-us-text42">
                          <span>
                            Veteran Administration Medical Centers of Phoenix,
                            Tucson, and Loma Linda, Arizona
                          </span>
                        </span>
                        <span className="about-us-text44">
                          <span>
                            Naval Training Center/Marine Corp Recruitment Depot,
                            Balboa Hospital, San Diego, California
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
          <div className="about-us-footer">
            <div className="about-us-frame09">
              <div className="about-us-frame10">
                <div className="about-us-frame11">
                  <img
                    alt="IMAGE1013"
                    src="/playground_assets/image1013-289g-200h.png"
                    className="about-us-image3"
                  />
                </div>
              </div>
            </div>
            <div className="about-us-frame12">
              <div className="about-us-frame13">
                <div className="about-us-frame14">
                  <span className="about-us-text48">
                    <span>Locations</span>
                  </span>
                  <div className="about-us-frame15">
                    <div className="about-us-frame16">
                      <div className="about-us-frame17">
                        <span className="about-us-text50">
                          <span>Baton rouge</span>
                        </span>
                        <span className="about-us-text52">
                          <span>6141 ParkForest Dr</span>
                        </span>
                        <span className="about-us-text54">
                          <span>Baton Rouge, LA</span>
                        </span>
                        <span className="about-us-text56">
                          <span>(225) 756-0034</span>
                        </span>
                      </div>
                      <div className="about-us-frame18">
                        <span className="about-us-text58">
                          <span>Gonzales</span>
                        </span>
                        <span className="about-us-text60">
                          <span>826 West Hwy 30 Ste A</span>
                        </span>
                        <span className="about-us-text62">
                          <span>Gonzales, LA</span>
                        </span>
                        <span className="about-us-text64">
                          <span>(225) 803-1516</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-frame19">
                  <span className="about-us-text66">
                    <span>Resource Links</span>
                  </span>
                  <div className="about-us-frame20">
                    <span className="about-us-text68">
                      <span>Insurance</span>
                    </span>
                  </div>
                </div>
                <div className="about-us-frame21">
                  <span className="about-us-text70">
                    <span>press</span>
                  </span>
                  <span className="about-us-text72">
                    <span>weekly newsletter sign up</span>
                  </span>
                  <div className="about-us-frame22">
                    <div className="about-us-frame23">
                      <img
                        alt="Rectangle1013"
                        src="/playground_assets/rectangle1013-ibmj-200h.png"
                        className="about-us-rectangle"
                      />
                      <button className="about-us-button button">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-us-disclaimer">
              <span className="about-us-text74">
                <span>
                  Content, including images, displayed on this website is
                  protected by copyright laws. Downloading, republication,
                  retransmission or reproduction of content on this website is
                  strictly prohibited. Terms of Use | Privacy Policy
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
