import { Col, Row } from "react-bootstrap"
import Link from "next/link"

export default function Contact(){
    return (
        <>
            <div className="contact" id="contact">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Contact</h2>
                        </div>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <div className="contact-info">
                                    <p><i className="fa fa-user"></i>Michael Miller</p>
                                    <p><i className="fa fa-tag"></i>Web Designer & Developer</p>
                                    <p><i className="fa fa-envelope"></i><Link href="mailto:info@example.com">info@example.com</Link></p>
                                    <p><i className="fa fa-phone"></i><Link href="tel:+1234567890">+123-456-7890</Link></p>
                                    <p><i className="fa fa-map-marker"></i>123 Street, Los Angeles, CA, USA</p>
                                    <div className="social">
                                        <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn" href=""><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="form">
                                    <form>
                                        <Row>
                                            <Col md={6} className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Name" />
                                            </Col>
                                            <Col md={6} className="form-group">
                                                <input type="email" className="form-control" placeholder="Your Email" />
                                            </Col>
                                        </Row>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                        </div>
                                        <div><button className="btn" type="submit">Send Message</button></div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
        </>
    )
}