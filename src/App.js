import React from 'react';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <section className="hero is-fullheight is-primary has-background">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">

                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Home
                  </a>
                  <a className="navbar-item">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <img className="hero-background is-transparent" src={require("./assets/hero-background_3.jpg")} alt="Fill Murray" />
        <div className="hero-body">
          <div className="container">
            <p className="title">
              TIAGO MATOS
            </p>
            <p className="subtitle">
            <div>FRONT END ENGINEER</div>
            <div>DEVOPS APPRENTICE</div>
            </p>
          </div>
        </div>
        <div className={'hero-foot'}>
        <section class="section">
          <div class="container">
            <a class="button is-large" href={require('./assets/Resume-TiagoMatos.docx.new.pdf')}>View Resume</a>
            <a class="button is-large" href={require('./assets/Resume-TiagoMatos.docx.new.pdf')} download>Download Resume</a>
          </div>
        </section>
        </div>
      </section>
        <section class="section">
          <div class="container">
            <div class="heading">
              <div class="title has-text-centered">TECHNICAL SKILLS</div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="heading">
              <div class="subtitle has-text-centered"><strong>Front-End</strong></div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">React</p>
                    <p className="subtitle">Tiago uses atomic design approach to break entire interfaces down into smaller components.</p>
                    <progress class="progress" value="80" max="100">80%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">SCSS/CSS</p>
                    <p className="subtitle">Use of BEM naming convention to help with reusability of independent blocks.</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">Javascript ES8</p>
                    <p className="subtitle">Fetch API, HTML Drag and Drop API, Media Capture and Streams API, Touch events and more</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div class="heading">
              <div class="subtitle has-text-centered"><strong>Back-End</strong></div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">NODEJS</p>
                    <p className="subtitle">akbfk bkafb kabfk bakub kuab kufbak ub kbuakub kuab kuak ubakbu ka buaku</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">JAVA</p>
                    <p className="subtitle">akbfk bkafb kabfk bakub kuab kufbak ub kbuakub kuab kuak ubakbu ka buaku</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">GRAPHQL</p>
                    <p className="subtitle">akbfk bkafb kabfk bakub kuab kufbak ub kbuakub kuab kuak ubakbu ka buaku</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">SASS</p>
                    <p className="subtitle">Use of BEM naming convention to help with reusability of independent blocks.</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">SASS</p>
                    <p className="subtitle">Use of BEM naming convention to help with reusability of independent blocks.</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">SASS</p>
                    <p className="subtitle">Use of BEM naming convention to help with reusability of independent blocks.</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">SASS</p>
                    <p className="subtitle">Use of BEM naming convention to help with reusability of independent blocks.</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">SASS</p>
                    <p className="subtitle">Use of BEM naming convention to help with reusability of independent blocks.</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title">SASS</p>
                    <p className="subtitle">Use of BEM naming convention to help with reusability of independent blocks.</p>
                    <progress class="progress" value="70" max="100">70%</progress>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-container">
              <table class="table is-bordered">
                <div className="thead">
                  <th>React</th>
                  <th>SASS</th>
                  <th>Unit test</th>
                </div>
              </table>
            </div>
          </div>
        </section>
        <div class="container">
            <div class="columns is-centered">
              <div class="column">
                <div className="box">
                  Login
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
