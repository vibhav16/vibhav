import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Vibhav Goel</a></h1>
              <span className="email"><i className="icon-mail"></i> vibhavgoel97@gmail.com</span>
            </div>
            
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <br></br>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Education</a></li>
                  <li><a href="#workex" data-nav-section="workex">Work Experience</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact Me</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://www.linkedin.com/in/vibhav-goel/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" />&nbsp;Linkedin</a></li>
                <li><a href="http://github.com/vibhav16" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i>&nbsp;github</a></li>
                <li><a href="https://www.facebook.com/vibhav.goel.98/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" />&nbsp;Facebook</a></li>
                <li><a href="https://www.instagram.com/vibhavgoel/?hl=en" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" />&nbsp;Instagram</a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
              &copy; Copyright 2020 <b>Vibhav Goel</b>
              </small></p>
              
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
