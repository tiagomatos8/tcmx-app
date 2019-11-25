import React from "react";

import './Hero.scss';

const Hero = () => {
  return (
    <section className="Hero-component hero is-fullheight has-background">

        <div className="hero-head">
            {/* We could use navbar here, but navbar component it will be on App component */}
        </div>

        <img className="hero-background is-transparent" src={require("../../assets/hero-background_3.jpg")} alt="Fill Murray" />
        
        <div className="hero-body">
            <div className="container">
                <p className="title is-size-1">
                    TIAGO MATOS
                </p>
                <p className="subtitle is-flex">
                    <span>FRONT END ENGINEER</span>
                    <span>DEVOPS APPRENTICE</span>
                </p>
            </div>
        </div>

        <div className={'hero-foot'}>
            <section className="section">
                <div className="container">
                    <div className="columns">

                        <div className="column is-narrow">
                            <a className="button is-dark is-outlined is-large" href={require('../../assets/Resume-TiagoMatos.docx.new.pdf')}>View Resume</a>
                        </div>

                        <div className="column is-narrow">
                            <a className="button is-dark is-outlined is-large" href={require('../../assets/Resume-TiagoMatos.docx.new.pdf')} download>Download Resume</a>
                        </div>

                        <div className="column">
                            <a className="button is-large" href="https://github.com/tiagomatos8">
                                <span className="icon is-small is-left">
                                    <i className="fab fa-github"></i>
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </section>
  );
}

export default Hero;