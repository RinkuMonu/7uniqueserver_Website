"use client"
import Image from 'next/image';
import React from 'react'

function Faqs() {

    
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

  return (
    <>
       <section className="rts-hosting-faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="rts-section text-center">
                  <h2 className="rts-section__title mb-0">Frequently asked questions</h2>
                </div>
                <div className="rts-faq__accordion">
                  <div className="accordion accordion-flush" id="rts-accordion">
                    {faqItems.map((item) => (
                      <div className="accordion-item" key={item.id}>
                        <h4 className="accordion-header" id={`heading-${item.id}`}>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#item__${item.id}`}
                            aria-expanded="false"
                            aria-controls={`item__${item.id}`}
                          >
                            {item.question}
                          </button>
                        </h4>
                        <div
                          id={`item__${item.id}`}
                          className="accordion-collapse collapse"
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
    </>
  )
}

export default Faqs
