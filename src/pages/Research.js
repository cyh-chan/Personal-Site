import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Research/Cell';
import data from '../data/research';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Chan YH's research."
  >
    <article className="post" id="research">
      <header>
        <div className="title">
          <h2><Link to="/Research">Research</Link></h2>
          {/* <p>A selection of research that I&apos;m not too ashamed of</p> */}
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
