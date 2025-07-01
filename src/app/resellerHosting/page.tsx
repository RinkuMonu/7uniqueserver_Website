"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Plans from '@/components/Plans';

const PricingTable = () => {

const faqItems = [
  {
    id: 'one',
    question: 'Why buy a domain name from EliteHost?',
    answer:
      'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
    expanded: true,
  },
  {
    id: 'two',
    question: 'How does domain registration work?',
    answer:
      'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
  },
  {
    id: 'three',
    question: 'Why is domain name registration required?',
    answer:
      'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
  },
  {
    id: 'four',
    question: 'Why is domain name registration required?',
    answer:
      'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
  },
  {
    id: 'five',
    question: 'Why is domain name registration required?',
    answer:
      'Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.',
  },
];


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

 useEffect(() => {
    typeof window !== 'undefined' &&
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  
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

    <section className="rts-testimonial area-2 section__padding body-bg-2">
      <div className="container">
        <div className="row ">
          <div className="col-12 d-flex justify-content-center">
            <div className="rts-section w-460 text-center">
              <h2 className="rts-section__title">Our Client Feedback</h2>
              <p className="rts-section__description">
                We’re honored and humbled by the great feedback we receive from our customers on a daily basis.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="rts-testimonial__slider testimonial__slider--second">
              <div className="swiper-wrapper">
                {testimonials.map((t, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="rts-testimonial__single2">
                      <div className="quote-icon">
                        <Image
                          src="/images/testimonials/quote.svg"
                          alt="Quote Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="content">
                        <p>{t.quote}</p>
                      </div>
                      <div className="author__meta">
                        <div className="author__meta--image">
                          <Image src={t.image} alt={t.author} width={50} height={50} />
                        </div>
                        <div className="author__meta--details">
                          <Link href="#">{t.author}</Link>
                          <span>{t.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* pagination dot */}
              <div className="rts-dot__button slider-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="rts-feature section__padding body-bg-2">
      <div className="container">
        <div className="row">
          <div className="rts-section text-center">
            <h2 className="rts-section__title">Why EliteHost</h2>
          </div>
        </div>
        <div className="row gy-30">
          {features1.map((feature, index) => (
            <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
              <div className="single__feature">
                <div className="single__feature--box">
                  <div className="single__feature--box-icon">
                    <Image src={feature.icon} alt={feature.title} width={60} height={60} />
                  </div>
                  <h5 className="single__feature--box-title">{feature.title}</h5>
                  <p className="single__feature--box-description">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="rts-blog pt--120 pb--60">
      <div className="container">
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-md-12 col-sm-10">
            <div className="rts-section text-center">
              <h2 className="rts-section__title">Latest Article</h2>
            </div>
          </div>
        </div>

        <div className="row g-30 mb--60 justify-content-center justify-content-md-start">
          {blogs.map((blog, index) => (
            <div className="col-lg-4 col-md-6 col-sm-10" key={index}>
              <div className="rts-blog__single">
                <Link href={blog.link}>
                  <Image
                    className="blog__thumb"
                    src={blog.image}
                    alt="blog post thumb"
                    width={370}
                    height={240}
                  />
                </Link>
                <div className="rts-blog__single--meta">
                  <div className="cat__date">
                    <Link href="#" className="cat">
                      {blog.category}
                    </Link>
                    <span className="date">{blog.date}</span>
                  </div>
                  <Link href={blog.link} className="title">
                    {blog.title}
                  </Link>
                  <div className="rts-blog__single--author">
                    <div className="author">
                      <Image src={blog.authorImg} alt={blog.authorName} width={40} height={40} />
                    </div>
                    <div className="author__content">
                      <Link href="#">{blog.authorName}</Link>
                      <span>{blog.authorRole}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="rts-hosting-faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="rts-section text-center">
              <h2 className="rts-section__title mb-0">Frequently asked questions</h2>
            </div>
            <div className="rts-faq__accordion">
              <div className="accordion accordion-flush" id="rts-accordion">
                {faqItems.map((item, index) => (
                  <div
                    className={`accordion-item ${item.expanded ? 'active' : ''}`}
                    key={index}
                  >
                    <div className="accordion-header" id={`heading-${item.id}`}>
                      <h4
                        className={`accordion-button ${item.expanded ? '' : 'collapsed'}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#item__${item.id}`}
                        aria-expanded={item.expanded ? 'true' : 'false'}
                        aria-controls={`item__${item.id}`}
                      >
                        {item.question}
                      </h4>
                    </div>
                    <div
                      id={`item__${item.id}`}
                      className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`}
                      aria-labelledby={`heading-${item.id}`}
                      data-bs-parent="#rts-accordion"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="rts-hosting-feature-area-2 section__padding">
        <div className="container">
          <div className="section-inner">
            <div className="row g-5">
              {features2.map((feature, index) => (
                <div className="col-xl-4 col-lg-6" key={index}>
                  <div className="feature-wrapper">
                    <div className="icon">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="text">
                      <h4 className="title">{feature.title}</h4>
                      <p className="desc">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Hosting Feature End */}

      {/* Newsletter Area */}
      <div className="rts-newsletter">
        <div className="container">
          <div className="row">
            <div className="rts-newsletter__box">
              <div className="rts-newsletter__box--content">
                <h3 className="title">Sign up for web hosting today!</h3>
                <form action="#" className="newsletter__form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <button
                    type="submit"
                    className="btn__two secondary__bg secondary__color"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Area End */}
    
  </>
  );
};

export default PricingTable;