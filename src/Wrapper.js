import React from 'react'
import WrapperCom from './components/WrapperCom'

export const Wrapper = () => {
  return (
    <>
    <div id="wrapper" className="">
        <WrapperCom />
        <div className="clearfix" />
        {/* Header Container / End */}
        {/* Country Picker */}
        <div
          className="zoom-anim-dialog mfp-hide dialog-with-tabs popup-dialog big-dialog"
          id="countryModal"
        >
          <ul className="popup-tabs-nav">
            <li>
              <a href="#country">
                <i className="icon-feather-map-pin" /> Select Your Country
              </a>
            </li>
          </ul>
          <div className="popup-tabs-container">
            <div className="popup-tab-content" id="country">
              <div className="row">
                <div className="col-md-6">
                  <div className="input-with-icon margin-bottom-30">
                    <input
                      className="with-border"
                      type="text"
                      placeholder="Search..."
                      id="country-modal-search"
                    />
                    <i className="icon-feather-search" />
                  </div>
                </div>
                <ul id="countries" className="column col-md-12 col-sm-12 cities">
                  <li data-name="Andorra">
                    <span className="flag flag-ad" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/ad"
                      data-id={1}
                      data-name="Andorra"
                    >
                      {" "}
                      Andorra
                    </a>
                  </li>
                  <li data-name="United Arab Emirates">
                    <span className="flag flag-ae" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/ae"
                      data-id={2}
                      data-name="United Arab Emirates"
                    >
                      {" "}
                      United Arab Emirates
                    </a>
                  </li>
                  <li data-name="Angola">
                    <span className="flag flag-ao" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/ao"
                      data-id={9}
                      data-name="Angola"
                    >
                      {" "}
                      Angola
                    </a>
                  </li>
                  <li data-name="Egypt">
                    <span className="flag flag-eg" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/eg"
                      data-id={65}
                      data-name="Egypt"
                    >
                      {" "}
                      Egypt
                    </a>
                  </li>
                  <li data-name="Ethiopia">
                    <span className="flag flag-et" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/et"
                      data-id={69}
                      data-name="Ethiopia"
                    >
                      {" "}
                      Ethiopia
                    </a>
                  </li>
                  <li data-name="Ghana">
                    <span className="flag flag-gh" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/gh"
                      data-id={81}
                      data-name="Ghana"
                    >
                      {" "}
                      Ghana
                    </a>
                  </li>
                  <li data-name="Guyana">
                    <span className="flag flag-gy" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/gy"
                      data-id={92}
                      data-name="Guyana"
                    >
                      {" "}
                      Guyana
                    </a>
                  </li>
                  <li data-name="India">
                    <span className="flag flag-in" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/in"
                      data-id={102}
                      data-name="India"
                    >
                      {" "}
                      India
                    </a>
                  </li>
                  <li data-name="Kenya">
                    <span className="flag flag-ke" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/ke"
                      data-id={111}
                      data-name="Kenya"
                    >
                      {" "}
                      Kenya
                    </a>
                  </li>
                  <li data-name="Libya">
                    <span className="flag flag-ly" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/ly"
                      data-id={132}
                      data-name="Libya"
                    >
                      {" "}
                      Libya
                    </a>
                  </li>
                  <li data-name="Namibia">
                    <span className="flag flag-na" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/na"
                      data-id={156}
                      data-name="Namibia"
                    >
                      {" "}
                      Namibia
                    </a>
                  </li>
                  <li data-name="Nigeria">
                    <span className="flag flag-ng" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/ng"
                      data-id={160}
                      data-name="Nigeria"
                    >
                      {" "}
                      Nigeria
                    </a>
                  </li>
                  <li data-name="South Sudan">
                    <span className="flag flag-ss" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/ss"
                      data-id={203}
                      data-name="South Sudan"
                    >
                      {" "}
                      South Sudan
                    </a>
                  </li>
                  <li data-name="Tanzania">
                    <span className="flag flag-tz" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/tz"
                      data-id={223}
                      data-name="Tanzania"
                    >
                      {" "}
                      Tanzania
                    </a>
                  </li>
                  <li data-name="United States">
                    <span className="flag flag-us" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/us"
                      data-id={227}
                      data-name="United States"
                    >
                      {" "}
                      United States
                    </a>
                  </li>
                  <li data-name="South Africa">
                    <span className="flag flag-za" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/za"
                      data-id={242}
                      data-name="South Africa"
                    >
                      {" "}
                      South Africa
                    </a>
                  </li>
                  <li data-name="Zimbabwe">
                    <span className="flag flag-zw" />
                    <a
                      href="https://buynsell.mchamp.xyz/en/zw"
                      data-id={244}
                      data-name="Zimbabwe"
                    >
                      {" "}
                      Zimbabwe
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*Country-Cities-changes-Model*/}
        <a
          className="popup-with-zoom-anim hidden"
          href="#citiesModal"
          id="change-city"
        >
          City
        </a>
        <div
          className="zoom-anim-dialog mfp-hide popup-dialog big-dialog"
          id="citiesModal"
        >
          <div className="popup-tab-content padding-0">
            <div
              className="quick-states"
              id="country-popup"
              data-country-id="IN"
              style={{ display: "block" }}
            >
              <div id="regionSearchBox" className="title clr">
                <div className="clr">
                  <div className="locationrequest smallBox br5 col-sm-4">
                    <div className="rel input-container">
                      <div className="input-with-icon">
                        <input
                          id="inputStateCity"
                          className="with-border"
                          type="text"
                          placeholder="Enter city name"
                        />
                        <i className="la la-map-marker" />
                      </div>
                      <div id="searchDisplay" />
                      <div className="suggest bottom abs small br3 error hidden">
                        <span className="target abs icon" />
                        <p />
                      </div>
                    </div>
                    <div
                      id="lastUsedCities"
                      className="last-used binded"
                      style={{ display: "none" }}
                    >
                      Last Visited
                      <ul id="last-locations-ul"></ul>
                    </div>
                  </div>
                  <span style={{ lineHeight: 30 }}>
                    <span className="flag flag-in" />
                    <a href="#countryModal" className="popup-with-zoom-anim">
                      Change Country
                    </a>
                  </span>
                </div>
              </div>
              <div className="popular-cities clr">
                <p>Popular Cities</p>
                <div className="list row">
                  <ul className="col-lg-12 col-md-12 popularcity">
                    <li>
                      <a
                        className="selectme"
                        data-id={2661}
                        data-name="Mumbai"
                        data-type="city"
                      >
                        <span>Mumbai</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={2461}
                        data-name="Delhi"
                        data-type="city"
                      >
                        <span>Delhi</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={2912}
                        data-name="Bengaluru"
                        data-type="city"
                      >
                        <span>Bengaluru</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={2051}
                        data-name="Hyderabad"
                        data-type="city"
                      >
                        <span>Hyderabad</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={3180}
                        data-name="Ahmedabad"
                        data-type="city"
                      >
                        <span>Ahmedabad</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={1444}
                        data-name="Chennai"
                        data-type="city"
                      >
                        <span>Chennai</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={2639}
                        data-name="Kolkata"
                        data-type="city"
                      >
                        <span>Kolkata</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={311}
                        data-name="Surat"
                        data-type="city"
                      >
                        <span>Surat</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={793}
                        data-name="Pune"
                        data-type="city"
                      >
                        <span>Pune</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={1805}
                        data-name="Kanpur"
                        data-type="city"
                      >
                        <span>Kanpur</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={2002}
                        data-name="Jaipur"
                        data-type="city"
                      >
                        <span>Jaipur</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={3251}
                        data-name="Navi Mumbai"
                        data-type="city"
                      >
                        <span>Navi Mumbai</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={1466}
                        data-name="Lucknow"
                        data-type="city"
                      >
                        <span>Lucknow</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={1159}
                        data-name="Nagpur"
                        data-type="city"
                      >
                        <span>Nagpur</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={2519}
                        data-name="Coimbatore"
                        data-type="city"
                      >
                        <span>Coimbatore</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={2034}
                        data-name="Indore"
                        data-type="city"
                      >
                        <span>Indore</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={110}
                        data-name="Vadodara"
                        data-type="city"
                      >
                        <span>Vadodara</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="selectme"
                        data-id={3348}
                        data-name="Kallakurichi"
                        data-type="city"
                      >
                        <span>Kallakurichi</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="viewport">
                <div className="full" id="getCities">
                  <div
                    className="col-sm-12 col-md-12 loader"
                    style={{ display: "none" }}
                  />
                  <div id="results" className="animate-bottom">
                    <ul className="column cities">
                      <li className="selected">
                        <a
                          className="selectme"
                          data-id="us"
                          data-name="All India"
                          data-type="country"
                        >
                          <strong>All India</strong>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.01"
                          data-id="IN.01"
                          data-name="Andaman and Nicobar"
                        >
                          <span>
                            Andaman and Nicobar <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.02"
                          data-id="IN.02"
                          data-name="Andhra Pradesh"
                        >
                          <span>
                            Andhra Pradesh <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.30"
                          data-id="IN.30"
                          data-name="Arunachal Pradesh"
                        >
                          <span>
                            Arunachal Pradesh <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.03"
                          data-id="IN.03"
                          data-name="Assam"
                        >
                          <span>
                            Assam <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.34"
                          data-id="IN.34"
                          data-name="Bihar"
                        >
                          <span>
                            Bihar <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.05"
                          data-id="IN.05"
                          data-name="Chandigarh"
                        >
                          <span>
                            Chandigarh <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.37"
                          data-id="IN.37"
                          data-name="Chhattisgarh"
                        >
                          <span>
                            Chhattisgarh <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.52"
                          data-id="IN.52"
                          data-name="Dadra and Nagar Haveli and Daman and Diu"
                        >
                          <span>
                            Dadra and Nagar Haveli and Daman and Diu{" "}
                            <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.07"
                          data-id="IN.07"
                          data-name="Delhi"
                        >
                          <span>
                            Delhi <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.33"
                          data-id="IN.33"
                          data-name="Goa"
                        >
                          <span>
                            Goa <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.09"
                          data-id="IN.09"
                          data-name="Gujarat"
                        >
                          <span>
                            Gujarat <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.10"
                          data-id="IN.10"
                          data-name="Haryana"
                        >
                          <span>
                            Haryana <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.11"
                          data-id="IN.11"
                          data-name="Himachal Pradesh"
                        >
                          <span>
                            Himachal Pradesh <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.12"
                          data-id="IN.12"
                          data-name="Jammu and Kashmir"
                        >
                          <span>
                            Jammu and Kashmir <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.38"
                          data-id="IN.38"
                          data-name="Jharkhand"
                        >
                          <span>
                            Jharkhand <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.19"
                          data-id="IN.19"
                          data-name="Karnataka"
                        >
                          <span>
                            Karnataka <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.13"
                          data-id="IN.13"
                          data-name="Kerala"
                        >
                          <span>
                            Kerala <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.14"
                          data-id="IN.14"
                          data-name="Laccadives"
                        >
                          <span>
                            Laccadives <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.41"
                          data-id="IN.41"
                          data-name="Ladakh"
                        >
                          <span>
                            Ladakh <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.35"
                          data-id="IN.35"
                          data-name="Madhya Pradesh"
                        >
                          <span>
                            Madhya Pradesh <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.16"
                          data-id="IN.16"
                          data-name="Maharashtra"
                        >
                          <span>
                            Maharashtra <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.17"
                          data-id="IN.17"
                          data-name="Manipur"
                        >
                          <span>
                            Manipur <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.18"
                          data-id="IN.18"
                          data-name="Meghalaya"
                        >
                          <span>
                            Meghalaya <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.31"
                          data-id="IN.31"
                          data-name="Mizoram"
                        >
                          <span>
                            Mizoram <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.20"
                          data-id="IN.20"
                          data-name="Nagaland"
                        >
                          <span>
                            Nagaland <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.21"
                          data-id="IN.21"
                          data-name="Odisha"
                        >
                          <span>
                            Odisha <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.22"
                          data-id="IN.22"
                          data-name="Puducherry"
                        >
                          <span>
                            Puducherry <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.23"
                          data-id="IN.23"
                          data-name="Punjab"
                        >
                          <span>
                            Punjab <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.24"
                          data-id="IN.24"
                          data-name="Rajasthan"
                        >
                          <span>
                            Rajasthan <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.29"
                          data-id="IN.29"
                          data-name="Sikkim"
                        >
                          <span>
                            Sikkim <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.25"
                          data-id="IN.25"
                          data-name="Tamil Nadu"
                        >
                          <span>
                            Tamil Nadu <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.40"
                          data-id="IN.40"
                          data-name="Telangana"
                        >
                          <span>
                            Telangana <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.26"
                          data-id="IN.26"
                          data-name="Tripura"
                        >
                          <span>
                            Tripura <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.36"
                          data-id="IN.36"
                          data-name="Uttar Pradesh"
                        >
                          <span>
                            Uttar Pradesh <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.39"
                          data-id="IN.39"
                          data-name="Uttarakhand"
                        >
                          <span>
                            Uttarakhand <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="statedata"
                          id="regionIN.28"
                          data-id="IN.28"
                          data-name="West Bengal"
                        >
                          <span>
                            West Bengal <i className="fa fa-angle-right" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="table full subregionslinks hidden"
                  id="subregionslinks"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
      {/* Wrapper / End */}
      <div className="cookieConsentContainer">
        <div className="cookieTitle">
          <h3>Cookies</h3>
        </div>
        <div className="cookieDesc">
          <p>
            This website uses cookies to ensure you get the best experience on our
            website.
            <a href="http://localhost/quickad/">Cookie Policy</a>
          </p>
        </div>
        <div className="cookieButton">
          <a href="javascript:void(0)" className="button cookieAcceptButton">
            Accept
          </a>
        </div>
      </div>
    </>
  )
}

