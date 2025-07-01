"use client"
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

  // FAQ data
  const faqs = [
    {
      id: 'first',
      question: 'Why buy a domain name from EliteHost?',
      answer: 'Above all else, we strive to deliver outstanding customer experiences.'
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

      {/* Testimonials */}
      <section className="rts-testimonial area-2 section__padding">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="rts-section w-460 text-center">
                <h2 className="rts-section__title">Our Client Feedback</h2>
                <p className="rts-section__description">We're honored and humbled by the great feedback we receive from our customers.</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12">
              <div className="rts-testimonial__slider testimonial__slider--second">
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="rts-testimonial__single2">
                        <div className="quote-icon">
                          <Image 
                            src="/assets/images/testimonials/quote.svg" 
                            width={30}
                            height={30}
                            alt="Quote"
                          />
                        </div>
                        <div className="content">
                          <p>{testimonial.quote}</p>
                        </div>
                        <div className="author__meta">
                          <div className="author__meta--image">
                            <Image 
                              src={testimonial.image} 
                              width={50}
                              height={50}
                              alt={testimonial.author}
                            />
                          </div>
                          <div className="author__meta--details">
                            <Link href="#">{testimonial.author}</Link>
                            <span>{testimonial.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
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
            {blogPosts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                <div className="rts-blog__single">
                  <Link href="blog-details">
                    <Image 
                      className="blog__thumb" 
                      src={post.image} 
                      width={400} 
                      height={300} 
                      alt={post.title} 
                    />
                  </Link>
                  <div className="rts-blog__single--meta">
                    <div className="cat__date">
                      <Link href="#" className="cat">{post.category}</Link>
                      <span className="date">{post.date}</span>
                    </div>
                    <Link href="blog-details" className="title">{post.title}</Link>
                    <div className="rts-blog__single--author">
                      <div className="author">
                        <Image 
                          src={post.author.image} 
                          width={40} 
                          height={40} 
                          alt={post.author.name} 
                        />
                      </div>
                      <div className="author__content">
                        <Link href="#">{post.author.name}</Link>
                        <span>{post.author.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="rts-hosting-faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="rts-section text-center">
                <h2 className="rts-section__title mb-0">Frequently asked questions</h2>
              </div>
              <div className="rts-faq__accordion">
                <div className="accordion accordion-flush" id="rts-accordion">
                  {faqs.map((faq, index) => (
                    <div key={faq.id} className={`accordion-item ${index === 0 ? 'active' : ''}`}>
                      <div className="accordion-header" id={faq.id}>
                        <h4 className={`accordion-button ${index === 0 ? 'collapse show' : 'collapsed'}`}>
                          {faq.question}
                        </h4>
                      </div>
                      <div 
                        id={`item__${faq.id}`} 
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="rts-hosting-feature-area-2 section__padding">
        <div className="container">
          <div className="section-inner">
            <div className="row g-5">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="col-xl-4 col-lg-6">
                  <div className="feature-wrapper">
                    <div className="icon">
                      <Image 
                        src={feature.icon} 
                        width={50}
                        height={50}
                        alt={feature.title}
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