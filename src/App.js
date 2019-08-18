import React from 'react';
import './App.scss';

function App() {
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
      <body>
        <section class="section">
          <div class="container">
            <div class="heading">
              <h1 class="title">TECHNICAL SKILLS</h1>
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
      </body>
    </div>
  );
}

export default App;
