import React, { useState } from 'react';

const Trello_plans = () => {

    // const [user, setUser] = useState(50);
    // const [price, setPrice] = useState('17.50');

    // const changeUser = (event) => {
    //     console.log(event.target.value);
    //     console.log('user: ' + user);
        
    //     if (event.target.value <= 250) {
    //         setPrice(17.50);
    //         setUser(event.target.value);
    //     }
    //     else if (user > event.target.value) {
    //         // price += 0.01;
    //         setPrice((Number(price) + 0.01).toPrecision(4));
    //         // console.log(Number(price) + 0.01);
    //         // console.log(`${price} + 0.01`);
    //         console.log('updated price: ' + price);
    //         setUser(event.target.value);
    //     }
    //     else if (user < event.target.value) {
    //         console.log('current price ' + price);
    //         setPrice((price - 0.01).toPrecision(4));
    //         setUser(event.target.value);
    //         console.log('******************************');
    //     }
    // }

    const updatePrice = () => {

    }

    // const changePrice = (event) => {
    //     if (250 < event.target.value <= 5000) {
    //         console.log(event.target.value);
    //         setPrice(event.target.value - 0.01);
    //     }
    // }

    return (
        <div className='trello-plans' id='plans'>
            <div className='trello-plans-container'>
                <div className='trello-plans-wrapper'>
                    <div className='trello-plans-header'>
                        <div>
                            <h2>Trello priced your way</h2>
                            <p>Trusted by millions, Trello powers teams all around the world.</p>
                        </div>
                        <div>
                            <a className='btn-plans'><span>Compare plans</span></a>
                        </div>
                    </div>


                    <div className='trello-plans-section'>
                        <div className='trello-plans-row'>
                            <div className='trello-plans-name'>
                                <h3 className='plan-name'>Free</h3>
                                <h3 className='plan-name'>Standard</h3>
                                <h3 className='plan-name plan-name-premium'>Premium</h3>
                                <h3 className='plan-name'>Enterprise</h3>
                            </div>
                            <div className='trello-plans-price'>
                                <div className='plans-price-col'>
                                    <div className='plan-price'>
                                        <span className='price-currency'>$</span>0
                                        <span className='price-currency'>USD</span>
                                    </div>
                                    <p className='price-detail'>Free for your whole team</p>
                                </div>
                                <div className='plans-price-col'>
                                    <div className='plan-price'>
                                        <span className='price-currency'>$</span>5
                                        <span className='price-currency'>USD</span>
                                    </div>
                                    <p className='price-detail'>Per user/month if billed annually ($6 billed monthly)</p>
                                </div>
                                <div className='plans-price-col plans-price-col-premium'>
                                    <div className='plan-price'>
                                        <span className='price-currency'>$</span>10
                                        <span className='price-currency'>USD</span>
                                    </div>
                                    <p className='price-detail'>Per user/month if billed annually ($12.50 billed monthly)</p>
                                </div>
                                <div className='plans-price-col'>
                                    <div className='plan-price'>
                                        <span className='price-currency'>$</span>17.50
                                        <span className='price-currency'>USD</span>
                                    </div>
                                    <p className='price-detail'>Per user/month - billed annually ($210.00 annual price per user)</p>
                                </div>
                            </div>
                            <div className='plans-description'>
                                <p className='description'>For individuals or teams looking to organize any project.</p>
                                <p className='description'>For small teams that need to manage work and scale collaboration. </p>
                                <p className='description description-premium'>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
                                <div className='description'>
                                    <p className='description-p'>For organizations that need to connect work across teams with more security and controls.</p>
                                    <div className='description-calculation'>
                                        <div>Est. cost for <input type="number" value='50' min="50" max="5000" />users</div>
                                        <input
                                            type='range'
                                            // onChange={changeUser}
                                            min={50}
                                            max={5000}
                                            value={50}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className='plans-btn'>
                                <div className='free-link'>
                                    <div className='free-plan-link'>
                                        <a aria-label="Get started with a Free plan" data-uuid="411SemhnWRkX2rXfhZ9ZDP" href="https://id.atlassian.com/signup?application=trello&amp;continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&amp;display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D"><span>Get started</span></a>
                                    </div>
                                </div>
                                <div className='free-link'>
                                    <div className='free-plan-link'>
                                        <a aria-label="Sign up for a Standard plan now" data-uuid="411SemhnWRkX2rXfhZ9ZDP" href="/signup"><span>Sign up now</span></a>
                                    </div>
                                </div>
                                <div className='free-link free-link-premium'>
                                    <div className='free-plan-link free-plan-link-premium'>
                                        <a aria-label="Try Premium for free" data-uuid="4m7gBjjf03EDXHjDZUcMeC" href='/signup'><span>Try for free</span></a>
                                    </div>
                                </div>
                                <div className='free-link'>
                                    <div className='free-plan-link'>
                                        <a aria-label="Contact sales about Trello Enterprise" data-uuid="2NmD7Mbg6mazGG7ONx1gbZ" href="/enterprise#contact"><span>Contact sales</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className='plans-info'>
                                <div className='plan-info-link'></div>
                                <div className='plan-info-link'>
                                    <div className='link-buttonstyle'>
                                        <a href="/standard"><span>Learn more about Standard</span></a>
                                    </div>
                                </div>
                                <div className='plan-info-link plan-info-link-premium'>
                                    <div className='link-buttonstyle'>
                                        <a href="/premium"><span>Learn more about Premium</span></a>
                                    </div>
                                </div>
                                <div className='plan-info-link'>
                                    <div className='link-buttonstyle'>
                                        <a href="/enterprise"><span>Learn more about Enterprise</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='trello-plans-ipad-row'>
                            <h3 className='plan-name'>Free</h3>
                            <div className='plans-price-col'>
                                <div className='plan-price'>
                                    <span className='price-currency'>$</span>0
                                    <span className='price-currency'>USD</span>
                                </div>
                                <p className='price-detail'>Free for your whole team</p>
                            </div>
                            <p className='description'>For individuals or teams looking to organize any project.</p>
                            <div className='free-link'>
                                <div className='free-plan-link'>
                                    <a aria-label="Get started with a Free plan" data-uuid="411SemhnWRkX2rXfhZ9ZDP" href="https://id.atlassian.com/signup?application=trello&amp;continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&amp;display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D"><span>Get started</span></a>
                                </div>
                            </div>
                            <div className='plan-info-link'></div>
                        </div>

                        <div className='trello-plans-ipad-row'>
                            <h3 className='plan-name'>Standard</h3>
                            <div className='plans-price-col'>
                                <div className='plan-price'>
                                    <span className='price-currency'>$</span>5
                                    <span className='price-currency'>USD</span>
                                </div>
                                <p className='price-detail'>Per user/month if billed annually ($6 billed monthly)</p>
                            </div>
                            <p className='description'>For individuals or teams looking to organize any project.</p>
                            <div className='free-link'>
                                <div className='free-plan-link'>
                                    <a aria-label="Sign up for a Standard plan now" data-uuid="411SemhnWRkX2rXfhZ9ZDP" href="/signup"><span>Sign up now</span></a>
                                </div>
                            </div>
                            <div className='plan-info-link'>
                                <div className='link-buttonstyle'>
                                    <a href="/standard"><span>Learn more about Standard</span></a>
                                </div>
                            </div>
                        </div>

                        <div className='trello-plans-ipad-row'>
                            <h3 className='plan-name plan-name-premium'>Premium</h3>
                            <div className='plans-price-col plans-price-col-premium'>
                                <div className='plan-price'>
                                    <span className='price-currency'>$</span>10
                                    <span className='price-currency'>USD</span>
                                </div>
                                <p className='price-detail'>Per user/month if billed annually ($12.50 billed monthly)</p>
                            </div>
                            <p className='description description-premium'>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
                            <div className='free-link free-link-premium'>
                                <div className='free-plan-link free-plan-link-premium'>
                                    <a aria-label="Try Premium for free" data-uuid="4m7gBjjf03EDXHjDZUcMeC" href='/signup'><span>Try for free</span></a>
                                </div>
                            </div>
                            <div className='plan-info-link plan-info-link-premium'>
                                <div className='link-buttonstyle'>
                                    <a href="/premium"><span>Learn more about Premium</span></a>
                                </div>
                            </div>
                        </div>

                        <div className='trello-plans-ipad-row'>
                            <h3 className='plan-name'>Enterprise</h3>
                            <div className='plans-price-col'>
                                <div className='plan-price'>
                                    <span className='price-currency'>$</span>17.50
                                    <span className='price-currency'>USD</span>
                                </div>
                                <p className='price-detail'>Per user/month - billed annually ($210.00 annual price per user)</p>
                            </div>
                            <div className='description'>
                                <p className='description-p'>For organizations that need to connect work across teams with more security and controls.</p>
                                <div className='description-calculation'>
                                    <div>Est. cost for <input type="number" value="50" min="50" max="5000" aria-label="Users" />users</div>
                                    <input type="range" value="50" min="50" max="5000" aria-label="Users" />
                                    {/* <input type="range" name="rangeInput" min="50" max="5000" onchange={{updatePrice}}></input> */}
                                </div>
                            </div>
                            <div className='free-link'>
                                <div className='free-plan-link'>
                                    <a aria-label="Contact sales about Trello Enterprise" data-uuid="2NmD7Mbg6mazGG7ONx1gbZ" href="/enterprise#contact"><span>Contact sales</span></a>
                                </div>
                            </div>
                            <div className='plan-info-link'>
                                <div className='link-buttonstyle'>
                                    <a href="/enterprise"><span>Learn more about Enterprise</span></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trello_plans
