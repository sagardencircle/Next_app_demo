import $ from "jquery"
import Link from "next/link";
import { useEffect } from "react";
import Typed from 'typed.js';

export default function HomeSlider() {

    useEffect(() => {
        // Typed Initiate
        if ($('.header h2').length == 1) {
            var typed_strings = $('.header .typed-text').text();
            var typed = new Typed('.header h2', {
                strings: typed_strings.split(', '),
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: true
            });
        }
      })

    return (
        <>
            <div className="header" id="header">
                <div className="content-inner">
                    <p>I'm</p>
                    <h1>Michael Miller</h1>
                    <h2></h2>
                    <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer</div>
                </div>
            </div>
            <div class="large-btn">
                <div class="content-inner">
                    <Link class="btn" href="#"><i class="fa fa-download"></i>Resume</Link>
                    <Link class="btn" href="#"><i class="fa fa-hands-helping"></i>Hire Me</Link>
                </div>
            </div>
              
        </>
    );
}