import $ from "jquery"
import Link from "next/link";
import { useEffect, useState } from "react";
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

      const [oldData, setData] = useState();
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:8080/profile')
        .then(response => response.json())
        .then(data => {
            setData(data)
            setIsLoading(false);
        })

      }, []);

        if (isLoading) {
            return <p>Loading....</p>
        }
        if (!oldData) {
            return <p>No List to show</p>
        }

    return (
        <>
            <div className="header" id="header">
                {oldData.map( (data, idx) =>
                    <div className="content-inner" key={idx}>
                        <p>I'm</p>
                        <h1>{data.user_name}</h1>
                        <h2></h2>
                        <div className="typed-text">{data.designation}</div>
                    </div>
                )}
            </div>
            <div className="large-btn">
                <div className="content-inner">
                    <Link className="btn" href="#"><i className="fa fa-download"></i>Resume</Link>
                    <Link className="btn" href="#"><i className="fa fa-hands-helping"></i>Hire Me</Link>
                </div>
            </div>
              
        </>
    );
}