import React from 'react'

const index = () => {
    return (
        <>
            <div id="titlebar" className="margin-bottom-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Dashboard</h2>
                            {/* Breadcrumbs */}
                            <nav id="breadcrumbs">
                                <ul>
                                    <li>
                                        <a href="https://buynsell.mchamp.xyz">Home</a>
                                    </li>
                                    <li>Dashboard</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section gray padding-bottom-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="dashboard-sidebar">
                                <div className="dashboard-sidebar-inner">
                                    <div className="dashboard-nav-container">
                                        <a href="#" className="dashboard-responsive-nav-trigger">
                                            <span className="hamburger hamburger--collapse">
                                                <span className="hamburger-box">
                                                    <span className="hamburger-inner" />
                                                </span>
                                            </span>
                                            <span className="trigger-title">Dashboard Navigation</span>
                                        </a>
                                        <div className="dashboard-nav">
                                            <div className="dashboard-nav-inner">
                                                <ul data-submenu-title="My Account">
                                                    <li className="active">
                                                        <a href="https://buynsell.mchamp.xyz/dashboard">
                                                            <i className="icon-feather-grid" /> Dashboard
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/subscription">
                                                            <i className="icon-feather-gift" /> Membership
                                                        </a>
                                                    </li>
                                                    {/* /# QuickChatAjax Plugin*/}
                                                    {/* /# QuickChatAjax Plugin*/}
                                                </ul>
                                                <ul data-submenu-title="Organize and Manage">
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/posts/create">
                                                            <i className="icon-feather-plus-square" /> Post Ad
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/posts/my-listing">
                                                            <i className="icon-feather-briefcase" /> My Ads
                                                            <span className="nav-tag">0</span>
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/posts/status/active">
                                                            <i className="icon-feather-layers" /> Active Ads
                                                            <span className="nav-tag">0</span>
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/posts/status/pending">
                                                            <i className="icon-feather-clock" /> Pending Ads
                                                            <span className="nav-tag">0</span>
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/posts/status/expire">
                                                            <i className="icon-feather-alert-octagon" /> Expire
                                                            Ads<span className="nav-tag">0</span>
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/posts/status/rejected">
                                                            <i className="icon-feather-layers" /> Rejected Ads
                                                            <span className="nav-tag">0</span>
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/posts/status/hidden">
                                                            <i className="icon-feather-eye-off" /> Hidden Ads
                                                            <span className="nav-tag">0</span>
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/posts/my-favorite">
                                                            <i className="icon-feather-heart" /> Favorite Ads
                                                            <span className="nav-tag">0</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul data-submenu-title="Account">
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/transactions">
                                                            <i className="icon-feather-file-text" /> Transactions
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="https://buynsell.mchamp.xyz/settings">
                                                            <i className="icon-feather-settings" /> Account
                                                            Setting
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://buynsell.mchamp.xyz/logout"
                                                            onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                                                        >
                                                            <i className="icon-feather-log-out" /> Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="dashboard-box margin-top-0">
                                <div className="content with-padding">
                                    <div className="row dashboard-profile">
                                        <div className="col-xl-6 col-md-6 col-sm-12">
                                            <div className="user-img">
                                                <img
                                                    src="https://buynsell.mchamp.xyz/storage/profile/default_user.png"
                                                    alt="user"
                                                    className="img-responsive"
                                                />
                                            </div>
                                            <div>
                                                <h2>ritik</h2>
                                                <span>
                                                    <i className="icon-feather-gift" />
                                                    Membership : Free Plan
                                                </span>
                                                <br />
                                                <small>Username : ritik2024</small>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-6 col-sm-12 text-right">
                                            <span className="dashboard-badge">
                                                <strong>0</strong>
                                                <i className="icon-feather-heart" /> Favorite Listings
                                            </span>
                                            <span className="dashboard-badge">
                                                <strong>0</strong>
                                                <i className="icon-feather-briefcase" /> My Listings
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Box */}
                            <div className="dashboard-box main-box-in-row">
                                <div className="headline">
                                    <h3>
                                        <i className="icon-feather-bar-chart-2" /> This Month views
                                    </h3>
                                </div>
                                <div className="content">
                                    {/* Chart */}
                                    <div className="chart">
                                        <canvas id="chart" width={100} height={45} />
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Box / End */}
                            <center>
                                <div className="google-ads-728x90 margin-top-30 margin-bottom-30 my-4">
                                    <img
                                        src="https://via.placeholder.com/720x90"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default index