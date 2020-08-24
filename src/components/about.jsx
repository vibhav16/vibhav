import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I’m pursuing Master's in Computer Science at the University of Florida, Gainesville. I am graduating in December 2020 and looking for opportunities in the Software Engineer role. I have experience with Java, Javascript, React Native, NodeJS, Cloud applications and Database Management. My background has prepared me to excel in a full-time capacity, enabling me to amass hands-on practicum and experience in software development and user support. My technical and leadership abilities, coupled with my adaptability and interpersonal skills, position me ready to thrive in this challenging field.
                    </p>
                    <p> My areas of interest involve working as a developer in multiple languages and on many platforms in situations that require coding. 
                        My motive is to deliver clean and more precisely correct code. I'm comfortable with data structures, databases, OO programming, web development,  
                        android applications and machine learning algorithms.
                        I am looking for an opportunity for me to hone my skills and I am very curious to see how I can make optimum use of these skills in an organization.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here is some of my expertise!</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Programming Languages </h3>
                    <p>I have experience in writing codes with Java, HTML, CSS, JavaScript, PHP, Python, Elixir.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Frameworks and Tools</h3>
                    <p> Node.js, React Native, React, Linux, Git, 
                        Heroku, Postman, Powershell, REST, AWS, Docker, Agile, GraphQL.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Databases</h3>
                    <p>I am comfortable in working with MongoDB, PostgreSQL, Oracle, MariaDB and MySQL databases.</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Docker </p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>OS</h3>
                    <p>Windows, Linux, Mac OS</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
