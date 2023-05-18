import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trello_action = () => {

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
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        appendDots: dots => (
            <div className='dot-bar'>
                <ul className='dot-each'> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='dot-li'></div>
        ),
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true
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
        <div className='trello-action-container' id='workflows'>
            <div className='trello-action'>
                <div>
                    <p className='trello-p'>Trello in action</p>
                    <h2>Workflows for any project, big or small</h2>
                </div>
            </div>
            {/* <div style={{ height: '3rem' }}></div> */}
            <div className='slider-container'>
                <Slider {...settings}>
                    <div className='action-workflows'>
                        <a href="https://trello.com/use-cases/project-management" className='action-link'>
                            <div color="rgba(9, 30, 66, 1)" className='color-bar1'></div>
                            <div className='action-content'>
                                <div className='action-icon action-icon1'></div>
                                <h3>Project management</h3>
                                <p class="muted"> </p>
                                <p>Keep tasks in order, deadlines on track, and team members aligned with Trello.</p>
                            </div>
                        </a>
                    </div>
                    <div className='action-workflows'>
                        <a href="https://trello.com/use-cases/project-management" className='action-link'>
                            <div color="rgba(9, 30, 66, 1)" className='color-bar2'></div>
                            <div className='action-content'>
                                <div className='action-icon action-icon2'></div>
                                <h3>Meetings</h3>
                                <p class="muted"> </p>
                                <p>Empower your team meetings to be more productive, empowering, and dare we say—fun.</p>
                            </div>
                        </a>
                    </div>
                    <div className='action-workflows'>
                        <a href="https://trello.com/use-cases/project-management" className='action-link'>
                            <div color="rgba(9, 30, 66, 1)" className='color-bar3'></div>
                            <div className='action-content'>
                                <div className='action-icon action-icon3'></div>
                                <h3>Onboarding</h3>
                                <p class="muted"> </p>
                                <p>Onboarding to a new company or project is a snap with Trello’s visual layout of to-do’s, resources, and progress tracking.</p>
                            </div>
                        </a>
                    </div>
                    <div className='action-workflows'>
                        <a href="https://trello.com/use-cases/project-management" className='action-link'>
                            <div color="rgba(9, 30, 66, 1)" className='color-bar4'></div>
                            <div className='action-content'>
                                <div className='action-icon action-icon4'></div>
                                <h3>Task management</h3>
                                <p class="muted"> </p>
                                <p>Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time.</p>
                            </div>
                        </a>
                    </div>
                    <div className='action-workflows'>
                        <a href="https://trello.com/use-cases/project-management" className='action-link'>
                            <div color="rgba(9, 30, 66, 1)" className='color-bar5'></div>
                            <div className='action-content'>
                                <div className='action-icon action-icon5'></div>
                                <h3>Brainstorming</h3>
                                <p class="muted"> </p>
                                <p>Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.</p>
                            </div>
                        </a>
                    </div>
                    <div className='action-workflows'>
                        <a href="https://trello.com/use-cases/project-management" className='action-link'>
                            <div color="rgba(9, 30, 66, 1)" className='color-bar6'></div>
                            <div className='action-content'>
                                <div className='action-icon action-icon6'></div>
                                <h3>Resource hub</h3>
                                <p class="muted"> </p>
                                <p>Save time with a well-designed hub that helps teams find information easily and quickly.</p>
                            </div>
                        </a>
                    </div>
                </Slider>
            </div>
            <div className='trello-usecase'>
                <div className='trello-usecase-wrapper'>
                    <div className='trello-usecase-text'>
                        <p>No need to start from scratch. Jump-start your workflow with a proven playbook designed for different teams. Customize it to make it yours.</p>
                    </div>
                    <div className='trello-usecase-link'>
                        <a className='btn-usecase'><span>Explore all Use Cases</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trello_action
