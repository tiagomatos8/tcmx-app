import React from 'react'
import Hero from '../../components/Hero/Hero'

const Home = props => {
    return (
        <div className="home-page">
            <Hero />
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
    )
}

export default Home;