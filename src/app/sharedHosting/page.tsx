"use client"
import Plans from '@/components/Plans';
import Faqs from '@/components/ui/faqs';
import LatestBlog from '@/components/ui/latestblog';
import Testimonials from '@/components/ui/testimonials';
import Image from 'next/image';
import Link from 'next/link';

const SharedHostingPage = () => {
  const features = [
  'Data Backup and Recovery',
  'Integration with Other Services',
  'Performance and Speed',
];


const hostingOptions = [
  {
    icon: "/images/hosting/01.svg",
    title: "Free SSL Certificates",
    description:
      "Although SSL certificates are now mandatory, still got your back.",
    link: "shared-hosting.html",
  },
  {
    icon: "/images/hosting/02.svg",
    title: "WordPress and cPanel",
    description:
      "Deploy WordPress in seconds with the Softaculous app installer.",
    link: "wordpress-hosting.html",
  },
  {
    icon: "/images/hosting/03.svg",
    title: "Personalized Email Service",
    description:
      "Enjoy domain-based email address of your choice to represent.",
    link: "cloud-hosting.html",
  },
  {
    icon: "/images/hosting/04.svg",
    title: "24/7 Live Support",
    description: "Need some help? Our team of hosting experts is standing.",
    link: "reseller-hosting.html",
  },
];


  return (
    <div>
      {/* Breadcrumb Area */}
      <div className="rts-breadcrumb-area body-bg-2">
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="row align-items-center">
              <div className="col-lg-6 order-change">
                <div className="breadcrumb-content">
                  <h1 className="heading-title" style={{ maxWidth: '461px' }}>Shared Website Hosting</h1>
                  <p className="desc">Fast, secure, and affordable hosting plans for any budget</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-image-area">
                  <img 
                    src="/images/banner/breadcrumb-01.webp" 
                    width={460} 
                    height={460}
                    alt="Shared Hosting Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-shape-area">
          <Image 
            src="/images/banner/breadcrumb-shape.svg" 
            width={100}
            height={100}
            alt="Breadcrumb Shape"
          />
        </div>
      </div>

   <Plans/>
 <div className="rts-hosting-feature-area section__padding body-bg-2">
      <div className="container">
        <div className="section-inner">
          <div className="row">
            <div className="col-lg-5">
              <div className="left-side-image">
                <img
                  src="/images/feature/feature-hero-10.webp"
                  width={419}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="right-side-content">
                <div className="section-title-area area-2 text-start">
                  <h2 className="section-title">
                    Looking for reliable hosting solutions to Business
                  </h2>
                  <p className="desc">
                    Leverage the power of cloud storage to streamline your data
                    management and enhance productivity. Our cloud storage
                    solutions offer scalable and flexible plans to fit your
                    growing needs, ensuring you only pay for what you use.
                  </p>
                </div>
                <ul className="feature-list">
                  {features.map((item, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check"></i> {item}
                      {/* Or use: <FaCheck className="me-2" /> {item} */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <div className="rts-hosting-type pb--120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="section-title-area text-center">
                <h2 className="section-title">Shared Hosting Feature</h2>
              </div>
            </div>
          </div>
        </div>
        {/* hosting option */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="rts-hosting-inner">
              <div className="row g-5">
                {hostingOptions.map((item, idx) => (
                  <div className="col-lg-3 col-md-6" key={idx}>
                    <div className="rts-hosting-type__single area-2">
                      <div className="hosting-icon">
                        <img src={item.icon} alt="" />
                      </div>
                      <a href={item.link} className="title">
                        {item.title}
                      </a>
                      <p className="excerpt">{item.description}</p>
                      <a href={item.link} className="primary__btn border__btn">
                        View Details{" "}
                        <i className="fa-regular fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    </div>
  );
};

export default SharedHostingPage;