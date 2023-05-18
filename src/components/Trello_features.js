import React from 'react'

const Trello_features = () => {
    return (
        <div className='trello-features'>
            <div className='spacer-8'></div>
            <div className='spacer-3' id='features'></div>
            <div className='trello-title'>
                <div>
                    <p className='trello-p'>Powerful ways to grow</p>
                    <h2>Do more with Trello</h2>
                </div>
                <p>Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
            {/* <div className='spacer-3'></div> */}
            </div>
            <div className='trello-features-container'>
                <div className='trello-features-wrapper'>
                    <div className='trello-features-row'>
                        <div className='trello-features-col1'>
                            <div className='trello-features-info'>
                                <div className='trello-features-info-layout'>
                                    <img src="//images.ctfassets.net/rz1oowkt5gyp/gMfkjoA3yWYG3kat3qjpW/3902bfdfccf08869e33d63bbc9d1969b/Integrations_Puzzle.svg" alt="" width="107" height="100" loading="lazy" />
                                    <div className='trello-features-text'>
                                        <div>
                                            <h3>Integrations</h3>
                                            <p>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</p>
                                        </div>
                                    </div>
                                    <div className='trello-features-link'>
                                        <a href="/integrations"><span>Browse Integrations</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trello-features-col2'>
                            <div className='trello-features-info'>
                                <div className='trello-features-info-layout'>
                                    <img src='//images.ctfassets.net/rz1oowkt5gyp/7wxRW93hvb7858bMsK4LSs/f6fc44fb23dbc6ee9bc6a7f6e2af0fb7/Gears.svg' alt="" width="107" height="100" loading="lazy" />
                                    <div className='trello-features-text'>
                                        <div>
                                            <h3>Butler Automation</h3>
                                            <p>No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p>
                                        </div>
                                    </div>
                                    <div className='trello-features-link'>
                                        <a href="/butler-automation"><span>Get to know Automation</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trello-features-col3'>
                            <div className='trello-features-info'>
                                <div className='trello-features-info-layout'>
                                    <img src='//images.ctfassets.net/rz1oowkt5gyp/mNa3Mi7T6ga2OTrNxJx1D/8991b8d57cd6ec7330398c7a8757b4dc/Search_Value.svg' alt="" width="107" height="100" loading="lazy" />
                                    <div className='trello-features-text'>
                                        <div>
                                            <h3>Butler Automation</h3>
                                            <p>No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p>
                                        </div>
                                    </div>
                                    <div className='trello-features-link'>
                                        <a href="/butler-automation"><span>Get to know Automation</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='space-2'></div> */}
        </div>
    )
}

export default Trello_features
