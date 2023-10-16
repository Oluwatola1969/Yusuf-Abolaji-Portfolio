import './nav.css';
import React from "react";

export default function Nav() {
  return(
    <nav>
        <h1 className='logo'><a href="/">Yusuff Yac-grillo</a></h1>
        <ul>
          <li>
            <a href="/home">Welcome</a>
          </li>
          <li>
            <a href="/about">About me</a>
          </li>
          <li>
            <a href="/projects">Portfolio</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>

    </nav>
  );
}
