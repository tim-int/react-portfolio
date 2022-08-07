import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';
import './Certificates.css'; 

export default function Certificates(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const options ={
            loop: true,
            margin:0,
            nav: true,
            animateIn: "bounceInRight",
            animateOut: "bounceOutRight",
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                1000:{
                    items:3,
                },
            }
        }


  return (
    <div>
        <ScreenHeading
        title={'Certificates'}
        subHeading={'My Certificates from Bootcamp'}
        />
        <section className='certificates-section fade-in' id={props.id || ''}>
            <div className='container text-center'>
                <div className='row'>
                    <OwlCarousel className='owl-carousel' id='certificates-carousel' {...options}>
                        <div className='col-lg-12'>
                            <div className='certi-item'>
                                <div className='certi-card'>
                                    <div className='certi-info'>
                                        <img src='img/certificates/fullstack.PNG' alt='no img'></img>
                                    </div>
                                    <h5>MERN Certificate</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='certi-item'>
                                <div className='certi-comment'>
                                    <div className='certi-info'>
                                        <img src='img/certificates/laravel.PNG' alt='no img'></img>
                                    </div>
                                    <h5>Laravel Certificate</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='certi-item'>
                                <div className='certi-comment'>
                                    <div className='certi-info'>
                                        <img src='img/certificates/mySQL.PNG' alt='no img'></img>
                                    </div>
                                    <h5>MySQL Certificate</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className='certi-item'>
                                <div className='certi-comment'>
                                    <div className='certi-info'>
                                        <img src='img/certificates/php.PNG' alt='no img'></img>
                                    </div>
                                    <h5>PHP Certificate</h5>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    </div>
  )
}
