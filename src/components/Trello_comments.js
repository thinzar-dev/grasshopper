import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trello_comments = () => {

    function SamplePrevArrow(props) {
        const { arrowStyle, style, onClick } = props;
        return (
            <button onClick={onClick} type='button' aria-label="Previous" aria-disabled="false" data-testid="arrow_prev" className='arrowStyle prev-arrow'><svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect width="30" height="30" rx="15"></rect><path d="M16.7167 8.21674L10.2168 14.7167L16.5001 20.9999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        );
    }

    function SampleNextArrow(props) {
        const { arrowStyle, style, onClick } = props;
        return (
            <button onClick={onClick} type='button' aria-label="Next" aria-disabled="true" data-testid="arrow_next" className='arrowStyle next-arrow'><svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect x="30" y="30" width="30" height="30" rx="15" transform="rotate(-180 30 30)"></rect><path d="M13.2833 21.7833L19.7832 15.2833L13.4999 9.00007" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div></div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='trello-comments'>
            <div className='spacer-3' id='survey'></div>
            <div className='trello-comments-container'>
                <div className='trello-comments-wrapper'>
                    <div className='trello-comments-layout'>
                        <div className='trello-comments-row'>
                            <div className='trello-comments-col'>
                                <div className='comments-slider-container'>
                                    <Slider {...settings}>
                                        <div className='comments-container'>
                                            <div className='comments-slider-layout'>
                                                <div className='comments-slider-slide'>
                                                    <div className='comments-slider-slidelayout'>
                                                        <div className='comments-slider-row'>
                                                            <figure className='comments-client'>
                                                                <blockquote className='quote-section'>
                                                                    <div>
                                                                        <p>[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.</p>
                                                                    </div>
                                                                </blockquote>
                                                                <figcaption className='quote-info'>
                                                                    <p>Joey Rosenberg</p>
                                                                    <p>Global Leadership Director at Women Who Code</p>
                                                                    <div className='quote-img-link'>
                                                                        <img src="//images.ctfassets.net/rz1oowkt5gyp/2f3keSvy7vtldV4YDFKkE2/5ed788fb5257c342995d25ba8e8e313d/WomenWhoCode_logo.svg" alt="Women Who Code company logo" width="84" height="36" loading="lazy" class="Picture__Image-sc-1wdxyb4-0 eYmxm" />
                                                                            <a href="https://blog.trello.com/women-who-code" aria-label="Read the Women Who Code customer story" data-uuid="2o9mLypfF08ECjP8pn9bsL" target="_blank" rel="noopener">Read the story</a>
                                                                    </div>
                                                                </figcaption>
                                                            </figure>
                                                            <div className='product-survey'>
                                                                <h3>75% of organizations report that Trello delivers value to their business within 30 days.</h3>
                                                                <div className='product-factlink'>
                                                                    <a href="https://www.techvalidate.com/tvid/1D4-3E6-170" data-uuid="3IwPp5ABfwIFLIWnCXu3RX" target="_blank" rel="noopener">Trello TechValidate Survey</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comments-container'>
                                            <div className='comments-slider-layout'>
                                                <div className='comments-slider-slide'>
                                                    <div className='comments-slider-slidelayout'>
                                                        <div className='comments-slider-row'>
                                                            <figure className='comments-client'>
                                                                <blockquote className='quote-section'>
                                                                    <div>
                                                                        <p>Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.</p>
                                                                    </div>
                                                                </blockquote>
                                                                <figcaption className='quote-info'>
                                                                    <p>Sumeet Moghe</p>
                                                                    <p>Product Manager at ThoughtWorks</p>
                                                                    <div className='quote-img-link'>
                                                                        <img src="//images.ctfassets.net/rz1oowkt5gyp/2kIh1cWqsxjtHwWHWJJPsJ/d8436f3979be6cab7931f4d276c2d5ce/thoughtworks.svg" alt="Women Who Code company logo" width="84" height="36" loading="lazy" class="Picture__Image-sc-1wdxyb4-0 eYmxm" />
                                                                        <a href="https://www.atlassian.com/customers/thoughtworks" aria-label="Read the ThoughtWorks customer story" data-uuid="2o9mLypfF08ECjP8pn9bsL" target="_blank" rel="noopener">Read the story</a>
                                                                    </div>
                                                                </figcaption>
                                                            </figure>
                                                            <div className='product-survey'>
                                                                <h3>81% of customers chose Trello for its ease of use.</h3>
                                                                <div className='product-factlink'>
                                                                    <a href="https://www.techvalidate.com/tvid/270-DFB-21A" data-uuid="3IwPp5ABfwIFLIWnCXu3RX" target="_blank" rel="noopener">Trello TechValidate Survey</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comments-container'>
                                            <div className='comments-slider-layout'>
                                                <div className='comments-slider-slide'>
                                                    <div className='comments-slider-slidelayout'>
                                                        <div className='comments-slider-row'>
                                                            <figure className='comments-client'>
                                                                <blockquote className='quote-section'>
                                                                    <div>
                                                                        <p>We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.</p>
                                                                    </div>
                                                                </blockquote>
                                                                <figcaption className='quote-info'>
                                                                    <p>Jefferson Scomacao</p>
                                                                    <p>Development Manager at IKEA/PTC</p>
                                                                    <div className='quote-img-link'>
                                                                        <img src="//images.ctfassets.net/rz1oowkt5gyp/3X64fxSs4ek9A0ex45BUNI/911daed79127cb2f8a021da93fb68b9f/ptc-logo.svg" alt="Women Who Code company logo" width="84" height="36" loading="lazy" class="Picture__Image-sc-1wdxyb4-0 eYmxm" />
                                                                        <a href="https://www.atlassian.com/customers/ptc" aria-label="Read the ThoughtWorks customer story" data-uuid="2o9mLypfF08ECjP8pn9bsL" target="_blank" rel="noopener">Read the story</a>
                                                                    </div>
                                                                </figcaption>
                                                            </figure>
                                                            <div className='product-survey'>
                                                                <h3>74% of customers say Trello has improved communication with their co-workers and teams.</h3>
                                                                <div className='product-factlink'>
                                                                    <a href="https://www.techvalidate.com/tvid/CDB-6BC-D03" data-uuid="3IwPp5ABfwIFLIWnCXu3RX" target="_blank" rel="noopener">Trello TechValidate Survey</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='comments-container'>
                                            <div className=''>
                                                <div aria-hidden="true" class="Carouselstyles__Slide-sc-z6wsqn-3 oQtLv">
                                                    <div class="UiSocialProofstyles__ShadowWrapper-sc-fym1cs-7 icRVlm">
                                                        <div data-uuid="4G5xD7fSCJPlUGer0k2GSR" class="UiSocialProofstyles__SocialProof-sc-fym1cs-6 iUJVel">
                                                            <figure class="UiSocialProofstyles__QuoteFigure-sc-fym1cs-4 gZpdPi">
                                                                <blockquote class="UiSocialProofstyles__Quote-sc-fym1cs-2 bvDpov">
                                                                    <div>
                                                                        <p>Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.</p>
                                                                    </div>
                                                                </blockquote>
                                                                <figcaption class="UiSocialProofstyles__QuoteCaption-sc-fym1cs-3 enZpLY">
                                                                    <p>Sumeet Moghe</p><p>Product Manager at ThoughtWorks</p>
                                                                    <div class="UiSocialProofstyles__QuoteImageLink-sc-fym1cs-5 dbZHYD">
                                                                        <img src="//images.ctfassets.net/rz1oowkt5gyp/2kIh1cWqsxjtHwWHWJJPsJ/d8436f3979be6cab7931f4d276c2d5ce/thoughtworks.svg" alt="ThoughtWorks company logo" width="409" height="66" loading="lazy" class="Picture__Image-sc-1wdxyb4-0 eYmxm" />
                                                                        <a href="https://www.atlassian.com/customers/thoughtworks" aria-label="Read the ThoughtWorks customer story" data-uuid="5k3eVPvJud3OjD1ImcECnv" target="_blank" rel="noopener" tabindex="-1">Read the story</a>
                                                                    </div>
                                                                </figcaption>
                                                            </figure>
                                                            <div class="UiSocialProofstyles__ProductFact-sc-fym1cs-0 bSQGqD">
                                                                <h3>81% of customers chose Trello for its ease of use.</h3>
                                                                <div class="UiSocialProofstyles__ProductFactLink-sc-fym1cs-1 cwasVy">
                                                                    <a href="https://www.techvalidate.com/tvid/270-DFB-21A" data-uuid="4kY77yqJQ25IKBh5SpabdB" target="_blank" rel="noopener" tabindex="-1">Trello TechValidate Survey</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comments-container'>
                                            <div className=''>
                                                <div aria-hidden="true" class="Carouselstyles__Slide-sc-z6wsqn-3 oQtLv">
                                                    <div class="UiSocialProofstyles__ShadowWrapper-sc-fym1cs-7 icRVlm">
                                                        <div data-uuid="duBgUEc6BaZ9zi5CXFYWr" class="UiSocialProofstyles__SocialProof-sc-fym1cs-6 iUJVel">
                                                            <figure class="UiSocialProofstyles__QuoteFigure-sc-fym1cs-4 gZpdPi">
                                                                <blockquote class="UiSocialProofstyles__Quote-sc-fym1cs-2 bvDpov">
                                                                    <div>
                                                                        <p>We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.</p>
                                                                    </div>
                                                                </blockquote>
                                                                <figcaption class="UiSocialProofstyles__QuoteCaption-sc-fym1cs-3 enZpLY">
                                                                    <p>Jefferson Scomacao</p>
                                                                    <p>Development Manager at IKEA/PTC</p>
                                                                    <div class="UiSocialProofstyles__QuoteImageLink-sc-fym1cs-5 dbZHYD">
                                                                        <img src="//images.ctfassets.net/rz1oowkt5gyp/3X64fxSs4ek9A0ex45BUNI/911daed79127cb2f8a021da93fb68b9f/ptc-logo.svg" alt="PTC company logo" width="133" height="52" loading="lazy" class="Picture__Image-sc-1wdxyb4-0 eYmxm" />
                                                                        <a href="https://www.atlassian.com/customers/ptc" aria-label="Read the IKEA/PTC customer story" data-uuid="Xje1OQg79yZ8ydsjvZXa5" target="_blank" rel="noopener" tabindex="-1">Read the story</a>
                                                                    </div>
                                                                </figcaption>
                                                            </figure>
                                                            <div class="UiSocialProofstyles__ProductFact-sc-fym1cs-0 bSQGqD">
                                                                <h3>74% of customers say Trello has improved communication with their co-workers and teams.</h3>
                                                                <div class="UiSocialProofstyles__ProductFactLink-sc-fym1cs-1 cwasVy">
                                                                    <a href="https://www.techvalidate.com/tvid/CDB-6BC-D03" data-uuid="2CLrQvWePxpcmIchIL6wSr" target="_blank" rel="noopener" tabindex="-1">Trello TechValidate Survey</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trello_comments
