"use client";

export default function HostingFaq() {
  const faqData = [
    {
      question: "Why buy a domain name from EliteHost?",
      answer:
        "Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.",
    },
    {
      question: "How does domain registration work?",
      answer:
        "Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.",
    },
    {
      question: "Why is domain name registration required?",
      answer:
        "Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.",
    },
    {
      question: "Why is domain name registration required?",
      answer:
        "Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.",
    },
    {
      question: "Why is domain name registration required?",
      answer:
        "Above all else, we strive to deliver outstanding customer experiences. When you buy a domain name from EliteHost, we guarantee it will be handed over.",
    },
  ];

  return (
    <section className="rts-hosting-faq section__padding">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="rts-section text-center">
              <h2 className="rts-section__title mb-0">Frequently asked questions</h2>
            </div>
            <div className="rts-faq__accordion mt-5">
              {faqData.map((item, index) => (
                <details
                  key={index}
                  className="accordion-item mb-3 border p-3 rounded"
                  open={index === 0} // First item open by default
                >
                  <summary className="accordion-button font-semibold cursor-pointer text-left">
                    {item.question}
                  </summary>
                  <div className="accordion-body mt-2">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
