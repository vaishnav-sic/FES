import React, { Component } from 'react';
import Link from 'next/link';
class NavTwo extends Component {
    constructor() {
        super()
        this.state = {
            sticky: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        //Mobile Menu
        this.mobileMenu();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (window.scrollY > 70) {
            this.setState({
                sticky: true
            });
        } else if (window.scrollY < 70) {
            this.setState({
                sticky: false
            });
        }
    }
    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");
        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ((mainNav.style.display != "block" ? "block" : "none"));
        });
    }
    render() {
        return (
            <header className="site-header site-header__header-two ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="assets/images/logo-dark.png" className="main-logo" width="128"
                                        alt="Awesome Image" />
                                  
                            </Link>
                            <button className="menu-toggler" data-target=".main-navigation">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/"> Home  </Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/"> Home 01  </Link></li>
                                        <li><Link href="/index-2"> Home 02  </Link></li>
                                        <li><Link href="/index-3"> Home 03  </Link></li>
                                        <li><a href="#">Header Versions
                                            <ul className="sub-menu">
                                                <li><Link href="/"> Header 01  </Link></li>
                                                <li><Link href="/index-2"> Header 02  </Link></li>
                                                <li><Link href="/index-3"> Header 03  </Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Pages  
                                    <ul className="sub-menu">
                                        <li><Link href="/about"> About Page  </Link></li>
                                        <li><Link href="/gallery"> Gallery  </Link></li>
                                        <li><Link href="/pricing"> Pricing Plans  </Link></li>
                                        <li><Link href="/faq"> FAQ'S  </Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="courses.html">Courses  
                                    <ul className="sub-menu">
                                        <li><Link href="/courses"> Courses  </Link></li>
                                        <li><Link href="/course-details"> Courses Details  </Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="teachers.html">Teachers  
                                    <ul className="sub-menu">
                                        <li><Link href="/teachers"> Teachers  </Link></li>
                                        <li><Link href="/teacher-details"> Teachers Details  </Link></li>
                                        <li><Link href="/become-teacher"> Become Teacher  </Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="news.html">News  
                                    <ul className="sub-menu">
                                        <li><Link href="/news"> News Page  </Link></li>
                                        <li><Link href="/news-details"> News Details  </Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/contact"> Contact  </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-side-box">
                            <div className="header__social">
                                <a href="#"><i className="fab fa-twitter"></i>  
                                <a href="#"><i className="fab fa-facebook-square"></i>  
                                <a href="#"><i className="fab fa-pinterest-p"></i>  
                                <a href="#"><i className="fab fa-instagram"></i>  
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="site-header__decor">
                    <div className="site-header__decor-row">
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-1"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-2"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-3"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default NavTwo;