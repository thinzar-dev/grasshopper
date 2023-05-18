import React from 'react'

const Trello_started = () => {
    return (
        <div className='trello-started'>
            <div className='trello-started-container'>
                <div className='trello-started-wrapper'>
                    <div className='trello-started-header'>
                        <h2>Get started with Trello today</h2>
                    </div>
                    <form action="/signup_redirect" data-testid="ui-email-signup-form" data-uuid="2vnd61JpVoeKM6WavABI4B" method="POST" className='form-container'>
                        <input type="email" aria-label="Email" data-testid="ui-email-signup-input" name="email" placeholder="Email" className='form-input'></input>
                        <div className='btn-signup'>
                            <button type="submit" aria-label="Sign up for Trello - it’s free!">
                                Sign up - it’s free!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Trello_started
