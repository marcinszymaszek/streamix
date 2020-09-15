import React from 'react';

const AnimationCard = () => {
    return (
        <section className="animation-card">
            <div className="container-outter">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12" id="card-animation-module">
                            <div className="container-animation">
                                <video src="https://video-ssl.itunes.apple.com/itunes-assets/Video114/v4/1a/b7/a5/1ab7a5e6-4eb2-0628-c3ae-17848de951b4/mzvf_18090320032616561904.640x478.h264lc.U.p.m4v" 
                                type="video/mp4" class="our-story-card-video" 
                                autoplay="true" 
                                playsinline 
                                muted 
                                loop>
                                </video>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12" id="card-txt-module">
                            <div className="container-text">
                                <h2 className="card-title">
                                    Watch everywhere you want.
                                </h2>
                                <h3 className="card-subtitle">
                                    Watch movies, series and programs without restrictions
                                    on your phone, tablet, laptop, TV ... No additional fees.
                                </h3>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section >
    );
}

export default AnimationCard;
