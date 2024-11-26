import React from 'react'

const HeroSec = () => {
    return (
        <>
            <div className="intro-banner"
                data-background-image={'bg.jpg'}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-headline">
                                <h3>
                                    <strong>Buy And Sell</strong>
                                    <br />
                                    <span>Search thousands of classifieds all in one place</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form
                                autoComplete="off"
                                method="get"
                                action="https://buynsell.mchamp.xyz/listing"
                                acceptCharset="UTF-8"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="lgumKzv9cbW0wssWr66dBZOSO6j8UTomAEPytc4j"
                                />{" "}
                                <div className="intro-banner-search-form margin-top-45">
                                    <div className="intro-search-field">
                                        <input
                                            id="intro-keywords"
                                            type="text"
                                            className="qucikad-ajaxsearch-input"
                                            placeholder="What are you looking for?"
                                            data-prev-value={0}
                                            data-noresult="More results for"
                                        />
                                        <i
                                            className="qucikad-ajaxsearch-close fa fa-times-circle"
                                            aria-hidden="true"
                                            style={{ display: "none" }}
                                        />
                                        <div id="qucikad-ajaxsearch-dropdown" size={0} tabIndex={0}>
                                            <ul>
                                                <li className="qucikad-ajaxsearch-li-cats" data-catid={1}>
                                                    <img
                                                        src="https://img.icons8.com/dusk/64/000000/traffic-jam.png"
                                                        alt="Cars & Bikes"
                                                    />
                                                    <span className="qucikad-as-cat">Cars &amp; Bikes</span>
                                                </li>
                                                <li className="qucikad-ajaxsearch-li-cats" data-catid={2}>
                                                    <img
                                                        src="https://img.icons8.com/dusk/64/000000/two-smartphones.png"
                                                        alt="Mobiles & Tablets"
                                                    />
                                                    <span className="qucikad-as-cat">
                                                        Mobiles &amp; Tablets
                                                    </span>
                                                </li>
                                                <li className="qucikad-ajaxsearch-li-cats" data-catid={3}>
                                                    <img
                                                        src="https://img.icons8.com/dusk/64/000000/tv.png"
                                                        alt="Electronics & Appliances"
                                                    />
                                                    <span className="qucikad-as-cat">
                                                        Electronics &amp; Appliances
                                                    </span>
                                                </li>
                                                <li className="qucikad-ajaxsearch-li-cats" data-catid={4}>
                                                    <img
                                                        src="https://img.icons8.com/dusk/64/000000/real-estate.png"
                                                        alt="Real Estate"
                                                    />
                                                    <span className="qucikad-as-cat">Real Estate</span>
                                                </li>
                                                <li className="qucikad-ajaxsearch-li-cats" data-catid={5}>
                                                    <img
                                                        src="https://img.icons8.com/dusk/64/000000/home-page.png"
                                                        alt="Home & Lifestyle"
                                                    />
                                                    <span className="qucikad-as-cat">
                                                        Home &amp; Lifestyle
                                                    </span>
                                                </li>
                                                <li className="qucikad-ajaxsearch-li-cats" data-catid={6}>
                                                    <img
                                                        src="https://img.icons8.com/dusk/64/000000/find-matching-job.png"
                                                        alt="Jobs"
                                                    />
                                                    <span className="qucikad-as-cat">Jobs</span>
                                                </li>
                                                <li className="qucikad-ajaxsearch-li-cats" data-catid={7}>
                                                    <img
                                                        src="https://img.icons8.com/dusk/64/000000/services.png"
                                                        alt="Services"
                                                    />
                                                    <span className="qucikad-as-cat">Services</span>
                                                </li>
                                                <li className="qucikad-ajaxsearch-li-cats" data-catid={8}>
                                                    <img
                                                        src="https://img.icons8.com/dusk/64/000000/dancing.png"
                                                        alt="Entertainment"
                                                    />
                                                    <span className="qucikad-as-cat">Entertainment</span>
                                                </li>
                                            </ul>
                                            <div style={{ display: "none" }} id="def-cats"></div>
                                        </div>
                                    </div>
                                    <div className="intro-search-field with-autocomplete live-location-search">
                                        <div className="input-with-icon">
                                            <input
                                                type="text"
                                                id="searchStateCity"
                                                name="location"
                                                placeholder="Where"
                                            />
                                            <i className="la la-map-marker" />
                                            <div data-option="yes" className="loc-tracking">
                                                <i className="fa fa-crosshairs" />
                                            </div>
                                            <input
                                                type="hidden"
                                                name="latitude"
                                                id="latitude"
                                                defaultValue=""
                                            />
                                            <input
                                                type="hidden"
                                                name="longitude"
                                                id="longitude"
                                                defaultValue=""
                                            />
                                            <input
                                                type="hidden"
                                                name="placetype"
                                                id="searchPlaceType"
                                                defaultValue=""
                                            />
                                            <input
                                                type="hidden"
                                                name="placeid"
                                                id="searchPlaceId"
                                                defaultValue=""
                                            />
                                            <input
                                                type="hidden"
                                                id="input-keywords"
                                                name="keywords"
                                                defaultValue=""
                                            />
                                            <input
                                                type="hidden"
                                                id="input-maincat"
                                                name="cat"
                                                defaultValue=""
                                            />
                                            <input
                                                type="hidden"
                                                id="input-subcat"
                                                name="subcat"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="intro-search-button">
                                        <button className="button ripple-effect">Search</button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center visible-md visible-lg" />
                            <div className="text-center visible-sm" />
                            <div className="text-center visible-xs" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSec
