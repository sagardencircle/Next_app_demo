import { Col, Row } from "react-bootstrap"

export default function Education()
{
    return (
        <>
            <div className="education" id="education">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Education</h2>
                        </div>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Master Degree</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Bachelor Degree</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Associate Degree</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>High School</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
        </>
    )
}