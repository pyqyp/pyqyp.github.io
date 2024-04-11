import React, { useEffect } from 'react';
import './index.css';

const Timeline = () => {
  useEffect(() => {
    const timeline = () => {
      const items = document.querySelectorAll('.item');
      const activeClass = 'item--active';
      const imgSelector = '.img';
      
      items[0].classList.add(activeClass);
      document.getElementById('shell').style.backgroundImage = `url(${items[0].querySelector(imgSelector).getAttribute('src')})`;

      const itemLength = items.length;

      window.addEventListener('scroll', () => {
        const pos = window.scrollY;

        items.forEach((item, i) => {
          const min = item.offsetTop;
          const max = item.offsetHeight + item.offsetTop;
  
          if (i === itemLength - 2 && pos > min + item.offsetHeight / 2) {
            items.forEach((item) => item.classList.remove(activeClass));
            document.getElementById('shell').style.backgroundImage = `url(${items[itemLength - 1].querySelector(imgSelector).getAttribute('src')})`;
            items[itemLength - 1].classList.add(activeClass);
          } else if (pos <= max - 10 && pos >= min) {
            document.getElementById('shell').style.backgroundImage = `url(${item.querySelector(imgSelector).getAttribute('src')})`;
            items.forEach((item) => item.classList.remove(activeClass));
            item.classList.add(activeClass);
          }
        });
      });
    }
    
    timeline();
  }, []);

  return (
    <div className="shell" id="shell">
      <div className="header">
        <h2 className="title">Welcome to My Timeline</h2>
        <h3 className="subtitle">pp personal blog</h3>
      </div>
      <div className="timeline">
        <div className="item" data-text="Hello World">
          <div className="content">
            <img src="/img/01.jpg" alt="" className="img" />
            <h2 className="content-title">2000</h2>
            <p className="content-desc">
              歡迎來到這個虛無縹緲的世界
            </p>
          </div>
        </div>

        <div className="item" data-text="青春是一場回不去的瘋狂">
          <div className="content">
            <img src="./img/02.jpg" alt="" className="img" />
            <h2 className="content-title">2014</h2>
            <p className="content-desc">
              CNEC Christian College
              My secondary school life
            </p>
          </div>
        </div>

        <div className="item" data-text="再不瘋狂我們就老了">
          <div className="content">
            <img src="./03.jpg" alt="" className="img" />
            <h2 className="content-title">2020</h2>
            <p className="content-desc">
              會迷茫，會迷失，卻不可停下腳步
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;