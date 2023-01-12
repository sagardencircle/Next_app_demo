import Image from "next/image"
import AboutImg from "../public/about.jpg"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

export default function About() {

    return (
        <>
        
            <div className="about" id="about">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>About Me</h2>
                        </div>
                        <Row className="align-items-center">
                            <Col md={6} lg={5}>
                                <Image src={AboutImg} alt="about image" />
                            </Col>
                            <Col md={6} lg={7}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat. Proin libero ligula, gravida at porttitor eget.
                                </p>
                                <Link className="btn" href="#">Hire Me</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className="skills">
                                    <div className="skill-name">
                                        <p>Design</p><p>85%</p>
                                    </div>
                                    <MDBProgress>
                                        <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                                    </MDBProgress>
                                    {/* <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <div className="skill-name">
                                        <p>SEO</p><p>95%</p>
                                    </div>
                                    <MDBProgress>
                                        <MDBProgressBar width={95} valuemin={0} valuemax={100} />
                                    </MDBProgress>
                                    {/* <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="skills">
                                    <div className="skill-name">
                                        <p>Development</p><p>90%</p>
                                    </div>
                                    <MDBProgress>
                                        <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                    </MDBProgress>
                                    {/* <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                    <div className="skill-name">
                                        <p>Marketing</p><p>85%</p>
                                    </div>
                                    <MDBProgress>
                                        <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                                    </MDBProgress>
                                    {/* <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                
        </>
    )
}