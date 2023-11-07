import { Col, Row } from "react-bootstrap"

export default function Experience() {
    return(
        <>
            <div className="experience" id="experience">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Experience</h2>
                        </div>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Codex Solution</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Project Manager</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Soft Solution Ltd</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Web Developer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                                </Col>
                            <Col md={6}>
                                <div className="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>ABC Soft Ltd</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Web Designer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Soft Agency</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Graphic Designer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
        </>
    )
}