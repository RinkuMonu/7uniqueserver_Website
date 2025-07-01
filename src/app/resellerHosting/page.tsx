"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Testimonials from '@/components/ui/testimonials';
import Plans from '@/components/Plans';
import Faqs from '@/components/ui/faqs';
import LatestBlog from '@/components/ui/latestblog';

const PricingTable = () => {


const hostingFeatures = [
  {
    icon: '/images/hosting/07.svg',
    title: 'All the Essentials',
    desc: 'Manage everything from one single dashboard (cPanel).',
    link: '/shared-hosting',
  },
  {
    icon: '/images/hosting/08.svg',
    title: 'WHM Control',
    desc: 'Create and modify your clients’ hosting accounts with Web Host.',
    link: '/wordpress-hosting',
  },
  {
    icon: '/images/hosting/09.svg',
    title: 'Account Management Tools',
    desc: 'Whether you want to set up client invoices or brand the existing.',
    link: '/cloud-hosting',
  },
  {
    icon: '/images/hosting/10.svg',
    title: 'State-of-Art Technology',
    desc: 'Deliver fast, reliable, and secure hosting to your clients, thanks.',
    link: '/reseller-hosting',
  },
];

const testimonials = [
  {
    quote:
      'I am using Digital Ocean Plan in Cloud ways and I can confirm it is very good. Also, additional the backup with my hosting is awesome too.',
    author: 'Jamie Knop',
    role: 'Business Owner',
    image: '/images/testimonials/author.png',
  },
  {
    quote:
      "I started my own web hosting business their reseller hosting plan, and it's been a great decision. The resources are ample, the management tools are easy to use.",
    author: 'Jahed Khan',
    role: 'Business Owner',
    image: '/images/testimonials/author-2.png',
  },
  {
    quote:
      "I've been using their web hosting services for over a year now, and I happier. The uptime is fantastic, and the customer support team is always quick.",
    author: 'Samira Khan',
    role: 'Digital Marketer',
    image: '/images/testimonials/author-3.png',
  },
  {
    quote:
      "I've been using their web hosting services for over a year now, and I happier. The uptime is fantastic, and the customer support team is always quick.",
    author: 'Jamie Knop',
    role: 'Business Owner',
    image: '/images/testimonials/author.png',
  },
];

const features1 = [
  {
    icon: '/images/feature/feature-01.svg',
    title: 'Free WHM & cPanel',
    description: "We guarantee it you don't have to worry about it.",
  },
  {
    icon: '/images/feature/feature-02.svg',
    title: 'Performance Optimized',
    description: 'If your website is slow or down then you losing customers.',
  },
  {
    icon: '/images/feature/feature-03.svg',
    title: 'Super Easy to Use',
    description: 'Our custom control panel to use and removes the headache',
  },
  {
    icon: '/images/feature/feature-04.svg',
    title: '24/7 Expert Support',
    description: 'Our custom control panel to use and removes the headache',
  },
];

const blogs = [
  {
    image: '/images/blog/blog-1.webp',
    category: 'Web Hosting',
    date: '19 Sep, 2023',
    title: 'Attentive was born in 2015 help sales teams VPS hosting',
    authorImg: '/images/author/author__one.png',
    authorName: 'Mack jon',
    authorRole: 'Developer & Web serenity',
    link: '/blog-details',
  },
  {
    image: '/images/blog/blog-2.webp',
    category: 'Web Hosting',
    date: '19 Sep, 2023',
    title: 'Attentive was born in 2015 help sales teams VPS hosting',
    authorImg: '/images/author/author__two.png',
    authorName: 'Ahmad Eamin',
    authorRole: 'Developer',
    link: '/blog-details',
  },
  {
    image: '/images/blog/blog-3.webp',
    category: 'Web Hosting',
    date: '19 Sep, 2023',
    title: 'Attentive was born in 2015 help sales teams VPS hosting',
    authorImg: '/images/author/author__four.png',
    authorName: 'Samira Khan',
    authorRole: 'Digital Marketer',
    link: '/blog-details',
  },
];

const features2 = [
  {
    icon: '/images/feature/feature-08.svg',
    title: 'Live Chat',
    description: 'Our knowledgeable and friendly representatives are available 24/7',
  },
  {
    icon: '/images/feature/feature-09.svg',
    title: 'Knowledge Base',
    description: 'Access a wealth of information and resources with our comprehensive',
  },
  {
    icon: '/images/feature/feature-11.svg',
    title: 'Send Ticket',
    description: 'Our ticketing system is designed to provide you with efficient',
  },
];

  const resellerHostingServices = [
  {
    title: "Branding",
    items: [
      { id: "whiteLabel", label: "White-label Branding (Included)" },
      { id: "customLogo", label: "Custom Logo Integration (₹500 one-time)" },
      { id: "clientPanel", label: "Branded Client Panel (₹800/month)" },
    ],
  },
  {
    title: "Resource Management",
    items: [
      { id: "whmAccess", label: "WHM Access (Free)" },
      { id: "accountLimits", label: "Account Limit Control (Free)" },
      { id: "autoSuspend", label: "Auto Suspend Inactive Clients (₹300/month)" },
    ],
  },
  {
    title: "Support & Tools",
    items: [
      { id: "billingSoftware", label: "Billing Software Integration (₹1000/month)" },
      { id: "ticketSystem", label: "Client Ticket System (₹700/month)" },
      { id: "priorityResellerSupport", label: "Priority Reseller Support (₹1200/month)" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { id: "extraCpanel", label: "Additional cPanel License (₹100/month/client)" },
      { id: "emailMarketing", label: "Email Marketing Tool (₹600/month)" },
      { id: "dailyResellerBackup", label: "Automated Daily Backups (₹900/month)" },
    ],
  },
];

  return (
  <>
     <div className="rts-breadcrumb-area body-bg-2">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="row align-items-center">
            <div className="col-lg-6 order-change">
              <div className="breadcrumb-content">
                <h1 className="heading-title" style={{ maxWidth: '477px' }}>
                  Reseller Hosting
                </h1>
                <p className="desc">The quality you need with all the potential to earn</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-image-area">
                <Image
                  src="/images/banner/breadcrumb-03.webp"
                  width={332}
                  height={590}
                  alt="Reseller Hosting"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-shape-area">
        <Image
          src="/images/banner/breadcrumb-shape.svg"
          width={500}
          height={500}
          alt="Breadcrumb Shape"
        />
      </div>
    </div>

   <Plans/>

    <div className="rts-hosting-type pb--120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="section-title-area text-center">
                <h2 className="section-title">Reseller Hosting Feature</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="rts-hosting-inner">
              <div className="row g-5">
                {hostingFeatures.map((feature, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className="rts-hosting-type__single area-2">
                      <div className="hosting-icon">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <Link href={feature.link} className="title">
                        {feature.title}
                      </Link>
                      <p className="excerpt">{feature.desc}</p>
                      <Link href={feature.link} className="primary__btn border__btn">
                        View Details <i className="fa-regular fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


   
      {/* Newsletter Area End */}
     <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5 text-black fw-bold">Additional Reseller Hosting Services</h2>
                    <div className="row g-4">
                        {resellerHostingServices.map((section, idx) => (
                            <div className="col-md-3" key={idx}>
                                <div className="bg-white  border-4 rounded-3 shadow-md p-4 h-100" style={{"borderLeft":"2px solid #fd5d07"}}>
                                    <h5 className="fw-bold mb-4 fs-4  text-uppercase ">{section.title}</h5>
                                    {section.items.map((item) => (
                                        <div className="form-check mb-2" key={item.id}>
                                            <input
                                                className="form-check-input border border-dark bg-transparent shadow-none"
                                                type="checkbox"
                                                id={item.id}
                                            />
                                            <label className="form-check-label " htmlFor={item.id}>
                                               <p className='fs-5'> {item.label}</p>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
  </>
  );
};

export default PricingTable;