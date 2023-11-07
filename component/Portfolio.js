import $ from "jquery"
import { Col, Row } from "react-bootstrap"
import Image from "next/image"
import portfolio from "../public/portfolio-1.jpg"
import Link from "next/link"
import { useState } from "react"



export default function Portfolio(){

    const [item, setItem] = useState('All');

    //console.log(item);

    const filterCat = (cateItems) => {
        console.log(item);
        setItem(cateItems);
        
    }

    return(
        <>
            <div className="portfolio" id="portfolio">
                    <div className="content-inner">
                        <div className="content-header">
                            <h2>Portfolio</h2>
                        </div>
                        <Row>
                            <Col lg={12}>
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active" onClick={() => filterCat('All')}>All</li>
                                    <li data-filter=".web-des" onClick={() => filterCat('web-des')}>Design</li>
                                    <li data-filter=".web-dev" onClick={() => filterCat('web-dev')}>Development</li>
                                    <li data-filter=".dig-mar" onClick={() => filterCat('dig-mar')}>Marketing</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="portfolio-container">
                            <Col md={6} lg={4} className="portfolio-item web-des">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <Image src={portfolio} alt="" className="img-fluid" />
                                        <Link href="img/portfolio-1.jpg" data-lightbox="portfolio" data-title="Project Name" className="link-preview" title="Preview"><i className="fa fa-eye"></i></Link>
                                        <Link href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></Link>
                                        <Link className="portfolio-title" href="#">Project Name <span>Web Design</span></Link>
                                    </figure>
                                </div>
                            </Col>

                            <Col md={6} lg={4} className="portfolio-item web-dev">
                                <div className="portfolio-wrap">
                                    <figure>
                                    <Image src={portfolio} alt="" className="img-fluid" />
                                        <Link href="img/portfolio-3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></Link>
                                        <Link href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></Link>
                                        <Link className="portfolio-title" href="#">Project Name <span>Web Development</span></Link>
                                    </figure>
                                </div>
                            </Col>

                            <Col md={6} lg={4} className="portfolio-item dig-mar">
                                <div className="portfolio-wrap">
                                    <figure>
                                        <Image src={portfolio} alt="" className="img-fluid" />
                                        <Link href="img/portfolio-5.jpg" className="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i className="fa fa-eye"></i></Link>
                                        <Link href="#" className="link-details" title="More Details"><i className="fa fa-link"></i></Link>
                                        <Link className="portfolio-title" href="#">Project Name <span>Digital Marketing</span></Link>
                                    </figure>
                                </div>
                            </Col>
                           
                        </Row>
                    </div>
                </div>
        </>
    )
}