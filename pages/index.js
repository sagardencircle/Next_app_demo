import Head from 'next/head'
import $ from "jquery"
import { Container } from 'react-bootstrap';
import Sidebar from '../component/sidebar';
import HomeSlider from '../component/HomeSlider';
import About from '../component/About';
import Education from '../component/Education';
import Experience from '../component/Experience';
import Services from '../component/Services';
import Portfolio from '../component/Portfolio';
import Review from '../component/Review';
import Contact from '../component/Contact';
import { useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
   // document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    $(window).scroll(function () {
      //console.log($(this).scrollTop());
     // const postiton = document.querySelector();
      //console.log(postiton);
    });
  })

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Resume Website Template Free Download</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Resume Website Template Free Download" name="keywords" />
        <meta content="Resume Website Template Free Download" name="description" />

      </Head>
        
            <div className="wrapper">
                <Sidebar/>
                <div className="content">
                    <HomeSlider />
                    <About/>
                    <Education/>
                    <Experience/>
                    <Services/>
                    <Portfolio/>
                    <Review/>
                    <Contact/>
                </div>
            </div>
      
        <footer>

        </footer>
    </>
  )
}