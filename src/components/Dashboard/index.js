import React from 'react'
import DashboardAdsContainer from './DashboardAdsContainer'

const index = () => {
    return (
        <>
            <>
                <div id="titlebar" className="margin-bottom-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Post An Advertise</h2>
                                {/* Breadcrumbs */}
                                <nav id="breadcrumbs">
                                    <ul>
                                        <li>
                                            <a href="https://buynsell.mchamp.xyz">Home</a>
                                        </li>
                                        <li>Post An Advertise</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Select Category Modal */}
                <div
                    className="zoom-anim-dialog mfp-hide popup-dialog big-dialog"
                    id="categoryModal"
                >
                    <div className="popup-tab-content padding-0 tg-thememodal tg-categorymodal">
                        <div className="tg-thememodaldialog">
                            <div className="tg-thememodalcontent">
                                <div className="tg-title">
                                    <strong>Select Category</strong>
                                </div>
                                <div
                                    id="tg-dbcategoriesslider"
                                    className="tg-dbcategoriesslider tg-categories owl-carousel select-category post-option"
                                >
                                    <div
                                        className="tg-category"
                                        data-ajax-catid={8}
                                        data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                        data-cat-name="Entertainment"
                                    >
                                        <div className="tg-categoryholder">
                                            <div className="margin-bottom-10">
                                                <img src="https://img.icons8.com/dusk/64/000000/dancing.png" />
                                            </div>
                                            <h3>
                                                <a href="javascript:void()">Entertainment</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className="tg-category"
                                        data-ajax-catid={7}
                                        data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                        data-cat-name="Services"
                                    >
                                        <div className="tg-categoryholder">
                                            <div className="margin-bottom-10">
                                                <img src="https://img.icons8.com/dusk/64/000000/services.png" />
                                            </div>
                                            <h3>
                                                <a href="javascript:void()">Services</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className="tg-category"
                                        data-ajax-catid={6}
                                        data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                        data-cat-name="Jobs"
                                    >
                                        <div className="tg-categoryholder">
                                            <div className="margin-bottom-10">
                                                <img src="https://img.icons8.com/dusk/64/000000/find-matching-job.png" />
                                            </div>
                                            <h3>
                                                <a href="javascript:void()">Jobs</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className="tg-category"
                                        data-ajax-catid={5}
                                        data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                        data-cat-name="Home & Lifestyle"
                                    >
                                        <div className="tg-categoryholder">
                                            <div className="margin-bottom-10">
                                                <img src="https://img.icons8.com/dusk/64/000000/home-page.png" />
                                            </div>
                                            <h3>
                                                <a href="javascript:void()">Home &amp; Lifestyle</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className="tg-category"
                                        data-ajax-catid={4}
                                        data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                        data-cat-name="Real Estate"
                                    >
                                        <div className="tg-categoryholder">
                                            <div className="margin-bottom-10">
                                                <img src="https://img.icons8.com/dusk/64/000000/real-estate.png" />
                                            </div>
                                            <h3>
                                                <a href="javascript:void()">Real Estate</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className="tg-category"
                                        data-ajax-catid={3}
                                        data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                        data-cat-name="Electronics & Appliances"
                                    >
                                        <div className="tg-categoryholder">
                                            <div className="margin-bottom-10">
                                                <img src="https://img.icons8.com/dusk/64/000000/tv.png" />
                                            </div>
                                            <h3>
                                                <a href="javascript:void()">Electronics &amp; Appliances</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className="tg-category"
                                        data-ajax-catid={2}
                                        data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                        data-cat-name="Mobiles & Tablets"
                                    >
                                        <div className="tg-categoryholder">
                                            <div className="margin-bottom-10">
                                                <img src="https://img.icons8.com/dusk/64/000000/two-smartphones.png" />
                                            </div>
                                            <h3>
                                                <a href="javascript:void()">Mobiles &amp; Tablets</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        className="tg-category"
                                        data-ajax-catid={1}
                                        data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                        data-cat-name="Cars & Bikes"
                                    >
                                        <div className="tg-categoryholder">
                                            <div className="margin-bottom-10">
                                                <img src="https://img.icons8.com/dusk/64/000000/traffic-jam.png" />
                                            </div>
                                            <h3>
                                                <a href="javascript:void()">Cars &amp; Bikes</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <ul className="tg-subcategories" style={{ display: "none" }}>
                                    <li>
                                        <div className="tg-title">
                                            <strong>Select a subcategory</strong>
                                            <div
                                                id="sub-category-loader"
                                                style={{ visibility: "hidden" }}
                                            />
                                        </div>
                                        <div className=" tg-verticalscrollbar tg-dashboardscrollbar">
                                            <ul id="sub_category"></ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Select Category Modal */}
                <div className="section gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-md-12">
                                <div id="post_error" />
                                <div
                                    className="payment-confirmation-page dashboard-box margin-top-0 padding-top-0 margin-bottom-50"
                                    style={{ display: "none" }}
                                >
                                    <div className="headline">
                                        <h3>Success</h3>
                                    </div>
                                    <div className="content with-padding padding-bottom-10">
                                        <i className="la la-check-circle" />
                                        <h1 className="margin-top-30 margin-bottom-30">Success</h1>
                                        <p>
                                            Your listing succussfully uploaded. Please wait for approval.
                                            Thanks
                                        </p>
                                    </div>
                                </div>
                                <form
                                    className="form-validate"
                                    id="post-advertise-form"
                                    action="https://buynsell.mchamp.xyz/posts"
                                    method="POST"
                                    encType="multipart/form-data"
                                    acceptCharset="UTF-8"
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        defaultValue="CSZT0dSxI3zWz7wSZzCWAuuwH309VAbFLTpm5UZQ"
                                    />{" "}
                                    <div className="dashboard-box margin-top-0">
                                        {/* Headline */}
                                        <div className="headline">
                                            <h3>
                                                <i className="icon-feather-briefcase" /> Listing Details
                                            </h3>
                                        </div>
                                        <div className="content with-padding padding-bottom-10">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="form-group text-center">
                                                        <a
                                                            href="#categoryModal"
                                                            id="choose-category"
                                                            className="button popup-with-zoom-anim"
                                                        >
                                                            <i className="icon-feather-check-circle" /> &nbsp;Choose
                                                            Category
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="form-group selected-product"
                                                        id="change-category-btn"
                                                        style={{ display: "none" }}
                                                    >
                                                        <ul className="select-category list-inline">
                                                            <li id="main-category-text" />
                                                            <li id="sub-category-text" />
                                                            <li className="active">
                                                                <a
                                                                    href="#categoryModal"
                                                                    className="popup-with-zoom-anim"
                                                                >
                                                                    <i className="icon-feather-edit" /> Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <input
                                                            type="hidden"
                                                            id="input-maincatid"
                                                            name="category"
                                                            defaultValue=""
                                                        />
                                                        <input
                                                            type="hidden"
                                                            id="input-subcatid"
                                                            name="sub_category"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                    <div className="submit-field">
                                                        <h5>Title *</h5>
                                                        <input
                                                            type="text"
                                                            className="with-border"
                                                            name="title"
                                                            placeholder="Title for your listing"
                                                        />
                                                    </div>
                                                    <div className="submit-field">
                                                        <h5>Description *</h5>
                                                        <textarea
                                                            cols={30}
                                                            rows={5}
                                                            className="with-border text-editor"
                                                            name="description"
                                                            placeholder="Tell us more about your listing"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <div className="submit-field" id="quickad-photo-field">
                                                        <h5>Upload Images</h5>
                                                        <input
                                                            type="file"
                                                            className="quickImageUpload"
                                                            name="image[]"
                                                            multiple=""
                                                            data-allow-reorder="true"
                                                            data-max-file-size="3MB"
                                                            data-max-files={4}
                                                        />
                                                    </div>
                                                    <div
                                                        id="ResponseCustomFields"
                                                        className="submit-field"
                                                    ></div>
                                                    <div className="submit-field" id="quickad-price-field">
                                                        <h5>Price</h5>
                                                        <div className="row">
                                                            <div className="col-xl-6 col-md-12">
                                                                <div className="input-with-icon">
                                                                    <input
                                                                        className="with-border"
                                                                        type="text"
                                                                        placeholder="Price"
                                                                        name="price"
                                                                    />
                                                                    <i className="currency">INR</i>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-md-12 margin-top-12">
                                                                <div className="checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="negotiable"
                                                                        name="negotiable"
                                                                        defaultValue={1}
                                                                    />
                                                                    <label htmlFor="negotiable">
                                                                        <span className="checkbox-icon" /> Negotiable
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="submit-field">
                                                        <h5>Phone Number</h5>
                                                        <div className="row">
                                                            <div className="col-xl-6 col-md-12">
                                                                <div className="input-with-icon-left">
                                                                    <i className="flag-img">
                                                                        <img src="https://buynsell.mchamp.xyz/assets/global/plugins/flags/images/in.png" />
                                                                    </i>
                                                                    <input
                                                                        type="text"
                                                                        className="with-border"
                                                                        name="phone"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-md-12">
                                                                <div className="checkbox margin-top-12">
                                                                    <input
                                                                        type="checkbox"
                                                                        name="hide_phone"
                                                                        id="phone"
                                                                        defaultValue={1}
                                                                    />
                                                                    <label htmlFor="phone">
                                                                        <span className="checkbox-icon" /> Hide
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="submit-field">
                                                        <h5>City *</h5>
                                                        <select
                                                            id="jobcity"
                                                            data-action="searchCityFromCountry"
                                                            className="with-border"
                                                            name="city"
                                                            data-size={7}
                                                            title="Select City"
                                                        >
                                                            <option value="" selected="selected">
                                                                Select City
                                                            </option>
                                                        </select>
                                                    </div>
                                                    {/* Location */}
                                                    <div className="submit-field">
                                                        <h5>Address</h5>
                                                        <div className="input-with-icon">
                                                            <div
                                                                id="autocomplete-container"
                                                                data-autocomplete-tip="type and hit enter"
                                                            >
                                                                <input
                                                                    className="with-border"
                                                                    type="text"
                                                                    placeholder="Address"
                                                                    name="location"
                                                                    id="address-autocomplete"
                                                                />
                                                            </div>
                                                            <div className="geo-location">
                                                                <i className="la la-crosshairs" />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="map shadow"
                                                            id="singleListingMap"
                                                            data-latitude="20.593684"
                                                            data-longitude="78.962880"
                                                            style={{ height: 200 }}
                                                            data-map-icon="map-marker"
                                                        />
                                                        <small className="d-none">
                                                            Drag the map marker to exact address
                                                        </small>
                                                        <input
                                                            type="hidden"
                                                            id="latitude"
                                                            name="latitude"
                                                            defaultValue="20.593684"
                                                        />
                                                        <input
                                                            type="hidden"
                                                            id="longitude"
                                                            name="longitude"
                                                            defaultValue="78.962880"
                                                        />
                                                    </div>
                                                    <div className="submit-field form-group">
                                                        <h5>Tags</h5>
                                                        <input className="with-border" type="text" name="tags" />
                                                        <small>Enter the tags separated by commas.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashboard-box">
                                        <div className="headline">
                                            <h3>
                                                <i className="icon-feather-zap" /> Make your listing premium{" "}
                                                <small>(Optional)</small>
                                            </h3>
                                        </div>
                                        <div className="content with-padding">
                                            <div className="payment">
                                                <div className="payment-tab payment-tab-active">
                                                    <div className="payment-tab-trigger">
                                                        <input
                                                            defaultChecked=""
                                                            id="free"
                                                            name="make_premium"
                                                            type="radio"
                                                            defaultValue={0}
                                                        />
                                                        <label htmlFor="free">Free Listing</label>
                                                    </div>
                                                    <div className="payment-tab-content">
                                                        <p>Your ad will go live after check by reviewer.</p>
                                                    </div>
                                                </div>
                                                <div className="payment-tab">
                                                    <div className="payment-tab-trigger">
                                                        <input
                                                            type="radio"
                                                            name="make_premium"
                                                            id="make_premium"
                                                            defaultValue={1}
                                                        />
                                                        <label htmlFor="make_premium">
                                                            Premium{" "}
                                                            <span className="badge green pull-right">
                                                                Recommended
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="payment-tab-content">
                                                        <p>
                                                            You can optionally select some upgrades to get the best
                                                            results.
                                                        </p>
                                                        <div className="row premium-plans">
                                                            <div className="col-lg-3">
                                                                <div className="checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="featured"
                                                                        name="featured"
                                                                        defaultValue={1}
                                                                        onchange="fillPrice(this,10);"
                                                                    />
                                                                    <label htmlFor="featured">
                                                                        <span className="checkbox-icon" />{" "}
                                                                        <span className="badge blue">Featured</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 premium-plans-text">
                                                                Featured ads attract higher-quality viewer and are
                                                                displayed prominently in the Featured ads section home
                                                                page.
                                                            </div>
                                                            <div className="col-lg-3 premium-plans-price">
                                                                $10.00
                                                            </div>
                                                        </div>
                                                        <div className="row premium-plans">
                                                            <div className="col-lg-3">
                                                                <div className="checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="urgent"
                                                                        name="urgent"
                                                                        defaultValue={1}
                                                                        onchange="fillPrice(this,10);"
                                                                    />
                                                                    <label htmlFor="urgent">
                                                                        <span className="checkbox-icon" />{" "}
                                                                        <span className="badge yellow">Urgent</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 premium-plans-text">
                                                                Make your ad stand out and let viewer know that your
                                                                advertise is time sensitive.
                                                            </div>
                                                            <div className="col-lg-3 premium-plans-price">
                                                                $10.00
                                                            </div>
                                                        </div>
                                                        <div className="row premium-plans">
                                                            <div className="col-lg-3">
                                                                <div className="checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="highlight"
                                                                        name="highlight"
                                                                        defaultValue={1}
                                                                        onchange="fillPrice(this,10);"
                                                                    />
                                                                    <label htmlFor="highlight">
                                                                        <span className="checkbox-icon" />{" "}
                                                                        <span className="badge red">Highlight</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 premium-plans-text">
                                                                Make your ad highlighted with border in listing search
                                                                result page. Easy to focus.
                                                            </div>
                                                            <div className="col-lg-3 premium-plans-price">
                                                                $10.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="submit" />
                                    <div className="form-group margin-top-30 margin-bottom-15">
                                        <div className="text-center"></div>
                                    </div>
                                    <div className="checkbox">
                                        <input
                                            type="checkbox"
                                            id="agree_for_term"
                                            name="agree_for_term"
                                            defaultValue={1}
                                        />
                                        <label htmlFor="agree_for_term">
                                            <span className="checkbox-icon" /> I have read and agree to the
                                            Terms &amp; Conditions
                                        </label>
                                    </div>
                                    <div
                                        className="row margin-top-30 margin-bottom-80"
                                        style={{ alignItems: "center" }}
                                    >
                                        <div className="col-6">
                                            <button
                                                type="submit"
                                                id="submit_job_button"
                                                name="Submit"
                                                className="button ripple-effect big"
                                            >
                                                <i className="icon-feather-plus" /> Post Listing
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <div
                                                id="ad_total_cost_container"
                                                className="text-right"
                                                style={{ display: "none" }}
                                            >
                                                <strong>
                                                    Total:
                                                    <span id="totalPrice">0</span>
                                                    <span className="currency-code">USD</span>
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-4 hide-under-992px">
                                <div className="dashboard-box margin-top-0">
                                    {/* Headline */}
                                    <div className="headline">
                                        <h3>
                                            <i className="icon-feather-alert-circle" /> Tips!
                                        </h3>
                                    </div>
                                    <div className="content with-padding padding-bottom-10">
                                        <ul className="list-2">
                                            <li>Enter a brief description of the advertise.</li>
                                            <li>Add your product photo.</li>
                                            <li>Choose the correct category and sub-category of the ad.</li>
                                            <li>Check again before submit the ad.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>

    )
}

export default index




//  <div className="col-lg-9 col-md-12">
// <div className="dashboard-box margin-top-0">
//     <div className="content with-padding">
//         <div className="row dashboard-profile">
//             <div className="col-xl-6 col-md-6 col-sm-12">
//                 <div className="user-img">
//                     <img
//                         src="https://buynsell.mchamp.xyz/storage/profile/default_user.png"
//                         alt="user"
//                         className="img-responsive"
//                     />
//                 </div>
//                 <div>
//                     <h2>ritik</h2>
//                     <span>
//                         <i className="icon-feather-gift" />
//                         Membership : Free Plan
//                     </span>
//                     <br />
//                     <small>Username : ritik2024</small>
//                 </div>
//             </div>
//             <div className="col-xl-6 col-md-6 col-sm-12 text-right">
//                 <span className="dashboard-badge">
//                     <strong>0</strong>
//                     <i className="icon-feather-heart" /> Favorite Listings
//                 </span>
//                 <span className="dashboard-badge">
//                     <strong>0</strong>
//                     <i className="icon-feather-briefcase" /> My Listings
//                 </span>
//             </div>
//         </div>
//     </div>
// </div>
// {/* Dashboard Box */}
// <div className="dashboard-box main-box-in-row">
//     <div className="headline">
//         <h3>
//             <i className="icon-feather-bar-chart-2" /> This Month views
//         </h3>
//     </div>
//     <div className="content">
//         {/* Chart */}
//         <div className="chart">
//             <canvas id="chart" width={100} height={45} />
//         </div>
//     </div>
// </div>
// {/* Dashboard Box / End */}
// <center>
//     <div className="google-ads-728x90 margin-top-30 margin-bottom-30 my-4">
//         <img
//             src="https://via.placeholder.com/720x90"
//             width="100%"
//             height="100%"
//         />
//     </div>
// </center>
// </div> 