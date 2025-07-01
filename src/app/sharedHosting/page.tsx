"use client"
import Faqs from '@/components/ui/faqs';
import Testimonials from '@/components/ui/testimonials';
import Image from 'next/image';
import Link from 'next/link';

const SharedHostingPage = () => {
  // Pricing plans data
  const pricingPlans = [
    {
      id: 'monthly',
      name: 'Monthly',
      plans: [
        {
          type: 'Basic Plan',
          price: '$7.20',
          renewal: '$5.32/month',
          term: '/ mo'
        },
        {
          type: 'Business Plan',
          price: '$7.20',
          renewal: '$5.32/month',
          term: '/ mo'
        },
        {
          type: 'Pro Plan',
          price: '$7.20',
          renewal: '$5.32/month',
          term: '/ mo'
        }
      ]
    },
    {
      id: 'yearly',
      name: 'Yearly',
      plans: [
        {
          type: 'Basic Plan',
          price: '$17.20',
          renewal: '$15.32/yearly',
          term: '/ yr'
        },
        // Other yearly plans...
      ]
    },
    // 3 Year plans...
  ];

  // Features data
  const hostingFeatures = [
    {
      icon: '/assets/images/hosting/01.svg',
      title: 'Free SSL Certificates',
      description: 'Although SSL certificates are now mandatory, still got your back.',
      link: 'shared-hosting'
    },
    {
      icon: '/assets/images/hosting/02.svg',
      title: 'WordPress and cPanel',
      description: 'Deploy WordPress in seconds with the Softaculous app installer.',
      link: 'wordpress-hosting'
    },
    // More features...
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "I am using Digital Ocean Plan in Cloud ways and I can confirm it is very good.",
      author: "Jamie Knop",
      role: "Business Owner",
      image: "/assets/images/testimonials/author.png"
    },
     {
      quote: "I am using Digital Ocean Plan in Cloud ways and I can confirm it is very good.",
      author: "Jamie Knop",
      role: "Business Owner",
      image: "/assets/images/testimonials/author.png"
    }, {
      quote: "I am using Digital Ocean Plan in Cloud ways and I can confirm it is very good.",
      author: "Jamie Knop",
      role: "Business Owner",
      image: "/assets/images/testimonials/author.png"
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

  // Blog posts data
  const blogPosts = [
    {
      title: 'Attentive was born in 2015 help sales teams VPS hosting',
      image: '/assets/images/blog/blog-1.webp',
      category: 'Web Hosting',
      date: '19 Sep, 2023',
      author: {
        name: 'Mack jon',
        role: 'Developer & Web serenity',
        image: '/assets/images/author/author__one.png'
      }
    },
    // More blog posts...
  ];

  // Support features data
  const supportFeatures = [
    {
      icon: '/assets/images/feature/feature-08.svg',
      title: 'Live Chat',
      description: 'Our knowledgeable and friendly representatives are available 24/7'
    },
    // More support features...
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
                  <Image 
                    src="/assets/images/banner/breadcrumb-01.webp" 
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
            src="/assets/images/banner/breadcrumb-shape.svg" 
            width={100}
            height={100}
            alt="Breadcrumb Shape"
          />
        </div>
      </div>

      {/* Hosting Plan Section */}
      <section className="rts-plan section__padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="rts-section text-center w-560">
              <h3 className="rts-section__title">Choose Your Plan</h3>
            </div>
          </div>
          
          {/* Plan Tabs */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5">
              <div className="rts-pricing-plan__tab color-primary">
                <div className="tab__button">
                  <div className="tab__button__item">
                    {pricingPlans.map((plan) => (
                      <button 
                        key={plan.id}
                        className={`tab__btn ${plan.id === 'monthly' ? 'active' : ''}`}
                        data-tab={plan.id}
                      >
                        {plan.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Tables */}
          {pricingPlans.map((planGroup) => (
            <div key={planGroup.id} className={`tab__content ${planGroup.id === 'monthly' ? 'open' : ''}`} id={planGroup.id}>
              <div className="row">
                <div className="col-lg-12 p--0 overflow-x-scroll">
                  <div className="rts-plan__table">
                    <table className="table-bordered">
                      <thead>
                        <tr>
                          <th className="package__left">
                            <Image 
                              src="/assets/images/pricing/pricing-image.svg" 
                              width={100}
                              height={100}
                              alt="Pricing"
                            />
                          </th>
                          {planGroup.plans.map((plan, index) => (
                            <th key={index} className="package__item">
                              <div className="package__item__info">
                                <span className="package__type">{plan.type}</span>
                                <span className="start">Renews at {plan.renewal}</span>
                                <h5 className="card-plan__price">
                                  {plan.price} <sub>{plan.term}</sub>
                                </h5>
                                <div className="card-plan__cartbtn">
                                  <Link href="#">Get Started</Link>
                                </div>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                    </table>

                    {/* Accordion for Plan Features */}
                    <div className="accordion accordion-flush" id="rts-accordion">
                      {/* Plan Features would be mapped here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hosting Options */}
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
          
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="rts-hosting-inner">
                <div className="row g-5">
                  {hostingFeatures.map((feature, index) => (
                    <div key={index} className="col-lg-3 col-md-6">
                      <div className="rts-hosting-type__single area-2">
                        <div className="hosting-icon">
                          <Image 
                            src={feature.icon} 
                            width={50}
                            height={50}
                            alt={feature.title}
                          />
                        </div>
                        <Link href={feature.link} className="title">{feature.title}</Link>
                        <p className="excerpt">{feature.description}</p>
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
<Testimonials/>

     

   <Faqs/>

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

      {/* Newsletter */}
      <div className="rts-newsletter">
        <div className="container">
          <div className="row">
            <div className="rts-newsletter__box">
              <div className="rts-newsletter__box--content">
                <h3 className="title">Sign up for web hosting today!</h3>
                <form action="#" className="newsletter__form">
                  <input type="email" name="email" placeholder="Enter your email" required />
                  <button type="submit" className="btn__two secondary__bg secondary__color">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedHostingPage;