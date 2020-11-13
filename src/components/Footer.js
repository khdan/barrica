import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Barrica.</li>
        <li>
          Credits: <a href="http://khristianrueda.com/">Khristian Rueda</a> 
          {/* <a href="http://html5up.net">HTML5 UP</a> */}
        </li>
      </ul>
    </footer>
  );
}
