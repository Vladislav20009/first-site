import React from 'react';
import '../App.css';
import l from "./img/logo.svg"
function Header() {
    return (
        <header class="page-header container">
            <img src={l} width="75" height="70"/>
    <nav class="main-menu">
      <ul class="main-menu-list">
        <li>
          <a href="#about">about city</a>
        </li>
        <li>
          <a href="#about-gallery">gallery</a>
        </li><li>
          <a href="#map">map</a>
        </li>
      </ul>
    </nav>
   </header>
        )
}
export default Header