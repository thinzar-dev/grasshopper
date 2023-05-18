import React from 'react';
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Trello_101 = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        appendDots: dots => (
            <div
                style={{
                    // backgroundColor: "#ddd",

                }}
            >
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
                    initialSlide: 2
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
        <div className='trello-101-container'>
            <div className='trello-title-wrapper'>
                <div className='trello-title-header'>
                    <div className='trello-title'>
                        <p className='trello-p'>Trello 101</p>
                        <h2>A productivity powerhouse</h2>
                        <   p>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <a data-uuid="text-1-162-0" href="https:/guide">guide for getting started</a>.</p>
                    </div>
                </div>
            </div>
            <div className='tab-container'>
                <Tabs>
                    <TabList>
                        <Tab>
                            <h3>Boards</h3>
                            <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                        </Tab>
                        <Tab>
                            <h3>Lists</h3>
                            <p>The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                        </Tab>
                        <Tab>
                            <h3>Cards</h3>
                            <p>Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="panel-content">
                            <img src='https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1536&fm=webp'></img>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <img src='https://images.ctfassets.net/rz1oowkt5gyp/4U0VUZYX2tQmB5KVGxBabp/7321ac088fe8ec39dbe3069c47d7df99/Carousel_Image_Lists_2x.png?w=1536&fm=webp'></img>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <img src='https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png?w=1536&fm=webp'></img>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <div className='ipad-101-container'>
                <Slider {...settings}>
                    <div className='panel-container'>
                        <div className="panel-img">
                            <img src='https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1536&fm=webp'></img>
                        </div>
                        <div className='ipad-panel-content'>
                            <h3>Boards</h3>
                            <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                        </div>
                    </div>
                    <div className='panel-container'>
                        <div className="panel-img">
                            <img src='https://images.ctfassets.net/rz1oowkt5gyp/4U0VUZYX2tQmB5KVGxBabp/7321ac088fe8ec39dbe3069c47d7df99/Carousel_Image_Lists_2x.png?w=1536&fm=webp'></img>
                        </div>
                        <div className='ipad-panel-content'>
                            <h3>Lists</h3>
                            <p>The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                        </div>
                    </div>
                    <div className='panel-container'>
                        <div className="panel-img">
                            <img src='https://images.ctfassets.net/rz1oowkt5gyp/26CA6JZeRgoOK4nuRHnIlY/060702a80cf7c3be3651d9297d196267/Carousel_Image_Cards_2x.png?w=1536&fm=webp'></img>
                        </div>
                        <div className='ipad-panel-content'>
                            <h3>Cards</h3>
                            <p>Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Trello_101