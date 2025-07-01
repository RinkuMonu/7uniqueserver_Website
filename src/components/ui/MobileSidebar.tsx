"use client";

import Link from "next/link";

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div id="side-bar" className={`side-bar header-two ${sidebarOpen ? "open" : ""}`}>
      <button
        className="close-icon-menu"
        aria-label="Close Menu"
        onClick={() => setSidebarOpen(false)}
      >
        <i className="fa-sharp fa-thin fa-xmark"></i>
      </button>

      <div className="mobile-menu-main">
        <nav className="nav-main mainmenu-nav mt--30">
          <ul className="mainmenu" id="mobile-menu-active">
            <li className="has-droupdown">
              <Link href="#" className="main">Home</Link>
              <ul className="submenu mm-collapse">
                <li><Link className="mobile-menu-link" href="/">Home One</Link></li>
                <li><Link className="mobile-menu-link" href="/index-two">Home Two</Link></li>
                <li><Link className="mobile-menu-link" href="/index-three">Home Three</Link></li>
                <li><Link className="mobile-menu-link" href="/index-four">Home Four</Link></li>
                <li><Link className="mobile-menu-link" href="/index-five">Home Five</Link></li>
                <li><Link className="mobile-menu-link" href="/index-six">Home Six</Link></li>
              </ul>
            </li>
            <li className="has-droupdown">
              <Link href="#" className="main">Pages</Link>
              <ul className="submenu mm-collapse">
                <li><Link className="mobile-menu-link" href="/about">About</Link></li>
                <li><Link className="mobile-menu-link" href="/faq">Pricing</Link></li>
                <li><Link className="mobile-menu-link" href="/book-a-demo">Sign Up</Link></li>
                <li><Link className="mobile-menu-link" href="/blog">Blog</Link></li>
                <li><Link className="mobile-menu-link" href="/blog-list">Blog List</Link></li>
                <li><Link className="mobile-menu-link" href="/support">Support</Link></li>
                <li><Link className="mobile-menu-link" href="/pricing">Pricing</Link></li>
                <li><Link className="mobile-menu-link" href="/signin">Sign In</Link></li>
                <li><Link className="mobile-menu-link" href="/knowledgebase">Knowledgebase</Link></li>
                <li><Link className="mobile-menu-link" href="/blog-details">Blog Details</Link></li>
                <li><Link className="mobile-menu-link" href="/domain-checker">Domain Checker</Link></li>
                <li><Link className="mobile-menu-link" href="/contact">Contact</Link></li>
              </ul>
            </li>
            <li className="has-droupdown">
              <Link href="#" className="main">Hosting</Link>
              <ul className="submenu mm-collapse">
                <li><Link className="mobile-menu-link" href="/shared-hosting">Shared Hosting</Link></li>
                <li><Link className="mobile-menu-link" href="/wordpress-hosting">WordPress Hosting</Link></li>
                <li><Link className="mobile-menu-link" href="/vps-hosting">VPS Hosting</Link></li>
                <li><Link className="mobile-menu-link" href="/reseller-hosting">Reseller Hosting</Link></li>
                <li><Link className="mobile-menu-link" href="/dedicated-hosting">Dedicated Hosting</Link></li>
                <li><Link className="mobile-menu-link" href="/cloud-hosting">Cloud Hosting</Link></li>
              </ul>
            </li>
            <li className="has-droupdown">
              <Link href="#" className="main">Feature</Link>
              <ul className="submenu mm-collapse">
                <li><Link className="mobile-menu-link" href="https://hostie-whmcs.themewant.com/?systpl=elitehost" target="_blank">WHMCS Template</Link></li>
                <li><Link className="mobile-menu-link" href="https://hostie-whmcs.themewant.com/index.php/store/shared-hosting?systpl=elitehost" target="_blank">Shared Hosting</Link></li>
                <li><Link className="mobile-menu-link" href="https://hostie-whmcs.themewant.com/index.php/store/vps-hosting?systpl=elitehost" target="_blank">VPS Hosting</Link></li>
                <li><Link className="mobile-menu-link" href="https://hostie-whmcs.themewant.com/index.php/announcements?systpl=elitehost" target="_blank">Announcement</Link></li>
              </ul>
            </li>
            <li className="has-droupdown">
              <Link href="#" className="main">Help Center</Link>
              <ul className="submenu mm-collapse">
                <li><Link className="mobile-menu-link" href="/knowledgebase">Knowledgebase</Link></li>
                <li><Link className="mobile-menu-link" href="/support">Support</Link></li>
                <li><Link className="mobile-menu-link" href="/contact">Contact</Link></li>
              </ul>
            </li>
          </ul>
        </nav>

        <ul className="social-area-one pl--20 mt--100">
          <li><a href="https://www.linkedin.com" aria-label="social-link" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://www.x.com" aria-label="social-link" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="https://www.youtube.com" aria-label="social-link" target="_blank"><i className="fa-brands fa-youtube"></i></a></li>
          <li><a href="https://www.facebook.com" aria-label="social-link" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
