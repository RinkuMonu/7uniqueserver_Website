"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e : any) => {
    e.preventDefault();
    console.log("Newsletter subscribed:", newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <footer className="rts-footer site-footer-one section__padding body-bg-2">
      <div className="container">
        <div className="row">
          {/* Widget 1 */}
          <div className="col-lg-4 col-md-6 col-sm-6 rts-footer__widget--column">
            <div className="rts-footer__widget footer__widget w-280">
              <Link href="/" aria-label="main page link" className="footer__logo">
                <Image src="/images/logo/logo-1.svg" alt="Logo" width={150} height={40} />
              </Link>
              <p className="brand-desc">1811 Silverside Rd, Wilmington <br /> DE 19810, USA</p>
              <div className="contact-wrapper">
                <ul>
                  <li>
                    <div className="icon"><i className="fa-regular fa-phone"></i></div>
                    <a href="tel:8060008899">+806 (000) 88 99</a>
                  </li>
                  <li>
                    <div className="icon"><i className="fa-sharp fa-regular fa-envelope"></i></div>
                    <a href="mailto:info@elitehost.com">info@elitehost.com</a>
                  </li>
                </ul>
              </div>
              <div className="separator site-default-border"></div>
              <div className="payment__method">
                <ul>
                  {["visa", "master-card", "paypal", "american-express", "wise", "skrill"].map((method) => (
                    <li key={method}>
                      <Image
                        src={`/images/payment/${method}.svg`}
                        alt={method}
                        width={40}
                        height={25}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Widget 2 */}
          <div className="col-lg-2 col-md-3 col-sm-6 rts-footer__widget--column">
            <div className="footer-widget-inner">
              <div className="rts-footer__widget footer__widget extra-padding">
                <h5 className="widget-title">Feature</h5>
                <div className="rts-footer__widget--menu">
                  <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/blog">News Feed</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/sign-up">Sign Up</Link></li>
                    <li><Link href="/sign-in">Sign In</Link></li>
                  </ul>
                </div>
              </div>
              <div className="rts-footer__widget footer__widget extra-padding">
                <h5 className="widget-title">Help</h5>
                <div className="rts-footer__widget--menu">
                  <ul>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/support">Support</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/knowledgebase">Knowledgebase</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Widget 3 */}
          <div className="col-lg-2 col-md-3 col-sm-6 rts-footer__widget--column">
            <div className="footer-widget-inner">
              <div className="rts-footer__widget footer__widget extra-padding">
                <h5 className="widget-title">Hosting</h5>
                <div className="rts-footer__widget--menu">
                  <ul>
                    <li><Link href="/shared-hosting">Shared Hosting</Link></li>
                    <li><Link href="/reseller-hosting">Reseller Hosting</Link></li>
                    <li><Link href="/vps-hosting">VPS Hosting</Link></li>
                    <li><Link href="/wordpress-hosting">WordPress Hosting</Link></li>
                    <li><Link href="/cloud-hosting">Cloud Hosting</Link></li>
                  </ul>
                </div>
              </div>
              <div className="rts-footer__widget footer__widget extra-padding">
                <h5 className="widget-title">Company</h5>
                <div className="rts-footer__widget--menu">
                  <ul>
                    <li><Link href="/domain-checker">Domain Checker</Link></li>
                    <li><a href="https://elitehost-whmcs.themewant.com/?systpl=elitehost" target="_blank" rel="noopener noreferrer">WHMCS Template</a></li>
                    <li><a href="https://elitehost-whmcs.themewant.com/index.php/announcements?systpl=elitehost" target="_blank" rel="noopener noreferrer">Announcement</a></li>
                    <li><a href="https://elitehost-whmcs.themewant.com/index.php/store/shared-hosting?systpl=elitehost" target="_blank" rel="noopener noreferrer">Shared Hosting</a></li>
                    <li><a href="https://elitehost-whmcs.themewant.com/index.php/store/vps-hosting?systpl=elitehost" target="_blank" rel="noopener noreferrer">VPS Hosting</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Widget 4 */}
          <div className="col-lg-4 col-md-6 rts-footer__widget--column">
            <div className="rts-footer__widget footer__widget w-307 ml--auto">
              <h5 className="widget-title">Join Our Newsletter</h5>
              <p>We'll send you news and offers.</p>
              <form className="newsletter mx-40" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  className="home-one"
                  name="email"
                  placeholder="Enter mail"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <span className="icon"><i className="fa-regular fa-envelope-open"></i></span>
                <button type="submit" aria-label="Submit">
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </form>
              <div className="social__media">
                <h5>social media</h5>
                <div className="social__media--list">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="media"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="media"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="media"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="media"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.behance.com" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="media"><i className="fa-brands fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts__footer__copyright is__common">
        <div className="container">
          <div className="row">
            <div className="footer__copy__wrapper justify-content-center text-center">
              <p>&copy; 2004-2024 Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
