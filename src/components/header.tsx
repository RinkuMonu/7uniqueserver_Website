// app/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="rts-header style-one header__default">
      {/* HEADER TOP AREA */}
      <div className="rts-ht rts-ht__bg">
        <div className="container">
          <div className="row">
            <div className="rts-ht__wrapper">
              <div className="rts-ht__email">
                <Link href="mailto:info@elitehost.com">
                  <Image src="/images/icon/email.svg" alt="email" width={16} height={16} className="icon" />
                  contact@elitehost.com
                </Link>
              </div>
              <div className="rts-ht__promo">
                <p>
                  <Image src="/images/icon/tag--group.svg" alt="promo" width={16} height={16} className="icon" />
                  Hosting Flash Sale: Starting at <strong>$2.59/mo</strong> for a limited time
                </p>
              </div>
              <div className="rts-ht__links">
                <div className="live-chat-has-dropdown">
                  <Link href="#" className="live__chat">
                    <Image src="/images/icon/forum.svg" alt="chat" width={16} height={16} className="icon" />
                    Live Chat
                  </Link>
                </div>
                <div className="login-btn-has-dropdown">
                  <Link href="#" className="login__link">
                    <Image src="/images/icon/person.svg" alt="login" width={16} height={16} className="icon" />
                    Login
                  </Link>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER MAIN */}
      <div className="container">
        <div className="row">
          <div className="rts-header__wrapper">
            <div className="header-wrapper-left d-flex align-items-center">
              <div className="rts-header__logo">
                <Link href="/" className="site-logo">
                  <Image className="logo-white" src="/images/logo/logo-1.svg" alt="elitehost" width={120} height={40} />
                  <Image className="logo-dark" src="/images/logo/logo-1.svg" alt="elitehost" width={120} height={40} />
                </Link>
              </div>
              <nav className="rts-header__menu" id="mobile-menu">
                <div className="elitehost-menu">
                  <ul className="list-unstyled elitehost-desktop-menu">
                    <li className="menu-item elitehost-has-dropdown">
                      <Link href="#" className="elitehost-dropdown-main-element">Home</Link>
                      {/* Insert homemenu content here if needed */}
                    </li>
                    <li className="menu-item elitehost-has-dropdown mega-menu big">
                      <Link href="#" className="elitehost-dropdown-main-element">Pages</Link>
                      {/* Insert mega menu content here if needed */}
                    </li>
                    <li className="menu-item elitehost-has-dropdown mega-menu">
                      <Link href="#" className="elitehost-dropdown-main-element">Hosting</Link>
                      {/* Insert hosting mega menu content */}
                    </li>
                    <li className="menu-item elitehost-has-dropdown">
                      <Link href="#" className="elitehost-dropdown-main-element">Features</Link>
                      {/* Insert submenu content */}
                    </li>
                    <li className="menu-item elitehost-has-dropdown">
                      <Link href="#" className="elitehost-dropdown-main-element">Help Center</Link>
                      {/* Insert submenu content */}
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="rts-header__right d-flex">
              <ul className="rts-dropdown-menu switcher-currency">
                <li className="has-child-menu">
                  <Link href="#">
                    <span className="menu-item">USD</span>
                    <i className="fa-regular fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li><Link href="#"><span className="menu-item">Euro</span></Link></li>
                    <li><Link href="#"><span className="menu-item">Real</span></Link></li>
                    <li><Link href="#"><span className="menu-item">Ruble</span></Link></li>
                  </ul>
                </li>
              </ul>
              <Link href="https://hostie-whmcs.themewant.com/?systpl=elitehost" className="login__btn" target="_blank">Client Area</Link>
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
