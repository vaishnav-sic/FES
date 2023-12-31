import React, { useState } from "react";

const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        {/* <Swiper getSwiper={setSwiper}> */}
        <div className="banner-one__slide banner-one__slide-one">
          <div className="container">
            <div className="banner-one__bubble-1"></div>
            <div className="banner-one__bubble-2"></div>
            <div className="banner-one__bubble-3"></div>
            <img
              src="/assets/images/doctor.png"
              alt=""
              className="banner-one__scratch"
            />
            {/* <img src="/assets/images/Engineer.jpg" className="banner-one__person" alt="" /> */}
            <div className="row no-gutters">
              <div className="col-xl-12">
                <h3 className="banner-one__title banner-one__light-color">
                  For guaranteed
                  <br />
                  admissions
                </h3>
                <p className="banner-one__tag-line">
                  to medical & engineering{" "}
                </p>
                <p className="banner-one__tag-line-one">
                  We Provide Many Choice for Admission in Various Colleges!
                </p>
                <button className="btn">
                  <a href="#registration1" className="thm-btn banner-one__btn">
                    Book Consultation
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="banner-one__slide banner-one__slide-two">
            <div className="container">
              <div className="banner-one__bubble-1"></div>
              <div className="banner-one__bubble-2"></div>
              <div className="banner-one__bubble-3"></div>
              <img
                src="/assets/images/engineering-students.jpg"
                className="banner-one__person"
                alt=""
              /> */}
        {/* <img src="/assets/images/slider-1-person-2.png" className="banner-one__person" alt="" /> */}
        {/* <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    We Can <br />
                    Teach You
                  </h3>
                  <p className="banner-one__tag-line">
                    Education is the best key to success
                  </p> */}
        {/* <a href="#" className="thm-btn banner-one__btn">Learn More</a> */}
        {/* </div>
               </div>
            </div>
          </div>
        </Swiper> */}
      </section>
      {/* <div className="banner-carousel-btn">
        <div
          onClick={goPrev}
          className="banner-carousel-btn__left-btn banner-arrow"
        >
          <i className="kipso-icon-left-arrow"></i>
        </div>
        <div
          onClick={goNext}
          className="banner-carousel-btn__right-btn banner-arrow"
        >
          <i className="kipso-icon-right-arrow"></i>
        </div>
      </div> */}
      {/* <div className="banner-one__cta">
                <div className="banner-one__cta-icon">
                    <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
                </div> */}
      {/* <div className="banner-one__cta-title">
                    <h3 className="banner-one__cta-text"><a href="#">Read how we encourage our
                        students to learn</a></h3>
                </div> */}
      {/* <div className="banner-one__cta-link">
                    <a href="#"><i className="kipso-icon-right-arrow"></i></a>
                </div> */}
      {/* </div> */}
    </div>
  );
};
export default SliderOne;
