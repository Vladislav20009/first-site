import React from 'react';
import '../App.css';
import fb from "./img/fb.svg"
import twitter from "./img/twitter.svg"
import youtube from "./img/youtube.svg"
function Footer() {
    return(
<div class="footer-wrapper">
    <footer class="page-footer container">
        <p class="hashtag">
            #may
        </p>
        <ul class="footer-social">
            <li>
                <a class="social-button" href="https://twitter.com/?lang=ru">
                            <img src={twitter} />
                </a>
            </li>
            <li>
                <a class="social-button" href="https://ru-ru.facebook.com/">
                    <img src={fb} />
                </a>
            </li> <li>
                <a class="social-button" href="https://www.youtube.com/?gl=RU&hl=ru">
                            <img src={youtube} />
                </a>
            </li>
        </ul>
        <p class="copyright">
            @2400 ****
        </p>
    </footer>
        </div>)
}
export default Footer