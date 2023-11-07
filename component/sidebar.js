import $, { data } from "jquery"
import Image from "next/image"
import profileImg from "../public/profile.jpg"
import Link from "next/link"
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from 'swr'


const Menu_List = [
    {
        text: "Home",
        href: "#header",
        icon: "fa fa-home"
    },
    {
        text: "About",
        href: "#about",
        icon: "fa fa-address-card"
    },
    {
        text: "Experience",
        href: "#experience",
        icon: "fa fa-star"
    },
    {
        text: "Service",
        href: "#service",
        icon: "fa fa-tasks"
    },
    {
        text: "Portfolio",
        href: "#portfolio",
        icon: "fa fa-file-archive"
    },
    {
        text: "Contact",
        href: "#contact",
        icon: "fa fa-envelope"
    }
]

const Social_link = [
    {
        link: "#",
        icon: "fab fa-twitter"
    },
    {
        link: "#",
        icon: "fab fa-facebook-f"
    },
    {
        link: "#",
        icon: "fab fa-linkedin-in"
    }
]

export default function Sidebar() {
    const [isActive, setActive] = useState(false);

    const handleClick = (e) => {
        //setActive(!isActive);
		
        e.preventDefault();
        //e.target.classList.add("active");

        const link = e.target.getAttribute('href');
        //const spal = target.replace(/\\/g, '-');
        const target = link.split('/').join('');
        const location = document.querySelector(target).offsetTop;
        
        //console.log(target);
        $('.navbar-nav .active').removeClass('active');
       e.target.classList.add('active')
        
        window.scrollTo(
            {
                top: location
            }
        )

    }

    const [toDos, setToDos ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:8080/navmenu')
            .then(response => response.json())
            .then(data => {
                setToDos(data) // Set the toDo variable
                setIsLoading(false)
            })
    }, [])

    //console.log(toDos);
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!toDos) {
        return <p>No List to show</p>
    }
    
    return(
        <>
            <div className="sidebar">
                <div className="sidebar-header">
                    <Image src={profileImg}  alt="Picture of the author" />
                </div>
                <div className="sidebar-content">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">Navigation</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                          
                            <ul className="nav navbar-nav">
                            {toDos.map( (toDo, idx) =>
                                <li className="nav-item" key={toDo.id}>
                                    <Link className={idx == 1 ? 'active nav-link': 'nav-link'} href={toDo.link} onClick={handleClick}>
                                            {toDo.title}<i className={toDo.icon_class}></i>
                                        </Link>
                                </li>
                            )}
                                {/* {Menu_List.map((menu, idx) => (
                                    <li className="nav-item" key={menu.text}>
                                        <Link className={idx == 0 ? 'active nav-link': 'nav-link'} href={menu.href} onClick={handleClick}>
                                            {menu.text}<i className={menu.icon}></i>
                                        </Link>
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="sidebar-footer">
                    {Social_link.map((social) => (
                        <Link href={social.link} key={social.icon}>
                            <i className={social.icon}></i>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}