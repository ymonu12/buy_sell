import React from 'react'

const Header = () => {
  return (
   <>
   <header id="header-container" className="transparent header-section">
            {/* Header */}
            <div id="header" className=''>
              <div className="container">
                <div className="left-side">
                  <div id="logo">
                    <a href="https://buynsell.mchamp.xyz">
                      <img
                        src="https://buynsell.mchamp.xyz/storage/logo/classic-theme_logo.png"
                        data-sticky-logo="https://buynsell.mchamp.xyz/storage/logo/classic-theme_logo.png"
                        data-transparent-logo="https://buynsell.mchamp.xyz/storage/logo/classic-theme_footer_logo.png"
                        alt="Quickad Classified Pro"
                      />
                    </a>
                  </div>
                  <nav className="navigation">
                    <ul>
                      <li>
                        <a
                          href="#countryModal"
                          className="country-flag popup-with-zoom-anim"
                          title="Change Country"
                          data-tippy-placement="right"
                        >
                          <img src="https://buynsell.mchamp.xyz/assets/global/plugins/flags/images/in.png" />
                        </a>
                      </li>
                      <li className="d-none d-lg-block">
                        <a href="https://buynsell.mchamp.xyz/listing">
                        <i class="bi bi-list-task"></i> Find Ads
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="clearfix" />
                  {/* Mobile Navigation */}
                  <nav className="mmenu-init">
                    <ul className="mm-listview">
                      <li>
                        <a
                          href="https://buynsell.mchamp.xyz/posts/create"
                          className="button ripple-effect"
                        >
                          Post Free Ad
                        </a>
                      </li>
                      <li>
                        <a href="https://buynsell.mchamp.xyz/listing">Find Ads</a>
                      </li>
                      <li>
                        <a href="https://buynsell.mchamp.xyz/dashboard">Dashboard</a>
                      </li>
                      <li>
                        <a href="https://buynsell.mchamp.xyz/profile/Avd12">
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a href="https://buynsell.mchamp.xyz/dashboard">My Ads</a>
                      </li>
                      <li>
                        <a href="https://buynsell.mchamp.xyz/subscription">
                          Membership
                        </a>
                      </li>
                      <li>
                        <a href="https://buynsell.mchamp.xyz/transactions">
                          Transactions
                        </a>
                      </li>
                      <li>
                        <a href="https://buynsell.mchamp.xyz/settings">Settings</a>
                      </li>
                      <li>
                        <a
                          href="https://buynsell.mchamp.xyz/logout"
                          onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                        >
                          <i class="bi bi-box-arrow-in-right"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="right-side">
                  <div className="header-widget padding-right-0 d-none d-lg-block">
                    <div className="header-notifications user-menu">
                      <div className="header-notifications-trigger">
                        <a href="#">
                          <i className="icon-feather-user" /> Avd12
                          <i className="icon-feather-chevron-down" />
                        </a>
                      </div>
                      <div className="header-notifications-dropdown">
                        <ul className="user-menu-small-nav">
                          <li>
                            <a href="https://buynsell.mchamp.xyz/dashboard">
                              <i className="icon-feather-grid" /> Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="https://buynsell.mchamp.xyz/posts/create">
                              <i className="icon-feather-plus-square" /> Post Ad
                            </a>
                          </li>
                          <li>
                            <a href="https://buynsell.mchamp.xyz/posts/my-listing">
                              <i className="icon-feather-layers" /> My Listings
                            </a>
                          </li>
                          <li>
                            <a href="https://buynsell.mchamp.xyz/subscription">
                              <i className="icon-feather-gift" /> Membership
                            </a>
                          </li>
                          <li>
                            <a href="https://buynsell.mchamp.xyz/transactions">
                              <i className="icon-feather-file-text" /> Transactions
                            </a>
                          </li>
                          <li>
                            <a href="https://buynsell.mchamp.xyz/settings">
                              <i className="icon-feather-settings" /> Account Setting
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
                        <form
                          id="logout-form"
                          className="d-inline"
                          action="https://buynsell.mchamp.xyz/logout"
                          method="POST"
                        >
                          <input
                            type="hidden"
                            name="_token"
                            defaultValue="lgumKzv9cbW0wssWr66dBZOSO6j8UTomAEPytc4j"
                          />{" "}
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="header-widget d-none d-lg-block">
                    <nav className="navigation">
                      <ul>
                        <li>
                          <a
                            href="https://buynsell.mchamp.xyz/posts/create"
                            className="button ripple-effect post-job"
                          >
                            Post Free Ad
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-widget">
                    <div className="btn-group bootstrap-select language-switcher">
                      <button
                        type="button"
                        className="btn dropdown-toggle btn-default"
                        data-toggle="dropdown"
                        title="English"
                      >
                        <span className="filter-option pull-left" id="selected_lang">
                          EN
                        </span>
                        &nbsp;
                        <span className="caret" />
                      </button>
                      <div className="dropdown-menu scrollable-menu open">
                        <ul className="dropdown-menu inner">
                          <li data-lang="en">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              rel="alternate"
                              href="https://buynsell.mchamp.xyz/en"
                            >
                              English
                            </a>
                          </li>
                          <li data-lang="fr">
                            <a
                              role="menuitem"
                              tabIndex={-1}
                              rel="alternate"
                              href="https://buynsell.mchamp.xyz/fr"
                            >
                              French
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="mmenu-trigger">
                    <button className="hamburger hamburger--collapse" type="button">
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </header>
   </>
  )
}

export default Header
