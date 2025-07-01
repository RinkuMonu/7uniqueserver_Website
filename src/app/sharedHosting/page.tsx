import Image from 'next/image';
import Link from 'next/link';

const SharedHostingPage = () => {
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
                    <button className="tab__btn active" data-tab="monthly">Monthly</button>
                    <button className="tab__btn" data-tab="yearly">Yearly</button>
                    <button className="tab__btn" data-tab="3year">3 Year</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Plan */}
          <div className="tab__content open" id="monthly">
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
                        <th className="package__item">
                          <div className="package__item__info">
                            <span className="package__type">Basic Plan</span>
                            <span className="start">Renews at $5.32/month</span>
                            <h5 className="card-plan__price">$7.20 <sub>/ mo</sub></h5>
                            <div className="card-plan__cartbtn">
                              <Link href="#">Get Started</Link>
                            </div>
                          </div>
                        </th>
                        <th className="package__item">
                          <div className="package__item__info">
                            <span className="package__type">Business Plan</span>
                            <span className="start">Renews at $5.32/month</span>
                            <h5 className="card-plan__price">$7.20 <sub>/ mo</sub></h5>
                            <div className="card-plan__cartbtn">
                              <Link href="#">Get Started</Link>
                            </div>
                          </div>
                        </th>
                        <th className="package__item">
                          <div className="package__item__info">
                            <span className="package__type">Pro Plan</span>
                            <span className="start">Renews at $5.32/month</span>
                            <h5 className="card-plan__price">$7.20 <sub>/ mo</sub></h5>
                            <div className="card-plan__cartbtn">
                              <Link href="#">Get Started</Link>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                  </table>

                  {/* Accordion for Plan Features */}
                  <div className="accordion accordion-flush" id="rts-accordion">
                    {/* Plan Features */}
                    <div className="accordion-item active">
                      <div className="accordion-header" id="six">
                        <h4 className="accordion-button collapse show" data-bs-toggle="collapse" data-bs-target="#item__six" aria-expanded="false" aria-controls="item__six">
                          Plan Features
                        </h4>
                      </div>
                      <div id="item__six" className="accordion-collapse collapse collapse show" aria-labelledby="six" data-bs-parent="#rts-accordion">
                        <div className="accordion-body">
                          <table className="table-bordered">
                            <thead>
                              <tr>
                                <th>Disk Space <span className="tolltip" data-bs-toggle="tooltip" title="Explore, discover, and learn on our innovative and informative website."><i className="fa-light fa-circle-question"></i></span></th>
                                <th>20 GB SSD</th>
                                <th>20 GB SSD</th>
                                <th>50 GB SSD</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr data-filter="hardware" className="">
                                <td className="package__left">File (Inode) Limit <span className="tolltip" data-bs-toggle="tooltip" title="Explore, discover, and learn on our innovative and informative website."><i className="fa-light fa-circle-question"></i></span></td>
                                <td className="package__item">300.000</td>
                                <td className="package__item">300.000</td>
                                <td className="package__item">600.000</td>
                              </tr>
                              {/* More rows... */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* More accordion items... */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Yearly and 3 Year plans would follow similar structure */}
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
                  <div className="col-lg-3 col-md-6">
                    <div className="rts-hosting-type__single area-2">
                      <div className="hosting-icon">
                        <Image 
                          src="/assets/images/hosting/01.svg" 
                          width={50}
                          height={50}
                          alt="Free SSL"
                        />
                      </div>
                      <Link href="shared-hosting" className="title">Free SSL Certificates</Link>
                      <p className="excerpt">Although SSL certificates are now mandatory, still got your back.</p>
                      <Link href="shared-hosting" className="primary__btn border__btn">
                        View Details <i className="fa-regular fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  {/* More hosting options... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hosting Feature Area */}
      <div className="rts-hosting-feature-area section__padding body-bg-2">
        <div className="container">
          <div className="section-inner">
            <div className="row">
              <div className="col-lg-5">
                <div className="left-side-image">
                  <Image 
                    src="/assets/images/feature/feature-hero-10.webp" 
                    width={419}
                    height={419}
                    alt="Hosting Feature"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="right-side-content">
                  <div className="section-title-area area-2 text-start">
                    <h2 className="section-title">Looking for reliable hosting solutions to Business</h2>
                    <p className="desc">Leverage the power of cloud storage to streamline your data management and enhance productivity.</p>
                  </div>
                  <ul className="feature-list">
                    <li><i className="fa-solid fa-check"></i>Data Backup and Recovery</li>
                    <li><i className="fa-solid fa-check"></i>Integration with Other Services</li>
                    <li><i className="fa-solid fa-check"></i>Performance and Speed</li>
                  </ul>
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
          
          {/* Testimonial slider would go here */}
        </div>
      </section>

      {/* Brand Area */}
      <div className="rts-brand section__padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rts-brand__wrapper">
                <div className="rts-brand__wrapper--text">
                  <h5>Hosting solutions trusted by the owners of <span>2,800,000</span> domains.</h5>
                  <div className="rts-brand__wrapper--text-review">
                    <div className="review">
                      <div className="star">Excellent <Image src="/assets/images/brand/review-star.svg" width={100} height={20} alt="Stars" /></div>
                    </div>
                    <div className="review__company">
                      954 reviews on <Image src="/assets/images/brand/trust-pilot.svg" width={100} height={20} alt="Trust Pilot" />
                    </div>
                  </div>
                </div>
                {/* Brand slider would go here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EliteHost Features */}
      <section className="rts-feature section__padding body-bg-2">
        <div className="container">
          <div className="row">
            <div className="rts-section text-center">
              <h2 className="rts-section__title">Why EliteHost</h2>
            </div>
          </div>
          <div className="row gy-30">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="single__feature">
                <div className="single__feature--box">
                  <div className="single__feature--box-icon">
                    <Image src="/assets/images/feature/feature-01.svg" width={50} height={50} alt="Free WHM" />
                  </div>
                  <h5 className="single__feature--box-title">Free WHM & cPanel</h5>
                  <p className="single__feature--box-description">We guarantee it you don't have to worry about it.</p>
                </div>
              </div>
            </div>
            {/* More features... */}
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
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="rts-blog__single">
                <Link href="blog-details">
                  <Image className="blog__thumb" src="/assets/images/blog/blog-1.webp" width={400} height={300} alt="Blog post" />
                </Link>
                <div className="rts-blog__single--meta">
                  <div className="cat__date">
                    <Link href="#" className="cat">Web Hosting</Link>
                    <span className="date">19 Sep, 2023</span>
                  </div>
                  <Link href="blog-details" className="title">Attentive was born in 2015 help sales teams VPS hosting</Link>
                  <div className="rts-blog__single--author">
                    <div className="author">
                      <Image src="/assets/images/author/author__one.png" width={40} height={40} alt="Author" />
                    </div>
                    <div className="author__content">
                      <Link href="#">Mack jon</Link>
                      <span>Developer & Web serenity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* More blog posts... */}
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
                  <div className="accordion-item active">
                    <div className="accordion-header" id="first">
                      <h4 className="accordion-button collapse show" data-bs-toggle="collapse" data-bs-target="#item__one">
                        Why buy a domain name from EliteHost?
                      </h4>
                    </div>
                    <div id="item__one" className="accordion-collapse collapse collapse show" aria-labelledby="first" data-bs-parent="#rts-accordion">
                      <div className="accordion-body">
                        Above all else, we strive to deliver outstanding customer experiences.
                      </div>
                    </div>
                  </div>
                  {/* More FAQ items... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Features */}
      <section className="rts-hosting-feature-area-2 section__padding">
        <div className="container">
          <div className="section-inner">
            <div className="row g-5">
              <div className="col-xl-4 col-lg-6">
                <div className="feature-wrapper">
                  <div className="icon">
                    <Image src="/assets/images/feature/feature-08.svg" width={50} height={50} alt="Live Chat" />
                  </div>
                  <div className="text">
                    <h4 className="title">Live Chat</h4>
                    <p className="desc">Our knowledgeable and friendly representatives are available 24/7</p>
                  </div>
                </div>
              </div>
              {/* More features... */}
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