import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Nishant Sethi's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hi, I&apos;m Nishant</Link></h2>
          <p>
            Software Developer with experience in Django, Flask, FastAPI, Machine Learning and MLOps
          </p>
        </div>
      </header>
      <p> Welcome to my website. I am software developer with interest in building high performance
        scalable apps. Over the years, I have worked on various technology for different projects.
        Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.

      </p>
      <p>
        I have also recently started a personal blog at <a href="https://blog.nishantsethi.com" target="_blank" rel="noreferrer"> blog.nishantsethi.com</a>. I will be posting about tech, starups and about my side hustles,
        so feel free to subscribe to the newsletter once you are on the blog!
      </p>
    </article>
  </Main>
);

export default Index;
