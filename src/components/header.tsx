"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="rts-header style-one header__default">
      {/* HEADER TOP AREA */}
      <div className="rts-ht rts-ht__bg">
        <div className="container">
          <div className="row">
            <div className="rts-ht__wrapper">
              <div className="rts-ht__email">
                <Link href="mailto:contact@elitehost.com">
                  <Image src="/images/icon/email.svg" alt="email icon" width={16} height={16} className="icon" />
                  contact@elitehost.com
                </Link>
              </div>
              <div className="rts-ht__promo">
                <p>
                  <Image src="/images/icon/tag--group.svg" alt="tag icon" width={16} height={16} className="icon" />
                  Hosting Flash Sale: Starting at <strong>$2.59/mo</strong> for a limited time
                </p>
              </div>
              <div className="rts-ht__links">
                <div className="live-chat-has-dropdown">
                  <Link href="#">
                    <Image src="/images/icon/forum.svg" alt="chat icon" width={16} height={16} className="icon" />
                    Live Chat
                  </Link>
                </div>
                <div
                  className="login-btn-has-dropdown"
                  onMouseEnter={() => setLoginOpen(true)}
                  onMouseLeave={() => setLoginOpen(false)}
                >
                  <Link href="#">
                    <Image src="/images/icon/person.svg" alt="login icon" width={16} height={16} className="icon" />
                    Login
                  </Link>
                  {loginOpen && (
                    <div className="login-submenu">
                      <form action="#">
                        <div className="form-inner">
                          <div className="single-wrapper">
                            <input type="email" placeholder="Your email" required />
                          </div>
                          <div className="single-wrapper">
                            <input type="password" placeholder="Password" required />
                          </div>
                          <div className="form-btn">
                            <button type="submit" className="primary__btn">Log In</button>
                          </div>
                          <Link href="#" className="forgot-password">Forgot your password?</Link>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HEADER TOP AREA END */}

      <div className="container">
        <div className="row">
          <div className="rts-header__wrapper">
            <div className="header-wrapper-left d-flex align-items-center">
              {/* LOGO */}
              <div className="rts-header__logo">
                <Link href="/" className="site-logo">
                  <Image src="/images/logo/logo-1.svg" alt="elitehost" width={150} height={40} className="logo-white" />
                  <Image src="/images/logo/logo-1.svg" alt="elitehost" width={150} height={40} className="logo-dark" />
                </Link>
              </div>

              {/* MENU */}
              <nav className="rts-header__menu" id="mobile-menu">
                <div className="elitehost-menu">
                  <ul className="list-unstyled elitehost-desktop-menu">
                    {/* Home */}
                    <li className="menu-item elitehost-has-dropdown">
                      <Link href="#" className="elitehost-dropdown-main-element">Home</Link>
                      <div className="has-homemenu">
                        <div className="row gx-5 row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-6">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div className="col homemenu" key={i}>
                              <div className="homemenu-thumb mb-15">
                                <Link href={`/index${i === 1 ? "" : `-${i}`}.html`}>
                                  <Image src={`/images/home/home-${i}.webp`} alt={`Home ${i}`} width={160} height={100} />
                                </Link>
                              </div>
                              <div className="homemenu-content text-center">
                                <h4 className="homemenu-title">
                                  <Link href={`/index${i === 1 ? "" : `-${i}`}.html`}>Home 0{i}</Link>
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    {/* Pages Mega Menu */}
                    <li className="menu-item elitehost-has-dropdown mega-menu big">
                      <Link href="#" className="elitehost-dropdown-main-element">Pages</Link>
                      <div className="rts-mega-menu">
                        <div className="wrapper">
                          <div className="row g-0">
                            {[
                              [
                                { href: "about.html", icon: "01.svg", title: "About Elitehost", desc: "Get know about Elitehost" },
                                { href: "pricing.html", icon: "03.svg", title: "Pricing", desc: "Elitehost provide pro price" },
                                { href: "blog.html", icon: "07.svg", title: "Blog", desc: "Read Elitehost article" },
                              ],
                              [
                                { href: "support.html", icon: "08.svg", title: "Support", desc: "Provide detailed explan" },
                                { href: "sign-up.html", icon: "09.svg", title: "Sign Up", desc: "Register Account" },
                                { href: "blog-list.html", icon: "07.svg", title: "Blog List", desc: "Read Elitehost article" },
                              ],
                              [
                                { href: "domain-checker.html", icon: "12.svg", title: "Domain Checker", desc: "Provide detailed explain" },
                                { href: "sign-in.html", icon: "09.svg", title: "Sign In", desc: "Login Account" },
                                { href: "blog-details.html", icon: "07.svg", title: "Blog Details", desc: "Read Elitehost article" },
                              ],
                              [
                                { href: "contact.html", icon: "16.svg", title: "Contact", desc: "Contact with Elitehost" },
                                { href: "knowledgebase.html", icon: "11.svg", title: "Knowledgebase", desc: "Read Elitehost article" },
                                { href: "404.html", icon: "19.svg", title: "Error", desc: "Back to home" },
                              ]
                            ].map((column, colIndex) => (
                              <div className="col-lg-3" key={colIndex}>
                                <ul className="mega-menu-item">
                                  {column.map((item, idx) => (
                                    <li key={idx}>
                                      <Link href={item.href}>
                                        <Image src={`/images/mega-menu/${item.icon}`} alt="icon" width={40} height={40} />
                                        <div className="info">
                                          <p>{item.title}</p>
                                          <span>{item.desc}</span>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Hosting Mega Menu */}
                    <li className="menu-item elitehost-has-dropdown mega-menu">
                      <Link href="#" className="elitehost-dropdown-main-element">Hosting</Link>
                      <div className="rts-mega-menu">
                        <div className="wrapper">
                          <div className="row g-0">
                            {[
                              [
                                { href: "shared-hosting.html", icon: "22.svg", title: "Shared Hosting", desc: "Manage Shared Hosting" },
                                { href: "wordpress-hosting.html", icon: "23.svg", title: "WordPress Hosting", desc: "WordPress Hosting speed" },
                                { href: "vps-hosting.html", icon: "24.svg", title: "VPS Hosting", desc: "Dedicated resources" },
                              ],
                              [
                                { href: "reseller-hosting.html", icon: "25.svg", title: "Reseller Hosting", desc: "Earn additional revenue" },
                                { href: "dedicated-hosting.html", icon: "27.svg", title: "Dedicated Hosting", desc: "Hosting that gives you tools" },
                                { href: "cloud-hosting.html", icon: "29.svg", title: "Cloud Hosting", desc: "Manage Cloud Hosting" },
                              ]
                            ].map((column, colIndex) => (
                              <div className="col-lg-6" key={colIndex}>
                                <ul className="mega-menu-item">
                                  {column.map((item, idx) => (
                                    <li key={idx}>
                                      <Link href={item.href}>
                                        <Image src={`/images/mega-menu/${item.icon}`} alt="icon" width={40} height={40} />
                                        <div className="info">
                                          <p>{item.title}</p>
                                          <span>{item.desc}</span>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Features */}
                    <li className="menu-item elitehost-has-dropdown">
                      <Link href="#" className="elitehost-dropdown-main-element">Features</Link>
                      <ul className="elitehost-submenu list-unstyled menu-pages">
                        <li className="nav-item"><Link href="https://hostie-whmcs.themewant.com/?systpl=elitehost" target="_blank" className="nav-link">WHMCS Template</Link></li>
                        <li className="nav-item"><Link href="https://hostie-whmcs.themewant.com/index.php/store/shared-hosting?systpl=elitehost" target="_blank" className="nav-link">Shared Hosting</Link></li>
                        <li className="nav-item"><Link href="https://hostie-whmcs.themewant.com/index.php/store/vps-hosting?systpl=elitehost" target="_blank" className="nav-link">VPS Hosting</Link></li>
                        <li className="nav-item"><Link href="https://hostie-whmcs.themewant.com/index.php/announcements?systpl=elitehost" target="_blank" className="nav-link">Announcement</Link></li>
                      </ul>
                    </li>

                    {/* Help Center */}
                    <li className="menu-item elitehost-has-dropdown">
                      <Link href="#" className="elitehost-dropdown-main-element">Help Center</Link>
                      <ul className="elitehost-submenu list-unstyled menu-pages">
                        <li className="nav-item"><Link href="faq.html" className="nav-link">FAQ</Link></li>
                        <li className="nav-item"><Link href="support.html" className="nav-link">Support</Link></li>
                        <li className="nav-item"><Link href="contact.html" className="nav-link">Contact</Link></li>
                        <li className="nav-item"><Link href="knowledgebase.html" className="nav-link">Knowledgebase</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* HEADER RIGHT */}
            <div className="rts-header__right d-flex">
              <ul className="rts-dropdown-menu switcher-currency">
                <li className="has-child-menu">
                  <a href="#"><span className="menu-item">USD</span> <i className="fa-regular fa-chevron-down"></i></a>
                  <ul className="sub-menu">
                    <li><a href="#"><span className="menu-item">Euro</span></a></li>
                    <li><a href="#"><span className="menu-item">Real</span></a></li>
                    <li><a href="#"><span className="menu-item">Ruble</span></a></li>
                  </ul>
                </li>
              </ul>
              <a href="https://hostie-whmcs.themewant.com/?systpl=elitehost" className="login__btn" target="_blank" rel="noopener noreferrer">Client Area</a>
              <button id="menu-btn" aria-label="Menu" className="mobile__active menu-btn">
                <i className="fa-sharp fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
