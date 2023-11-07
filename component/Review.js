import { Col, Row } from "react-bootstrap"
import Image from "next/image"
import review from "../public/review-1.jpg"
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Review() {
    var settings = {
        autoplay: true,
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <div className="review" id="review">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Review</h2>
                        </div>
                        <Slider className="row align-items-center review-slider" {...settings}>
                            <Col md={12}>
                                <div className="review-slider-item">
                                    <div className="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div className="review-img">
                                        <Image src={review} alt="Image" />
                                        <div className="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="review-slider-item">
                                    <div className="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div className="review-img">
                                        <Image src={review} alt="Image" />
                                        <div className="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="review-slider-item">
                                    <div className="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div className="review-img">
                                        <Image src={review} alt="Image" />
                                        <div className="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Slider>
                    </div>
                </div>
        </>
    )
}