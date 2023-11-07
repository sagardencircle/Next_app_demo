import { Col, Row } from "react-bootstrap"

export default function Services(){
    return (
        <>
            <div className="service" id="service">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Service</h2>
                        </div>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="srv-col">
                                    <i className="fa fa-desktop"></i>
                                    <h3>Web Design</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="srv-col">
                                    <i className="fa fa-laptop"></i>
                                    <h3>Web Development</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="srv-col">
                                    <i className="fa fa-search"></i>
                                    <h3>SEO</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="srv-col">
                                    <i className="fa fa-envelope-open-text"></i>
                                    <h3>Digital Marketing</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
        </>
    )
}