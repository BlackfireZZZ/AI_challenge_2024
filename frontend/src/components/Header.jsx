import React from "react";



const Header = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Для плавной прокрутки
        });
    };

    return (
        <div className="lqd-head-sec container-fluid d-flex align-items-stretch">
            <div className="col lqd-head-col  ">
                <div className="header-module module-primary-nav pos-stc">
                    <div className="collapse navbar-collapse lqd-submenu-cover  " id="main-header-collapse"
                         aria-expanded="false" role="navigation">
                        <ul id="primary-nav"
                            className="main-nav lqd-menu-counter-right ld_header_menu_634d4b2de3f7d main-nav-hover-default nav align-items-lg-stretch justify-content-lg-start"
                            data-submenu-options="{&quot;toggleType&quot;:&quot;fade&quot;,&quot;handler&quot;:&quot;mouse-in-out&quot;}">
                            <li id="menu-item-10"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10">
                                <a onClick={scrollToTop} style={{cursor: 'pointer'}}>Home</a>
                            </li>
                            <li id="menu-item-11"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11"><a
                                href="#">Provider<span className="link-icon right-icon"><i
                                className="lqd-icn-ess icon-ion-ios-arrow-down"/></span></a></li>
                            <li id="menu-item-12"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-12 position-applied"
                                style={{itemHeight: '0px'}}>
                                <a href="#">Product<span className="submenu-expander"/><span
                                    className="link-icon right-icon"><i
                                    className="lqd-icn-ess icon-ion-ios-arrow-down"/></span></a>
                                <ul className="nav-item-children">
                                    <li id="menu-item-188"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-188"
                                        style={{transitionDelay: '0ms'}}><a href="#">About us</a></li>
                                    <li id="menu-item-189"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-189"
                                        style={{transitionDelay: '70ms'}}><a href="#">Careers</a></li>
                                    <li id="menu-item-190"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190"
                                        style={{transitionDelay: '140ms'}}><a href="#">Blog</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-13"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a
                                href="#">Features</a></li>
                            <li id="menu-item-14"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-14"><a
                                href="#">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-auto lqd-head-col   text-center text-center">
                <div id="ld_header_image_634d4b2de4ab5"
                     className="header-module module-logo no-rotate navbar-brand-plain ld_header_image_634d4b2de4ab5">
                    <a className="navbar-brand" href="https://multiusepro.liquid-themes.com/" rel="home"><span
                        className="navbar-brand-inner"> <img className="logo-default"
                                                             src="https://multiusepro.liquid-themes.com/wp-content/themes/landing-hub/assets/img/logo/logo-1.svg"
                                                             alt="Hub WordPress Theme"/></span></a></div>
            </div>
            <div className="col lqd-head-col   text-right text-lg-right">
                <div className="header-module"><p style={{textAlign: 'right'}}><span
                    style={{fontSize: '12px', color: 'rgba(0,35,82,0.6)'}}>Consultation</span><br/>
                    <span style={{fontSize: '15px'}}><strong><span
                        style={{color: '#ed6a04'}}>+ 1 223 38 87</span></strong></span></p></div>
                <div className="header-module module-button">
                    <a href="#"
                       className="btn btn-solid circle border-thin btn-has-label ld_header_button_634d4b2de4f6e ld_button_634d4b2de5255">
                    <span>
                      <span className="btn-txt" data-text="Start a project">Start a project</span>
                    </span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Header;