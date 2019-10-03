import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <section className="hero is-fullheight has-background">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://tiagomatos8.github.io/tcmx-page/">
                  <img src={require("./assets/brazil-flag-small.png")} alt="Brazil flag" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-size-3 is-active" href="https://tiagomatos8.github.io/tcmx-page/">
                    Home
                  </a>
                  {/* <a className="navbar-item is-size-3">
                    Contact
                  </a> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <img className="hero-background is-transparent" src={require("./assets/hero-background_3.jpg")} alt="Fill Murray" />
        <div className="hero-body">
          <div className="container">
            <p className="title is-size-1">
              TIAGO MATOS
            </p>
            <p className="subtitle">
            <div>FRONT END ENGINEER</div>
            <div>DEVOPS APPRENTICE</div>
            </p>
          </div>
        </div>
        <div className={'hero-foot'}>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-narrow">
                <a className="button is-dark is-outlined is-large" href={require('./assets/Resume-TiagoMatos.docx.new.pdf')}>View Resume</a>
              </div>
              <div className="column is-narrow">
                <a className="button is-dark is-outlined is-large" href={require('./assets/Resume-TiagoMatos.docx.new.pdf')} download>Download Resume</a>
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
        <section className="section">
          <div className="container">
            <div className="heading">
              <div className="title has-text-centered is-size-2">TECHNICAL SKILLS</div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="heading">
              <div className="subtitle has-text-centered is-size-3"><strong>Front-End</strong></div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">React</p>
                    <p className="subtitle">Tiago uses atomic design approach to break entire interfaces down into smaller components.</p>
                    <progress className="progress" value="80" max="100">80%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">Angular</p>
                    <p className="subtitle">Working with a warehouse project using Angular 8, Material UI and Fuse theme.</p>
                    <progress className="progress" value="40" max="100">40%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">SCSS/CSS</p>
                    <p className="subtitle">Use of BEM naming convention to help with reusability of independent blocks.</p>
                    <progress className="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">Javascript ES8</p>
                    <p className="subtitle">Fetch API, HTML Drag and Drop API, Media Capture and Streams API, Touch events and more</p>
                    <progress className="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="heading">
              <div className="subtitle has-text-centered is-size-3"><strong>Back-End</strong></div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">NODEJS</p>
                    <p className="subtitle">Rest API with express, and used sequelize to communicate with MySQL database.</p>
                    <progress className="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">GRAPHQL</p>
                    <p className="subtitle">Tiago used Graphql querys and mutations in the front end for some projects.</p>
                    <progress className="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">JAVA</p>
                    <p className="subtitle">Worked with Java EE, Struts using a (MVC) architecture. Also woked with Hibernate to communicate with database.</p>
                    <progress className="progress" value="60" max="100">70%</progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
