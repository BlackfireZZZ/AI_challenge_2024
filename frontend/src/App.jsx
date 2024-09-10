import './App.css';
import React, { useRef } from 'react';
import Form from "./components/Form";
import Header from "./components/Header";
import KeyWords from "./components/KeyWords";
import UsedTech from "./components/UsedTech";


function App() {
  const formRef = useRef(null);

    const scrollToForm = () => {
      const yOffset = -220;
        const elementPosition = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    };
  return (
      <div>
        <section><h2 className="screen-reader-text">Skip links</h2>
          <ul className="liquid-skip-link screen-reader-text">
            <li><a href="#primary" className="screen-reader-shortcut"> Skip to primary navigation</a></li>
            <li><a href="#content" className="screen-reader-shortcut"> Skip to content</a></li>
          </ul>
        </section>
        <div id="wrap" style={{display: 'flex', flexDirection: 'column'}}>
          <div className="lqd-sticky-placeholder hide" style={{height: '66px'}}/>
          <header className="header site-header main-header main-header-overlay is-stuck" data-sticky-header="true"
                  data-sticky-values-measured="true" data-sticky-options="{&quot;disableOnMobile&quot;:true}"
                  id="header" itemScope="itemscope" itemType="http://schema.org/WPHeader">
            <div className="lqd-head-sec-wrap pos-rel    vc_custom_1579164823599 ">
              <Header/>
            </div>
            <div className="lqd-mobile-sec">
              <div className="lqd-mobile-sec-inner navbar-header d-flex align-items-stretch">
                <div className="lqd-mobile-modules-container"/>
                <button type="button" className="navbar-toggle nav-trigger style-mobile collapsed" data-ld-toggle="true"
                        data-toggle="collapse" data-target="#lqd-mobile-sec-nav" aria-expanded="false"
                        data-toggle-options="{ &quot;changeClassnames&quot;: {&quot;html&quot;: &quot;mobile-nav-activated&quot;} }">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="bars">
                  <span className="bars-inner">
                    <span className="bar"/>
                    <span className="bar"/>
                    <span className="bar"/>
                  </span>
                </span>
                </button>
                <a className="navbar-brand" href="https://multiusepro.liquid-themes.com/">
                <span className="navbar-brand-inner">
                  <img className="logo-default"
                       src="https://multiusepro.liquid-themes.com/wp-content/themes/landing-hub/assets/img/logo/logo-1.svg"
                       alt="Hub WordPress Theme"/>
                </span>
                </a>
              </div>
              <div className="lqd-mobile-sec-nav">
                <div className="mobile-navbar-collapse navbar-collapse collapse" id="lqd-mobile-sec-nav"
                     aria-expanded="false" role="navigation" style={{height: '0.666667px'}}>
                  <ul id="mobile-primary-nav" className="lqd-mobile-main-nav main-nav nav">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10"><a
                        href="#">Home</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11"><a href="#">Provider<span
                        className="link-icon right-icon"><i className="lqd-icn-ess icon-ion-ios-arrow-down"/></span></a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-12 position-applied"
                        style={{itemHeight: '0px'}}>
                      <a href="#">Product<span className="submenu-expander"/><span className="link-icon right-icon"><i
                          className="lqd-icn-ess icon-ion-ios-arrow-down"/></span></a>
                      <ul className="nav-item-children">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-188"><a
                            href="#">About us</a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-189"><a
                            href="#">Careers</a></li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190"><a
                            href="#">Blog</a></li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13"><a
                        href="#">Features</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-14"><a
                        href="#">Testimonials</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <main className="content" id="lqd-site-content">
            <div id="lqd-contents-wrap"><p/>
              <section
                  className="vc_row vc_custom_1605399378146 liquid-row-responsive-634d4b2deb4f9 liquid-row-shadowbox-634d4b2deb512 vc_row-o-full-height"
                  style={{minHeight: '100vh'}}>
                <div className="lqd-particles-bg-wrap">
                  <div className="ld-particles-container lqd-particles-as-bg ld_particles_634d4b2e183ac">
                    <div className="ld-particles-inner pointer-events-auto" id="lqd-579174300002-14637266-1f34"
                         data-particles="true"
                         data-particles-options="{&quot;particles&quot;:{&quot;number&quot;:{&quot;value&quot;:2},&quot;color&quot;:{&quot;value&quot;:&quot;#32a703&quot;},&quot;shape&quot;:{&quot;type&quot;:[&quot;circle&quot;]},&quot;size&quot;:{&quot;value&quot;:3},&quot;move&quot;:{&quot;out_mode&quot;:&quot;out&quot;}},&quot;interactivity&quot;:[],&quot;retina_detect&quot;:true,&quot;asBG&quot;:true}">
                      <canvas className="particles-js-canvas-el" style={{width: '100%', height: '100%'}} width={826}
                              height={2038}/>
                    </div>
                  </div>
                </div>
                <div className="ld-container container-fluid">
                  <div
                      className="row ld-row ld-row-outer vc_row-no-column-align vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                    <div
                        className="wpb_column vc_column_container vc_col-sm-7 vc_col-lg-5 vc_col-md-6 liquid-column-634d4b2e02eac liquid-column-responsive-634d4b2e02eae">
                      <div className="vc_column-inner  ">
                        <div className="wpb_wrapper">
                          <div id="ld_images_group_container_634d4b2e02f7e"
                               className="lqd-imggrp-container ld_images_group_container_634d4b2e02f7e ca-initvalues-applied lqd-animations-done"
                               data-custom-animations="true"
                               data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.lqd-imggrp-single&quot;,&quot;duration&quot;:&quot;1800&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;opacity&quot;:1}}">
                            <div className="lqd-imggrp-inner">
                              <p/>
                              <div id="ld_images_group_element_634d4b2e0310a"
                                   className="lqd-imggrp-single ld_images_group_element_634d4b2e0310a lqd-unit-animation-done"
                                   style={{}}>
                                <div className="lqd-imggrp-img-container" data-parallax="true"
                                     data-parallax-from="{&quot;y&quot;:90,&quot;rotationZ&quot;:25}"
                                     data-parallax-to="{&quot;y&quot;:-130,&quot;rotationZ&quot;:-25}"
                                     data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;ease&quot;:&quot;linear&quot;,&quot;start&quot;:&quot;top bottom&quot;}"
                                     style={{transform: 'translate(0px, -130px) rotate(-25deg)'}}>
                                  <figure className="loaded"><img width={31} height={34}
                                                                  src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/01/Shape-1308@2x.png"
                                                                  className="ld-lazyload entered loaded" alt=""
                                                                  data-src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/01/Shape-1308@2x.png"
                                                                  data-srcset data-aspect data-ll-status="loaded"/>
                                  </figure>
                                </div>
                              </div>
                              <div id="ld_images_group_element_634d4b2e0436d"
                                   className="lqd-imggrp-single ld_images_group_element_634d4b2e0436d lqd-unit-animation-done"
                                   style={{}}>
                                <div className="lqd-imggrp-img-container" data-parallax="true"
                                     data-parallax-from="{&quot;x&quot;:10,&quot;y&quot;:15}"
                                     data-parallax-to="{&quot;x&quot;:120,&quot;y&quot;:-130}"
                                     data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;ease&quot;:&quot;linear&quot;,&quot;start&quot;:&quot;top bottom&quot;}"
                                     style={{transform: 'translate3d(94.04px, -95.78px, 0px)'}}>
                                  <figure className="loaded"><img width={55} height={54}
                                                                  src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/01/Rounded-Rectangle-1304@2x.png"
                                                                  className="ld-lazyload entered loaded" alt=""
                                                                  data-src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/01/Rounded-Rectangle-1304@2x.png"
                                                                  data-srcset data-aspect data-ll-status="loaded"/>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ld-fancy-heading ld_fancy_heading_634d4b2e04e57"><h6
                              className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> Global
                            Experience</h6></div>
                          <div className="ld-fancy-heading ld_fancy_heading_634d4b2e05610">
                            <h1 className="ld-fh-element lqd-highlight-custom-underline lqd-highlight-grow-left text-decoration-default is-in-view"
                                data-inview="true" data-transition-delay="true"
                                data-delay-options="{&quot;elements&quot;:&quot;.lqd-highlight-inner&quot;,&quot;delayType&quot;:&quot;transition&quot;}">
                              <mark className="lqd-highlight"><span className="lqd-highlight-txt">Immersive</span><span
                                  className="lqd-highlight-inner" style={{transitionDelay: '0ms'}}><svg
                                  xmlns="http://www.w3.org/2000/svg" width="235.509" height="13.504"
                                  viewBox="0 0 235.509 13.504" aria-hidden="true" preserveAspectRatio="none"><path
                                  d="M163,.383a13.044,13.044,0,0,1,1.517-.072,3.528,3.528,0,0,1,1.237-.134q.618.044,1.237.044a.249.249,0,0,1-.1.178.337.337,0,0,0-.1.266q3.092.088,6.184-.044T178.953.4l-.206-.088a12,12,0,0,0,4.123,0,13.467,13.467,0,0,1,5.772,0q1.443-.178,2.68-.266A5.978,5.978,0,0,1,193.8.4,16.707,16.707,0,0,1,198.01.045q2.164.088,4.844.088-.618.088-.824.134L201.412.4a3.893,3.893,0,0,0,2.061,0,5.413,5.413,0,0,1,1.649-.356q.618.088,1.134.178a9.762,9.762,0,0,0,1.544.09,17,17,0,0,1,3.092-.266q1.649,0,3.5.178,2.886.088,5.875.044t5.875-.222q0,.088.206.088h.412a21.975,21.975,0,0,0,2.577.889A12.458,12.458,0,0,1,232.12,2.18a3.962,3.962,0,0,1,1.031.622A3.349,3.349,0,0,1,234.8,3.825a5.079,5.079,0,0,1,.618,1.111q.412.534-1.031.98-1.031.444-.618.98a2.09,2.09,0,0,1,.206.889q0,.444.825.889.618.8-.206,1.245l-1.237.534q-1.443-.088-2.68-.134a17.255,17.255,0,0,1-2.267-.222,3.128,3.128,0,0,0-.928-.044,3.129,3.129,0,0,1-.928-.044q-2.267-.178-4.432-.266T217.7,9.476q-1.649-.088-2.886-.088a17.343,17.343,0,0,1-2.474-.178q-3.916,0-7.73-.088t-7.73-.266l-12.471-.178q-6.287-.088-12.883-.088h-1.958q-.928,0-1.958.088h-2.061q-1.031,0-2.061-.088-2.68-.088-5.256-.134t-5.256.044h-5.462q-2.577,0-5.462.088-4.535.088-8.76.178t-8.554.088q-2.886.088-5.875.088t-5.875.088q-1.443.088-2.886.134t-3.092.044q-4.741.178-9.791.312t-9.791.312q-2.267.088-4.329.088T78.77,10.1q-4.329.266-8.863.49t-9.276.49q-1.237.088-2.68.134a24.356,24.356,0,0,0-2.683.224q-2.68.178-5.462.312t-5.668.4q-2.474.266-4.741.312t-4.741.044q-1.031-.088-1.958-.134a9.684,9.684,0,0,1-1.958-.312,12.5,12.5,0,0,0-1.443-.312q-.825-.134-1.856-.31-2.886.356-6.39.666t-6.8.845a26.709,26.709,0,0,1-2.886.356,20.758,20.758,0,0,1-9.482-.889Q.232,11.962.026,11.25T1.263,9.917q0-.266.825-.266a13.039,13.039,0,0,0,2.886-.444A17.187,17.187,0,0,1,7.86,8.672q3.092-.266,6.184-.8,1.649-.178,3.3-.312t3.5-.312q4.123-.354,8.039-.712t8.039-.622q9.478-.8,18.758-1.338,2.68-.178,5.153-.356t4.741-.356q2.474-.178,5.05-.356T75.88,3.24h1.34a4.829,4.829,0,0,0,1.34-.178q2.267-.178,4.329-.222t4.329-.134a7.256,7.256,0,0,1,2.267,0,3.459,3.459,0,0,0,1.031-.088,6.009,6.009,0,0,1,2.37-.266,14.745,14.745,0,0,0,2.783-.088q1.649,0,2.474.088a1.308,1.308,0,0,1,.185.011,1.226,1.226,0,0,1,.33-.1,3.656,3.656,0,0,0,.515-.088,4.433,4.433,0,0,1,2.886.266q.412-.088,1.031-.178l1.237-.178q.412,0,1.031.044a5.761,5.761,0,0,0,1.237-.044q2.886-.088,5.772-.044a53.829,53.829,0,0,0,5.772-.222,9.505,9.505,0,0,1,1.34-.088h1.34a4.428,4.428,0,0,1,.821-.258l.825-.178a15.178,15.178,0,0,1,1.855.444,3.028,3.028,0,0,1,1.031-.534,4.039,4.039,0,0,1,1.443-.178,6.158,6.158,0,0,1,1.649.178,5.05,5.05,0,0,0,2.267.268q1.855-.088,3.813-.134T138.13,1.2q1.031,0,2.164-.044t2.37-.044q-.206-.088.412-.534h3.092q.412,0,.309.266t.928,0a5.845,5.845,0,0,1,1.443,0,31.833,31.833,0,0,0,5.359.088,21.471,21.471,0,0,1,6.8.178,5.236,5.236,0,0,0,1.031-.4q.412-.222.825-.4a.694.694,0,0,1,.137.07Z"
                                  transform="translate(0 0.002)"/></svg></span></mark>
                              digital experience.
                            </h1>
                          </div>
                          <div className="ld-fancy-heading ld_fancy_heading_634d4b2e05cbd"><p
                              className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> We
                            merge imagination and technology to help thousands of brands grow in an age of digital
                            transformation.</p></div>
                          <div
                              className="vc_row vc_inner vc_row-fluid vc_custom_1618491590503 liquid-row-shadowbox-634d4b2e07b4f vc_column-gap-0">
                            <div className="ld-container container-fluid">
                              <div className="row ld-row ld-row-inner vc_row-o-content-middle vc_row-flex">
                                <div
                                    className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 liquid-column-634d4b2e1181f">
                                  <div className="vc_column-inner ">
                                    <div className="wpb_wrapper"><a onClick={scrollToForm}
                                                                    className="btn btn-solid text-uppercase circle border-thin btn-has-label ld_button_634d4b2e118df vc_custom_1602667824194">
                                      <span>
                                        <span className="btn-txt" data-text="See how we work">See how we work</span>
                                      </span>
                                    </a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ld-empty-space ld_spacer_634d4b2e11fd3"/>

                        </div>
                      </div>
                    </div>
                    <div
                        className="wpb_column vc_column_container vc_col-sm-5 vc_col-lg-offset-1 vc_col-md-6 text-right liquid-column-634d4b2e172ce liquid-column-responsive-634d4b2e172d0 lqd-column-top-onmobile">
                      <div className="vc_column-inner  vc_custom_1607345108348">
                        <div className="wpb_wrapper">
                          <div id="ld_images_group_container_634d4b2e17380"
                               className="lqd-imggrp-container ld_images_group_container_634d4b2e17380">
                            <div className="lqd-imggrp-inner">
                              <div id="ld_images_group_element_634d4b2e17463"
                                   className="lqd-imggrp-single ld_images_group_element_634d4b2e17463">
                                <div className="lqd-imggrp-img-container">
                                  <figure className="loaded"><img width={658} height={727}
                                                                  src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/10/Images@2x.png"
                                                                  className="ld-lazyload entered loaded" alt=""
                                                                  data-src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/10/Images@2x.png"
                                                                  data-srcset="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/10/Images@2x-272x300.png 272w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/10/Images@2x-927x1024.png 927w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/10/Images@2x.png 1316w"
                                                                  data-aspect data-ll-status="loaded"
                                                                  srcSet="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/10/Images@2x-272x300.png 272w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/10/Images@2x-927x1024.png 927w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/10/Images@2x.png 1316w"/>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-12 liquid-column-634d4b2e182c7">
                      <div className="vc_column-inner  ">
                        <div className="wpb_wrapper ca-initvalues-applied lqd-animations-done"
                             data-custom-animations="true"
                             data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1800&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;y&quot;:35,&quot;transformOriginX&quot;:50,&quot;transformOriginY&quot;:50,&quot;transformOriginZ&quot;:&quot;0px&quot;,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;y&quot;:0,&quot;transformOriginX&quot;:50,&quot;transformOriginY&quot;:50,&quot;transformOriginZ&quot;:&quot;0px&quot;,&quot;opacity&quot;:1}}"/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="vc_row liquid-row-responsive-634d4b2e4273d liquid-row-shadowbox-634d4b2e42751"
                       style={{marginBottom: '20px', minHeight: '50vw'}}>
                <Form formRef={formRef}/>
              </section>

              <section data-custom-animations="true"
                       data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.wpb_column&quot;,&quot;duration&quot;:&quot;1800&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;opacity&quot;:1}}"
                       className="vc_row vc_custom_1612871937356 liquid-row-responsive-634d4b2e18da8 liquid-row-shadowbox-634d4b2e18dbe vc_column-gap-0 ca-initvalues-applied lqd-animations-done">
                <KeyWords/>
              </section>
              <section
                  className="vc_row vc_custom_1617787581517 liquid-row-responsive-634d4b2e1a80a liquid-row-shadowbox-634d4b2e1a81d">
                <div className="ld-container container">
                  <div className="row ld-row ld-row-outer vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                    <div
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 vc_hidden-sm vc_hidden-xs text-center liquid-column-634d4b2e1a916">
                      <div className="vc_column-inner  ">
                        <div className="wpb_wrapper">
                          <div id="ld_images_group_container_634d4b2e1a9a1"
                               className="lqd-imggrp-container ld_images_group_container_634d4b2e1a9a1">
                            <div className="lqd-imggrp-inner">
                              <p/>
                              <div id="ld_images_group_element_634d4b2e1aa86"
                                   className="lqd-imggrp-single ld_images_group_element_634d4b2e1aa86"
                                   data-shadow-style={3}>
                                <div
                                    className="lqd-imggrp-img-container block-revealer element-uncovered revealing-ended"
                                    data-reveal="true"
                                    data-reveal-options="{&quot;direction&quot;:&quot;lr&quot;,&quot;bgcolor&quot;:&quot;&quot;,&quot;delay&quot;:&quot;&quot;}"
                                    data-parallax="true" data-parallax-from="{&quot;y&quot;:35}"
                                    data-parallax-to="{&quot;y&quot;:-45}"
                                    data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;ease&quot;:&quot;linear&quot;,&quot;start&quot;:&quot;top bottom&quot;}"
                                    style={{transform: 'translate3d(0px, 19.36px, 0px)'}}>
                                  <figure className="loaded" style={{opacity: 1}}><img width={336} height={320}
                                                                                       src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/fancy4@2x.jpg"
                                                                                       className="ld-lazyload entered loaded"
                                                                                       alt=""
                                                                                       data-src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/fancy4@2x.jpg"
                                                                                       data-srcset="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/fancy4@2x-300x286.jpg 300w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/fancy4@2x.jpg 517w"
                                                                                       data-aspect
                                                                                       data-ll-status="loaded"
                                                                                       srcSet="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/fancy4@2x-300x286.jpg 300w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/fancy4@2x.jpg 517w"/>
                                  </figure>
                                  <div className="block-revealer__element" style={{
                                    transform: 'scale(0, 1)',
                                    transformOrigin: '100% 50%',
                                    background: 'rgb(240, 240, 240)',
                                    opacity: 1
                                  }}/>
                                </div>
                              </div>
                              <div id="ld_images_group_element_634d4b2e1b85c"
                                   className="lqd-imggrp-single ld_images_group_element_634d4b2e1b85c is-in-view"
                                   data-shadow-style={3} data-roundness={4} data-inview="true"
                                   data-animate-shadow="true">
                                <div
                                    className="lqd-imggrp-img-container block-revealer element-uncovered revealing-ended"
                                    data-reveal="true"
                                    data-reveal-options="{&quot;direction&quot;:&quot;lr&quot;,&quot;bgcolor&quot;:&quot;&quot;,&quot;delay&quot;:&quot;&quot;}"
                                    data-parallax="true" data-parallax-from="{&quot;y&quot;:90}"
                                    data-parallax-to="{&quot;y&quot;:-70}"
                                    data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;ease&quot;:&quot;linear&quot;,&quot;start&quot;:&quot;top bottom&quot;}"
                                    style={{transform: 'translate3d(0px, 80.96px, 0px)'}}>
                                  <figure className="loaded" style={{opacity: 1}}><img width={314} height={420}
                                                                                       src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/about@2x.jpg"
                                                                                       className="ld-lazyload entered loaded"
                                                                                       alt=""
                                                                                       data-src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/about@2x.jpg"
                                                                                       data-srcset="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/about@2x-224x300.jpg 224w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/about@2x-765x1024.jpg 765w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/about@2x.jpg 786w"
                                                                                       data-aspect
                                                                                       data-ll-status="loaded"
                                                                                       srcSet="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/about@2x-224x300.jpg 224w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/about@2x-765x1024.jpg 765w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/about@2x.jpg 786w"/>
                                  </figure>
                                  <div className="block-revealer__element" style={{
                                    transform: 'scale(0, 1)',
                                    transformOrigin: '100% 50%',
                                    background: 'rgb(240, 240, 240)',
                                    opacity: 1
                                  }}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-1 vc_col-lg-5 vc_col-md-6 liquid-column-634d4b2e1c7c1 liquid-column-responsive-634d4b2e1c7c2">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper ca-initvalues-applied lqd-animations-done"
                             data-custom-animations="true"
                             data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1800&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;y&quot;:35,&quot;transformOriginX&quot;:50,&quot;transformOriginY&quot;:50,&quot;transformOriginZ&quot;:&quot;0px&quot;,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;y&quot;:0,&quot;transformOriginX&quot;:50,&quot;transformOriginY&quot;:50,&quot;transformOriginZ&quot;:&quot;0px&quot;,&quot;opacity&quot;:1}}">
                          <div className="ld-fancy-heading ld_fancy_heading_634d4b2e1c8b6 lqd-unit-animation-done"
                               style={{}}><h6
                              className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> Who
                            we are</h6></div>
                          <div className="ld-fancy-heading mask-text ld_fancy_heading_634d4b2e1d011">
                            <h2 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default lqd-split-words ca-initvalues-applied lqd-animations-done split-text-applied"
                                data-split-text="true" data-split-options="{&quot;type&quot;:&quot;words&quot;}"
                                data-custom-animations="true"
                                data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.lqd-words > .split-inner&quot;,&quot;duration&quot;:&quot;1000&quot;,&quot;delay&quot;:&quot;120&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;y&quot;:70},&quot;animations&quot;:{&quot;y&quot;:0}}">
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner"> Hub</span></div>
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner">connects</span></div>
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner">creative</span></div>
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner">people.</span></div>
                            </h2>
                          </div>
                          <div className="ld-fancy-heading ld_fancy_heading_634d4b2e1d58a lqd-unit-animation-done"
                               style={{}}><p
                              className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> With
                            over 25 years of experience, we have crafted thousands of strategic discovery process.</p>
                          </div>
                          <div
                              className="accordion accordion-md accordion-active-has-fill accordion-title-bordered accordion-title-circle vc_accordion_634d4b2e1dc65"
                              id="vc_accordion_634d4b2e1dc65" role="tablist" aria-multiselectable="true">
                            <div className="accordion-item panel active lqd-unit-animation-done" style={{}}>
                              <div className="accordion-heading" role="tab" id="heading_lqd-1579175585568-fabb85cc-3af9"
                                   data-id="lqd-1579175585568-fabb85cc-3af9"><h4 className="accordion-title"
                                                                                 data-controls="lqd-1579175585568-fabb85cc-3af9">
                                <a className data-toggle="collapse" data-parent="#vc_accordion_634d4b2e1dc65"
                                   href="#lqd-1579175585568-fabb85cc-3af9" aria-expanded="true"
                                   aria-controls="lqd-1579175585568-fabb85cc-3af9">
                                  Global search engine optimization
                                  <span className="accordion-expander">
                                    <i className="lqd-icn-ess icon-ion-ios-arrow-down"/>
                                    <i className="lqd-icn-ess icon-ion-ios-arrow-up"/>
                                  </span>
                                </a>
                              </h4></div>
                              <div id="lqd-1579175585568-fabb85cc-3af9" className="accordion-collapse collapse in"
                                   role="tabpanel" aria-labelledby="heading_lqd-1579175585568-fabb85cc-3af9">
                                <div className="accordion-content">
                                  <div className="ld-fancy-heading ld_fancy_heading_634d4b2e1d8b9"><p
                                      className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> A
                                    startup or start-up is started by individual founders or entrepreneurs to search for
                                    a repeatable and scalable business model.</p></div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item panel lqd-unit-animation-done" style={{}}>
                              <div className="accordion-heading" role="tab" id="heading_ld-1579175796106-906f8cfc-cbda"
                                   data-id="ld-1579175796106-906f8cfc-cbda"><h4 className="accordion-title"
                                                                                data-controls="ld-1579175796106-906f8cfc-cbda">
                                <a className="collapsed" data-toggle="collapse"
                                   data-parent="#vc_accordion_634d4b2e1dc65" href="#ld-1579175796106-906f8cfc-cbda"
                                   aria-expanded="false" aria-controls="ld-1579175796106-906f8cfc-cbda">
                                  Complete Social Media Integration
                                  <span className="accordion-expander">
                                    <i className="lqd-icn-ess icon-ion-ios-arrow-down"/>
                                    <i className="lqd-icn-ess icon-ion-ios-arrow-up"/>
                                  </span>
                                </a>
                              </h4></div>
                              <div id="ld-1579175796106-906f8cfc-cbda" className="accordion-collapse collapse"
                                   role="tabpanel" aria-labelledby="heading_ld-1579175796106-906f8cfc-cbda">
                                <div className="accordion-content">
                                  <div className="ld-fancy-heading ld_fancy_heading_634d4b2e1da40"><p
                                      className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> A
                                    startup or start-up is started by individual founders or entrepreneurs to search for
                                    a repeatable and scalable business model. A startup or start-up is started by
                                    individual founders or</p></div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item panel lqd-unit-animation-done" style={{}}>
                              <div className="accordion-heading" role="tab" id="heading_ld-1579175803325-17b3ad82-140a"
                                   data-id="ld-1579175803325-17b3ad82-140a"><h4 className="accordion-title"
                                                                                data-controls="ld-1579175803325-17b3ad82-140a">
                                <a className="collapsed" data-toggle="collapse"
                                   data-parent="#vc_accordion_634d4b2e1dc65" href="#ld-1579175803325-17b3ad82-140a"
                                   aria-expanded="false" aria-controls="ld-1579175803325-17b3ad82-140a">
                                  Branding Strategy for startups
                                  <span className="accordion-expander">
                                    <i className="lqd-icn-ess icon-ion-ios-arrow-down"/>
                                    <i className="lqd-icn-ess icon-ion-ios-arrow-up"/>
                                  </span>
                                </a>
                              </h4></div>
                              <div id="ld-1579175803325-17b3ad82-140a" className="accordion-collapse collapse"
                                   role="tabpanel" aria-labelledby="heading_ld-1579175803325-17b3ad82-140a">
                                <div className="accordion-content">
                                  <div className="ld-fancy-heading ld_fancy_heading_634d4b2e1dbb5"><p
                                      className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> A
                                    startup or start-up is started by individual founders or entrepreneurs to search for
                                    a repeatable and scalable business model. A startup or start-up is started by
                                    individual founders or</p></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section data-bg-image="url"
                       className="vc_row vc_custom_1605894390821 liquid-row-responsive-634d4b2e1df78 liquid-row-shadowbox-634d4b2e1df8c vc_row-has-fill vc_row-has-bg">
                <div className="ld-container container">
                  <div className="row ld-row ld-row-outer vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                    <div
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-10 text-md-center liquid-column-634d4b2e1e105 liquid-column-responsive-634d4b2e1e106">
                      <div className="vc_column-inner vc_custom_1607345714802">
                        <div className="wpb_wrapper ca-initvalues-applied lqd-animations-done"
                             data-custom-animations="true"
                             data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1800&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;y&quot;:35,&quot;transformOriginX&quot;:50,&quot;transformOriginY&quot;:50,&quot;transformOriginZ&quot;:&quot;0px&quot;,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;y&quot;:0,&quot;transformOriginX&quot;:50,&quot;transformOriginY&quot;:50,&quot;transformOriginZ&quot;:&quot;0px&quot;,&quot;opacity&quot;:1}}">
                          <div className="ld-fancy-heading ld_fancy_heading_634d4b2e1e1f0 lqd-unit-animation-done"
                               style={{}}><h6
                              className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> Who
                            we are</h6></div>
                          <div className="ld-fancy-heading mask-text ld_fancy_heading_634d4b2e1e32c">
                            <h2 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default lqd-split-words ca-initvalues-applied lqd-animations-done split-text-applied"
                                data-split-text="true" data-split-options="{&quot;type&quot;:&quot;words&quot;}"
                                data-custom-animations="true"
                                data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.lqd-words > .split-inner&quot;,&quot;duration&quot;:&quot;1000&quot;,&quot;delay&quot;:&quot;120&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;y&quot;:70},&quot;animations&quot;:{&quot;y&quot;:0}}">
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner"> What</span></div>
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner">makes</span></div>
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner">Hub</span></div>
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner">team</span></div>
                              <div style={{position: 'relative', display: 'inline-block'}}
                                   className="split-unit lqd-words"><span className="split-inner">different.</span>
                              </div>
                            </h2>
                          </div>
                          <div className="ld-fancy-heading ld_fancy_heading_634d4b2e1e468 lqd-unit-animation-done"
                               style={{}}><p
                              className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> Is
                            to provide ground solutions that are well engineered, pragmatic and innovative, using the
                            specialist skills and experience of our team, to meet and exceed the expectations of our
                            clients.</p></div>
                        </div>
                      </div>
                    </div>
                    <div
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-5 liquid-column-634d4b2e1e5e9 liquid-column-responsive-634d4b2e1e5eb">
                      <div className="vc_column-inner  vc_custom_1607345653278">
                        <div className="wpb_wrapper ca-initvalues-applied lqd-animations-done"
                             data-custom-animations="true"
                             data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1800&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;opacity&quot;:1}}">
                          <div
                              className="vc_row vc_inner vc_row-fluid vc_custom_1605400886869 liquid-row-shadowbox-634d4b2e1e6d8">
                            <div className="ld-container container-fluid">
                              <div className="row ld-row ld-row-inner">
                                <div
                                    className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-3 liquid-column-634d4b2e1e7d2">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                          className="ld-fancy-heading ld_fancy_heading_634d4b2e1e8a8 lqd-unit-animation-done"
                                          style={{}}><h6
                                          className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> 01</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                    className="wpb_column vc_column_container vc_col-sm-9 vc_col-xs-9 liquid-column-634d4b2e1e9f6 vc_col-has-fill">
                                  <div className="vc_column-inner vc_custom_1607345614090">
                                    <div className="wpb_wrapper">
                                      <div
                                          className="ld-fancy-heading ld_fancy_heading_634d4b2e1eac7 lqd-unit-animation-done"
                                          style={{}}><h5
                                          className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> Understand
                                        your requirements and the constrains.</h5></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                              className="vc_row vc_inner vc_row-fluid vc_custom_1579177672209 liquid-row-shadowbox-634d4b2e1ebf9">
                            <div className="ld-container container-fluid">
                              <div className="row ld-row ld-row-inner">
                                <div
                                    className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-3 liquid-column-634d4b2e1ecdf">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                          className="ld-fancy-heading ld_fancy_heading_634d4b2e1edb2 lqd-unit-animation-done"
                                          style={{}}><h6
                                          className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> 02</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                    className="wpb_column vc_column_container vc_col-sm-9 vc_col-xs-9 liquid-column-634d4b2e1eefb vc_col-has-fill">
                                  <div className="vc_column-inner vc_custom_1607345688852">
                                    <div className="wpb_wrapper">
                                      <div
                                          className="ld-fancy-heading ld_fancy_heading_634d4b2e1efd5 lqd-unit-animation-done"
                                          style={{}}><h5
                                          className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> Gather
                                        data, facts, thoughts, views, opinions &amp; constrain.</h5></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                              className="vc_row vc_inner vc_row-fluid vc_custom_1579177672209 liquid-row-shadowbox-634d4b2e1f0fe">
                            <div className="ld-container container-fluid">
                              <div className="row ld-row ld-row-inner">
                                <div
                                    className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-3 liquid-column-634d4b2e1f1dd">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                          className="ld-fancy-heading ld_fancy_heading_634d4b2e1f29e lqd-unit-animation-done"
                                          style={{}}><h6
                                          className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> 03</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                    className="wpb_column vc_column_container vc_col-sm-9 vc_col-xs-9 liquid-column-634d4b2e1f3d7 vc_col-has-fill">
                                  <div className="vc_column-inner vc_custom_1607345703224">
                                    <div className="wpb_wrapper">
                                      <div
                                          className="ld-fancy-heading ld_fancy_heading_634d4b2e1f4aa lqd-unit-animation-done"
                                          style={{}}><h5
                                          className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> All
                                        projectcs are participative and supportive.</h5></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                        className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-1 vc_col-md-6 text-center liquid-column-634d4b2e1f657">
                      <div className="vc_column-inner  ">
                        <div className="wpb_wrapper">
                          <div id="ld_images_group_container_634d4b2e1f6f0"
                               className="lqd-imggrp-container ld_images_group_container_634d4b2e1f6f0 ca-initvalues-applied lqd-animations-done"
                               data-custom-animations="true"
                               data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.lqd-imggrp-single&quot;,&quot;duration&quot;:&quot;1800&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;y&quot;:45,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;y&quot;:0,&quot;opacity&quot;:1}}">
                            <div className="lqd-imggrp-inner">
                              <p/>
                              <div id="ld_images_group_element_634d4b2e1f7d0"
                                   className="lqd-imggrp-single ld_images_group_element_634d4b2e1f7d0 lqd-unit-animation-done"
                                   style={{}}>
                                <div className="lqd-imggrp-img-container">
                                  <figure/>
                                </div>
                              </div>
                              <div id="ld_images_group_element_634d4b2e200ce"
                                   className="lqd-imggrp-single ld_images_group_element_634d4b2e200ce is-in-view lqd-unit-animation-done"
                                   data-shadow-style={4} data-inview="true" data-animate-shadow="true" style={{}}>
                                <div className="ld-parallax-wrap overflow-hidden">
                                  <div className="lqd-imggrp-img-container" data-parallax="true"
                                       data-parallax-options="{&quot;overflowHidden&quot;:true,&quot;ease&quot;:&quot;linear&quot;,&quot;start&quot;:&quot;top bottom&quot;}">
                                    <figure className="loaded"><img width={405} height={491}
                                                                    src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/contain-2@2x.jpg"
                                                                    className="ld-lazyload entered loaded" alt=""
                                                                    data-src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/contain-2@2x.jpg"
                                                                    data-srcset="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/contain-2@2x-247x300.jpg 247w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/contain-2@2x.jpg 810w"
                                                                    data-aspect data-ll-status="loaded"
                                                                    srcSet="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/contain-2@2x-247x300.jpg 247w, https://multiusepro.liquid-themes.com/wp-content/uploads/2020/09/contain-2@2x.jpg 810w"/>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                        className="wpb_column vc_column_container vc_col-sm-12 text-center liquid-column-634d4b2e20ed0 liquid-column-responsive-634d4b2e20ed1">
                      <div className="vc_column-inner vc_custom_1605401078625">
                        <div className="wpb_wrapper ca-initvalues-applied lqd-animations-done"
                             data-custom-animations="true"
                             data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1800&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;ease&quot;:&quot;power4.out&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;y&quot;:35,&quot;transformOriginX&quot;:50,&quot;transformOriginY&quot;:50,&quot;transformOriginZ&quot;:&quot;0px&quot;,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;y&quot;:0,&quot;transformOriginX&quot;:50,&quot;transformOriginY&quot;:50,&quot;transformOriginZ&quot;:&quot;0px&quot;,&quot;opacity&quot;:1}}">
                          <a href="#"
                             className="btn btn-solid text-uppercase circle border-thin btn-has-label ld_button_634d4b2e20f9d lqd-unit-animation-done"
                             style={{}}>
                          <span>
                            <span className="btn-txt" data-text="More About Our Works">More About Our Works</span>
                          </span>
                          </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section data-bg-image="url"
                       className="vc_row vc_custom_1605894313726 liquid-row-responsive-634d4b2e31c70 liquid-row-shadowbox-634d4b2e31c84 vc_row-has-fill vc_row-has-bg">
                <UsedTech/>
              </section>
              <p/></div>
          </main>
          <footer className="main-footer site-footer footer" id="footer" itemScope="itemscope"
                  itemType="http://schema.org/WPFooter">
            <section
                className="vc_row vc_custom_1603455383443 liquid-row-responsive-634d4b2e46085 liquid-row-shadowbox-634d4b2e46098">
              <div className="one-row_top_divider " style={{height: '140px'}}>
                <svg width={1440} fill="#ffffff" height={150} xmlns="http://www.w3.org/2000/svg"
                     preserveAspectRatio="none" viewBox="0 0 1440 150">
                  <path
                      d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z">
                    <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
                             values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z">
                    </animate>
                  </path>
                </svg>
              </div>
              <div className="ld-container container">
                <div className="row ld-row ld-row-outer">
                  <div
                      className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-3 liquid-column-634d4b2e4619a liquid-column-responsive-634d4b2e4619b">
                    <div className="vc_column-inner  vc_custom_1603455331121">
                      <div className="wpb_wrapper">
                        <div
                            className="wpb_single_image wpb_content_element vc_align_  liquid_vc_single_image-634d4b2e46985">
                          <figure className="wpb_wrapper vc_figure">
                            <div className="vc_single_image-wrapper    vc_custom_1579251376612 loaded "><img
                                src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/01/logo.svg"
                                className="vc_single_image-img attachment-full" alt="" loading="lazy"/></div>
                          </figure>
                        </div>
                        <div className="ld-fancy-heading ld_fancy_heading_634d4b2e46a38"><p
                            className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> 9864
                          Lancaster Court
                          Poughkeepsie, NY 12601</p></div>
                        <div className="ld-fancy-heading ld_fancy_heading_634d4b2e470ad"><p
                            className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> (733)
                          860-2906
                          hub@coporation.com</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-5 vc_col-md-6 liquid-column-634d4b2e47511">
                    <div className="vc_column-inner  ">
                      <div className="wpb_wrapper">
                        <div className="vc_row vc_inner vc_row-fluid liquid-row-shadowbox-634d4b2e475bc">
                          <div className="ld-container container-fluid">
                            <div className="row ld-row ld-row-inner">
                              <div
                                  className="wpb_column vc_column_container vc_col-sm-6 vc_col-xs-6 liquid-column-634d4b2e476b8">
                                <div className="vc_column-inner vc_custom_1603455172444">
                                  <div className="wpb_wrapper">
                                    <div className="ld-fancy-heading ld_fancy_heading_634d4b2e4778b"><h3
                                        className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default h6"> About</h3>
                                    </div>
                                    <div
                                        className="lqd-fancy-menu lqd-custom-menu lqd-menu-td-none ld_custom_menu_634d4b2e479ad">
                                      <ul id="ld_custom_menu_634d4b2e479ad" className="reset-ul   ">
                                        <li id="menu-item-83"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-83">
                                          <a href="#">About Us</a></li>
                                        <li id="menu-item-84"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-84">
                                          <a href="#">Partners</a></li>
                                        <li id="menu-item-85"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85">
                                          <a href="#">Portfolio</a></li>
                                        <li id="menu-item-86"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-86">
                                          <a href="#">Careers</a></li>
                                        <li id="menu-item-87"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-87">
                                          <a href="#">Blog</a></li>
                                      </ul>
                                    </div>
                                    <a href="#"
                                       className="btn btn-naked btn-has-label ld_button_634d4b2e48169 vc_custom_1621499169028">
                                    <span>
                                      <span className="btn-txt" data-text="We're hiring!">We're hiring!</span>
                                    </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div
                                  className="wpb_column vc_column_container vc_col-sm-6 vc_col-xs-6 liquid-column-634d4b2e48811">
                                <div className="vc_column-inner vc_custom_1603455178816">
                                  <div className="wpb_wrapper">
                                    <div className="ld-fancy-heading ld_fancy_heading_634d4b2e488e8"><h3
                                        className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default h6"> Services</h3>
                                    </div>
                                    <div
                                        className="lqd-fancy-menu lqd-custom-menu lqd-menu-td-none ld_custom_menu_634d4b2e48f0b">
                                      <ul id="ld_custom_menu_634d4b2e48f0b" className="reset-ul   ">
                                        <li id="menu-item-88"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88">
                                          <a href="#">Strategy</a></li>
                                        <li id="menu-item-89"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-89">
                                          <a href="#">eCommerce</a></li>
                                        <li id="menu-item-90"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-90">
                                          <a href="#">Digital Marketing</a></li>
                                        <li id="menu-item-91"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-91">
                                          <a href="#">Branding</a></li>
                                        <li id="menu-item-92"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-92">
                                          <a href="#">Design</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                      className="wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-0 vc_col-md-3 vc_col-sm-offset-1 liquid-column-634d4b2e496cc">
                    <div className="vc_column-inner  vc_custom_1603454771107">
                      <div className="wpb_wrapper">
                        <div className="ld-fancy-heading ld_fancy_heading_634d4b2e497a8"><h3
                            className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default h6"> Newsletter</h3>
                        </div>
                        <div className="ld-fancy-heading ld_fancy_heading_634d4b2e49d44"><p
                            className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> Subscribe
                          our newsletter to get the latest news &amp; updates.</p></div>
                        <div id="ld_newsletter_634d4b2e49f2e"
                             className="ld-sf ld-sf--input-solid ld-sf--button-naked ld-sf--size-md ld-sf--semi-round ld-sf--border-none ld-sf--button-show ld-sf--button-inside ld_newsletter_634d4b2e49f2e">
                          <form className="ld_subscribe_form ld_sf_form" method="post"
                                action="https://multiusepro.liquid-themes.com/">
                            <p className="ld_sf_paragraph">
                              <input type="email" className="ld_sf_text ld_sf_email" name="email"
                                     placeholder="mail@example.com..."/></p>
                            <button type="submit" className="ld_sf_submit"><span
                                className="submit-text visible-xs">Subscribe</span><span className="submit-icon"><i
                                className="lqd-icn-ess icon-md-arrow-forward"/></span> <span
                                className="ld-sf-spinner"><span>Sending </span></span></button>
                            <input type="hidden" className="ld_sf_list_id" name="list_id" defaultValue/>
                            <input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="34ba38de5c"/><input
                              type="hidden" name="_wp_http_referer" defaultValue="/"/>
                          </form>
                          <div className="ld_sf_response"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="vc_row vc_custom_1579252282874 liquid-row-shadowbox-634d4b2e4a37f">
              <div className="ld-container container">
                <div className="row ld-row ld-row-outer vc_row-o-content-middle vc_row-flex">
                  <div className="wpb_column vc_column_container vc_col-sm-12 liquid-column-634d4b2e4a464">
                    <div className="vc_column-inner  vc_custom_1579252300102">
                      <div className="wpb_wrapper">
                        <div
                            className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1579252291986  vc_custom_1579252291986">
                          <span className="vc_sep_holder vc_sep_holder_l"><span style={{borderColor: '#eeeeee'}}
                                                                                className="vc_sep_line"/></span><span
                            className="vc_sep_holder vc_sep_holder_r"><span style={{borderColor: '#eeeeee'}}
                                                                            className="vc_sep_line"/></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                      className="wpb_column vc_column_container vc_col-sm-6 liquid-column-634d4b2e4aba1 liquid-column-responsive-634d4b2e4aba2">
                    <div className="vc_column-inner  vc_custom_1603455234679">
                      <div className="wpb_wrapper">
                        <div className="ld-fancy-heading ld_fancy_heading_634d4b2e4ac86"><p
                            className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default"> ©
                          2020 Hub Coporation. All rights reserved.</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="wpb_column vc_column_container vc_col-sm-6 text-sm-right liquid-column-634d4b2e4b2e1">
                    <div className="vc_column-inner  vc_custom_1603455249135">
                      <div className="wpb_wrapper">
                        <div className="lqd-fancy-menu lqd-custom-menu lqd-menu-td-none ld_custom_menu_634d4b2e4b388">
                          <ul className="reset-ul inline-nav" id="ld_custom_menu_634d4b2e4b388">
                            <li><a href="#" target="_blank"> Terms and Conditions</a></li>
                            <li><a href="#" target="_blank"> Privacy Policy</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </div>
      </div>
  );
}

export default App;
