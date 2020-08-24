import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Contact Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      
                      <div className="timeline-label">
                        <h2>If you think you have an opportunity for me or you would know anyone in your network who could refer me, please contact me. </h2>
                        <p>
                            Email: vibhavgoel97@gmail.com<br></br>
                            Phone: +1 (352) 871-4199<br></br>
                            Address: 4000 SW 37th Blvd,<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gainesville, FL - 32608,<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;United States
                        </p>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
