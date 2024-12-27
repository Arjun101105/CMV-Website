import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"

const ImageCarousel = ()=>{
    
    return(
        <div className="bg-cyan-50 pt-10">
        <div className="w-[90%] max-w-[1400px] mx-auto ">
            <Carousel 
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            interval={3000}
            transitionTime={500}
            >
                <div>
                    <img src="/images/bikeRide1.jpeg" alt="Bike Ride Image" />
                    <p className="legend">CMV Bike Ride 2023</p>
                </div>
                <div>
                    <img src="/images/newYear1.jpeg" alt="New Year Image" />
                    <p className="legend">CMV New Year 2023</p>
                </div>
                <div>
                    <img src="/images/bikeRide2.jpeg" alt="Bike Ride Image" />
                    <p className="legend">CMV Bike Ride 2023</p>
                </div>
                <div>
                    <img src="/images/trekImg.jpeg" alt="Trek Image" />
                    <p className="legend">CMV Trek 2023</p>
                </div>
                <div>
                    <img src="/images/newYear2.jpeg" alt="New Year Image" />
                    <p className="legend">CMV New Year 2023</p>
                </div>
                <div>
                    <img src="/images/bikeRide3.jpeg" alt="Bike Ride Image" />
                    <p className="legend">CMV Bike Ride 2022</p>
                </div>
            </Carousel>
        </div>
        </div>
    )
    
}
export default ImageCarousel;