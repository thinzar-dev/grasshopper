import React from 'react';

const Banner = () => {
    return (
        <div className='banner-section'>
            <div className='banner-container'>
                <div className='banner-wrapper'>
                    <div className='banner-text'>
                        <div className='text-block'>
                            <h1>Trello brings all your tasks, teammates, and tools together</h1>
                            <p>Keep everything in the same place—even if your team isn’t.</p>
                        </div>
                        <div className='spacer-05'></div>
                        <form action="/signup_redirect" data-testid="ui-email-signup-form" data-uuid="2vnd61JpVoeKM6WavABI4B" method="POST" className='form-container'>
                            {/* <input type="hidden" name="skipValidation" value="1"> */}
                            <input type="email" aria-label="Email" data-testid="ui-email-signup-input" name="email" placeholder="Email" className='form-input'></input>
                            <div className='form-submit'>
                                <a aria-label="Sign up for Trello - it’s free!" href="https://id.atlassian.com/signup?application=trello&amp;continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&amp;display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D">
                                    <span>Sign up - it’s free!</span>
                                </a>
                                    {/* <button type="submit" aria-label="Sign up for Trello - it’s free!">
                                        Sign up - it’s free!
                                    </button> */}
                            </div>
                        </form>
                        <div className='spacer-05'></div>
                        <span data-testid="ui-modal-trigger" className='watch-vd'>
                            <div className='vd-link'>
                                <a data-uuid="2Wmphdxwx9KTtdIcn3RFYb" href="#video">
                                    <span>Watch video</span>
                                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m5 5h14v14h-14z"></path>
                                        <path clip-rule="evenodd" d="m10.0138 16.3878c-.83597.4912-1.5138.105-1.5138-.8645v-7.04491c0-.97008.6755-1.358 1.5138-.86566l6.465 3.79747c.5548.3261.5589.8517 0 1.1801z" fill="currentColor" fill-rule="evenodd"></path>
                                        <circle cx="12" cy="12" r="11.5" stroke="currentColor"></circle>
                                    </svg>
                                </a>
                            </div>
                        </span>
                    </div>
                    <div className='banner-image'>
                        <img src='https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=2280&fm=webp'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner