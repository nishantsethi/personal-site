import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nishant Sethi</h2>
        <p><a href="mailto:sethi.nishant24@gmail.com">sethi.nishant24@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Nishant. I like building things. I am a
        Software Developer currently writing code at <a href="https://ncr.com">NCR Corporation </a>.
        I am a computer Science Graduate from <a href="https://srmuniversity.ac.in/">SRM Univeristy </a>.
        I also blog about technology at <a href="https://technokick.com">Technokick </a>
        which I founded in 2014.
        Before NCR, I was
        at <a href="https://ccs.in/">Center for Civil Society </a> as a Python/ ML consultant
        and <a href="https://getboarded.tech/">GetBoarded</a> as Python/ ML Intern.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Nishant Sethi <Link to="/">nishantsethi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
