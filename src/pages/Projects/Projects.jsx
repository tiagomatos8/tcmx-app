import React from 'react';
import { Link } from 'react-router-dom';

import './Projects.scss';
import Card from '../../components/Card/Card';

const Projects = () => {
  return (
      <>
        <h1>Projects page</h1>
        <div class="columns">
            <div class="column">
                <Card 
                    imageUrl='https://bulma.io/images/placeholders/1280x960.png'
                    title='Next Logistics' 
                    subtitle='@nextlogistics' 
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
                    tags={[<a className='tag' href="#">#angular2</a>, <a className='tag' href="#">#materialdesign</a>, <a className='tag' href="#">#fuse</a>, <a className='tag' href="#">#node</a>, <a className='tag' href="#">#reactjs</a>, <a className='tag' href="#">#bulma.io</a>, <a className='tag' href="#">#aws</a>]}
                />
            </div>
            <div class="column">
                <Card 
                    imageUrl='https://bulma.io/images/placeholders/1280x960.png'
                    title='Next Logistics' 
                    subtitle='@nextlogistics' 
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
                    tags={[<a className='tag' href="#">#angular2</a>, <a className='tag' href="#">#materialdesign</a>, <a className='tag' href="#">#fuse</a>, <a className='tag' href="#">#node</a>, <a className='tag' href="#">#reactjs</a>, <a className='tag' href="#">#bulma.io</a>, <a className='tag' href="#">#aws</a>]}
                />
            </div>
            <div class="column">
                <Card 
                    imageUrl='https://bulma.io/images/placeholders/1280x960.png'
                    title='Next Logistics' 
                    subtitle='@nextlogistics' 
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
                    tags={[<a className='tag' href="#">#angular2</a>, <a className='tag' href="#">#materialdesign</a>, <a className='tag' href="#">#fuse</a>, <a className='tag' href="#">#node</a>, <a className='tag' href="#">#reactjs</a>, <a className='tag' href="#">#bulma.io</a>, <a className='tag' href="#">#aws</a>]}
                />
            </div>
        </div>
      </>
  );
}

export default Projects;