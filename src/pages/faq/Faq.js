import React from "react";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import "./faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <Header />
      <div className="container faq-inner">
        <h1 className="py-3">Have some Questions?</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What are your regular office hours?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Cum sociis natoque penatibus et magnis dis parturient ntesmus.
                Proin vel nibh et elit mollis commodo et nec augue tristique sed
                Quisque velit nisi, pretium ut lacinia lementum id enim. Nulla
                quis lorem ut libero malesuada feugiat. Cum sociis natoque
                penatibus et magnis
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What is your appointment policy?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Cum sociis natoque penatibus et magnis dis parturient ntesmus.
                Proin vel nibh et elit mollis commodo et nec augue tristique sed
                Quisque velit nisi, pretium ut lacinia lementum id enim. Nulla
                quis lorem ut libero malesuada feugiat. Cum sociis natoque
                penatibus et magnis
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What should I do if I′m ill?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Cum sociis natoque penatibus et magnis dis parturient ntesmus.
                Proin vel nibh et elit mollis commodo et nec augue tristique sed
                Quisque velit nisi, pretium ut lacinia lementum id enim. Nulla
                quis lorem ut libero malesuada feugiat. Cum sociis natoque
                penatibus et magnis
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How do I get a refill on my prescription?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Cum sociis natoque penatibus et magnis dis parturient ntesmus.
                Proin vel nibh et elit mollis commodo et nec augue tristique sed
                Quisque velit nisi, pretium ut lacinia lementum id enim. Nulla
                quis lorem ut libero malesuada feugiat. Cum sociis natoque
                penatibus et magnis
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
