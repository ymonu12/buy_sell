import React from 'react'

const Footer = () => {
  return (
    <>
       <div id="footer">
            {/* Footer Top Section */}
            <div className="footer-top-section">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    {/* Footer Rows Container */}
                    <div className="footer-rows-container">
                      {/* Left Side */}
                      <div className="footer-rows-left">
                        <div className="footer-row">
                          <div className="footer-row-inner footer-logo">
                            <img
                              src="https://buynsell.mchamp.xyz/storage/logo/classic-theme_footer_logo.png"
                              alt="Quickad Classified Pro"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Right Side */}
                      <div className="footer-rows-right">
                        {/* Social Icons */}
                        <div className="footer-row">
                          <div className="footer-row-inner">
                            <ul className="footer-social-links">
                              <li>
                                <a
                                  href="https://facebook.com/bylancer.in"
                                  target="_blank"
                                  rel="nofollow"
                                >
                                  <i className="fab fa-facebook" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://x.com/bylancer"
                                  target="_blank"
                                  rel="nofollow"
                                >
                                  <i className="fab fa-x" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://instagram.com/bylancer"
                                  target="_blank"
                                  rel="nofollow"
                                >
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://linkedin.com/bylancer"
                                  target="_blank"
                                  rel="nofollow"
                                >
                                  <i className="fab fa-linkedin" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://pinterest.com/bylancer"
                                  target="_blank"
                                  rel="nofollow"
                                >
                                  <i className="fab fa-pinterest" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/c/Bylancer"
                                  target="_blank"
                                  rel="nofollow"
                                >
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Footer Rows Container / End */}
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Top Section / End */}
            {/* Footer Middle Section */}
            <div className="footer-middle-section">
              <div className="container">
                <div className="row">
                  {/* Links */}
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="footer-links">
                      <h3>Helpful Links</h3>
                      <ul>
                        <li>
                          <a href="https://buynsell.mchamp.xyz/dashboard">
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="https://buynsell.mchamp.xyz/testimonials">
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a href="https://buynsell.mchamp.xyz/blog">Blog</a>
                        </li>
                        <li>
                          <a
                            href="https://buynsell.mchamp.xyz/logout"
                            onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Links */}
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="footer-links">
                      <h3>Contact</h3>
                      <ul>
                        <li>
                          <a href="https://buynsell.mchamp.xyz/faq">FAQ</a>
                        </li>
                        <li>
                          <a href="https://buynsell.mchamp.xyz/feedback">Feedback</a>
                        </li>
                        <li>
                          <a href="https://buynsell.mchamp.xyz/contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Newsletter */}
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <h3>
                      <i className="icon-feather-mail" /> Sign Up For a Newsletter
                    </h3>
                    <p>
                      Subscribe to our newsletter to stay informed about latest
                      updates
                    </p>
                    <form
                      action="https://buynsell.mchamp.xyz/newsletter"
                      method="post"
                      className="newsletter"
                      id="newsletter-form"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="lgumKzv9cbW0wssWr66dBZOSO6j8UTomAEPytc4j"
                      />{" "}
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="newsletter-email"
                        placeholder="Enter your email address"
                      />
                      <div className="invalid-tooltip" />
                      <div className="valid-tooltip d-none">
                        Subscribed Successfully.
                      </div>
                      <button type="submit">
                        <i className="icon-feather-arrow-right" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Middle Section / End */}
            {/* Footer Copyrights */}
            <div className="footer-bottom-section">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <span className="footer-copyright-text">
                      Copyright © 2024 Bylancer. All Rights Reserved.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Copyrights / End */}
          </div>
    
    </>
  )
}

export default Footer
