import { faqOne as data } from "@/data/faq";

export default function FaqOne() {
  return (
    <section className="faq__area-3 pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="faq__left-3">
              {data.title && (
                <h2 className="section-title-4 move-line-3d">{data.title}</h2>
              )}
              {data.description && (
                <p className="faq__content-3 move-line-3d" data-delay="0.4">
                  {data.description}
                </p>
              )}
              <div className="accordion" id="accordionExample">
                <div
                  className="accordion-item faq__item-3 fade-slide bottom"
                  data-delay="0.4"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button faq__itemTitle-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is included in my cyberhub?

                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="faq__itemContent-3">
                      In CyberHub you will face spoofing attack simulations like IP, email, and ARP spoofing, teaching you how to spot and stop identity-based threats. You’ll get hands-on with an interactive online shell powered by Docker and xterm.js, facing real-world hacking challenges. Plus, AI-guided support and custom user scenarios help you learn faster, track your progress, and master cybersecurity tactics.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item faq__item-3 fade-slide bottom"
                  data-delay="0.6"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed faq__itemTitle-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Will you Be able to defend against different spoofing attacks?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="faq__itemContent-3">
                      With CyberHub, you’ll master defending against IP spoofing, email spoofing, and ARP spoofing through hands-on simulations. You’ll learn to detect, prevent, and outsmart attackers — turning you into a cybersecurity powerhouse.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item faq__item-3 fade-slide bottom"
                  data-delay="0.8"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed faq__itemTitle-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I sign up?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="faq__itemContent-3">
                        Please i order to sign up click on the button in the top right corner and enter your credentials and you will get access to this course and every other course on our platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-12">
            <div className="faq__right-3">
              <img className="faq__img-3" src={data.image} alt="Faq" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
