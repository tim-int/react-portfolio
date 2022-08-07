import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container text-center'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/teemoherra/'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='linkedin.com/in/timothy-herrera-a1b969b1'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter-square'></i>
                    </a>

                    </div>

                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>Tim-Int</span>

                    </span>

                </div>

                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {""}
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Passionate Dev",
                                1000,
                                "Full Stack Dev",
                                1000,
                                "MERN Stack Dev",
                                1000,
                                "Laravel Dev",
                                1000,
                                "React Dev",
                                1000,
                            ]}
                            />
                        </h1>

                        <span className='profile-role-tagline'>
                            A new talent for building front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        Hire Me</button>
                    <a href='#' download='#'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>

                </div>

            </div>

            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>

            </div>

        </div>
    </div>
  )
}
