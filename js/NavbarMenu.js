class NavbarMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });


    this.shadowRoot.innerHTML = `
        <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Poppins, sans-serif;
        }
        body {
          background-color: rgb(110, 110, 110);
        }
        .nav-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          height: 4.4rem;
          padding: 0 5%;
          background-color: #1e0d08;
        }
        .logo-container {
          display: flex;
          justify-content: start;
          align-items: center;
          width: 30%;
          height: 4.4rem;
          margin: 0 0 0 2rem ;
          list-style: none;
        }
        .logo-container img {
          min-width: 10rem;
          max-width: 14rem;
          margin: 0.2rem 0 0 0;
        }
      .nav-items-container {
        height: 4.4rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        width: 60%;
      }
      .portfolio, .contact-me {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 50%;
        margin: 0 10px;
        max-width: 200px;
        height: 100%;
        list-style: none;
        transition: all 0.2s ease-in-out;
      }
      .p-tittle-content, .c-title-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        text-align: center;
      }
      .portfolio-title, .contact-me-title {
        color: #ff7548;
        font-size: 1.3rem;
        width: 10rem;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
      }
      .portfolio-option {
        display: none;
        justify-content: center;
        flex-wrap: wrap;
        border-radius: 0 0 10px 10px;
        opacity: 1;
        background-color: rgb(255, 255, 255);
        box-shadow: 3px 3px 6px rgba(63, 57, 57, 0.171);
        transition: all 0.5s ease-in-out;
      }
      .portfolio-option a{
        width: 100%;
        padding: 20px;
        font-size: 1.1rem;
        text-align: center;
        text-decoration: none;
        color: #ff7548;
        transition: all 0.3s ease-in-out;
      }
      
      .portfolio:hover, .contact-me:hover {
        background-color: #ff7548;
      }
      .portfolio:hover .portfolio-title, .contact-me:hover .contact-me-title {
        color: white;
      }
      .portfolio-option a:hover {
        color: #ffffff;
        background-color: #ff9254;
        box-shadow: 0 3px 6px rgba(63, 57, 57, 0.171);
      }
      .portfolio-option :last-child:hover {
        border-radius: 0 0 10px 10px;
      }
      .portfolio:hover .portfolio-option, .contact-me:hover .contact-me-option {
        display: flex;
        opacity: 1;
      }
      
      .contact-me-option {
        display: none;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        border-radius: 0 0 10px 10px;
        opacity: 1;
        background-color: rgb(255, 255, 255);
        box-shadow: 3px 3px 6px rgba(63, 57, 57, 0.171);
        transition: all 0.5s ease;
      }
      .social-icon {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0 0 15px 0;
        transition: all 0.3s ease-in-out;
      }
      .social-icon img {
        transform: translate(0,5px);
      }
      .social-icon a {
        margin:  0 10px 0 0;
        font-size: 1.1rem;
        text-decoration: none;
        color: #ff9254;
        transition: all 0.5s ease-in-out;
      }
      .icon {
        width: 25px;
        height: 25px;
        margin: 15px 0 0 0;
        transition: all 0.5s ease-in-out;
      }
      .social-icon:hover {
        background-color: #ff9254;
        box-shadow: 0 3px 6px rgba(63, 57, 57, 0.171);
      }
      .social-icon:hover a {
        color: #ffffff;
      }
      .social-icon:hover img {
        filter: brightness(5);
      }
      .contact-me-option :last-child:hover {
        border-radius: 0 0 10px 10px;
      }
      
      
      .hmenu-main {
        display: none;
      }
      .h-menu {
        display: none;
      }
      
      @media (max-width: 830px) {
        .nav-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: end;
          align-items: center; 
          width: 100%;
          height: 4.4rem;
          padding: 0;
          background-color: #1e0d08;
        }
        .h-menu {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin: 20px 50px;
        }
        .line {
          width: 20px;
          margin: 2px 0;
          border: 2px solid #ff7548;
          border-radius: 5px;
          transition: all 0.4s ease-in-out;
        }
        .logo-container {
        display: flex;
        justify-content: start;
        align-items: start;
        position: absolute;
        left: 0px;
        top: 10px;
        width: 30%;
        height: 4.4rem;
        margin: 0 0 0 2rem ;
        list-style: none;
        }
        .logo-container img {
          min-width: 10rem;
          max-width: 14rem;
          margin: 0.2rem 0 0 0;
        }
      
        .nav-items-container {
          height: 4.4rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: end;
          flex-direction: row;
          width: auto;
          height: auto;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        .portfolio, .contact-me {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: none;
        height: auto;
        margin: 0;
        list-style: none;
        transform: translate(1000px,0);
        transition: all 0.2s ease-in-out;
      }
        .portfolio-option {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        border-radius: 0;
        opacity: 1;
        background-color: rgb(255, 255, 255);
        box-shadow: 3px 3px 6px rgba(63, 57, 57, 0.171);
        transition: all 0.5s ease-in-out;
      }
      .portfolio-title, .contact-me-title {
        color: white;
        font-size: 1.1rem;
        width: 100%;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        }
        .p-tittle-content, .c-title-content {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 45px;
          text-align: center;
          background-color: #ff7548;
        }
        .portfolio-option a{
          width: 100%;
          padding: 8px;
          margin: 5px 0;
          font-size: 0.9rem;
          text-align: center;
          text-decoration: none;
          color: #ff7548;
          transition: all 0.3s ease-in-out;
        }
      
        .contact-me-option {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        border-radius: 0 0 10px 10px;
        opacity: 1;
        background-color: rgb(255, 255, 255);
        box-shadow: 3px 3px 6px rgba(63, 57, 57, 0.171);
        transition: all 0.5s ease;
      }
      .social-icon {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: auto;
        padding: 10px 15px 15px;
        transition: all 0.3s ease-in-out;
      }
      .social-icon img {
        display: block;
        transform: translate(0,0px);
        margin: 10px auto
      }
      .social-icon a {
        margin: 0 5px;
        font-size: 0.9rem;
        text-decoration: none;
        color: #ff9254;
        transition: all 0.5s ease-in-out;
      }
      
      .portfolio a:hover, .contact-me a:hover {
        color: white;
      }
      .portfolio:hover .portfolio-title, .contact-me:hover .contact-me-title {
        color: white;
      }
      .portfolio-option a:hover {
        color: #ffffff;
        box-shadow: 0 3px 6px rgba(63, 57, 57, 0.171);
      }
      .portfolio-option :last-child:hover {
        border-radius: 0;
      }
      .portfolio:hover .portfolio-option, .contact-me:hover .contact-me-option {
        display: flex;
        opacity: 1;
      }
      }
    
      </style>
      <nav>
        <ul class="nav-container">
          <li class="logo-container">
            <img src="./img/OD_logo_H.svg" alt="October Design logo">
          </li>
          <ul class="nav-items-container" id="NavItemsContainer">
            <li id="hMenu" class="h-menu">
              <div class="line one" id="lOne"></div>
              <div class="line two" id="lTwo"></div>
              <div class="line three" id="lThree"></div>
            </li>
            <li class="portfolio" id="portfolio">
              <div class="p-tittle-content">
                <a class="portfolio-title" href="#">Portafolio</a>
              </div>
              <div class="portfolio-option">
                <a href="./pages/brandlover.html">Brandlover</a>
                <a href="./pages/socialmedia.html">Social Media</a>
                <a href="./pages/diseñoweb.html">Diseño Web</a>
                <a href="./pages/modelado3d.html">Modelado 3D</a>
                <a href="./pages/ilustracion.html">Ilustracion</a>
              </div>
            </li>
            <li class="contact-me" id="contactMe">
              <div class="c-title-content">
                <a class="contact-me-title" href="#">Contactame!</a>
              </div>
                <ul class="contact-me-option">
                  <li id="whatsapp" class="social-icon wp">
                    <a target="_blank" href="https://wa.me/573023918771?text=Tengo%20un%20proyecto%20en%20mente!">
                    <img class="icon" src="./img/wp.svg" alt="Whatsapp">
                        Whatsapp
                    </a>
                  </li>
                  <li id="instagram" class="social-icon ig">
                    <a target="_blank" href="https://www.instagram.com/octoberdesigner/">
                      <img class="icon" src="./img/ig.svg" alt="Instagram">
                      Instagram
                    </a>
                  </li>
                  <li id="telegram" class="social-icon tg">
                    <a target="_blank" href="https://t.me/OctoberDesigner">
                      <img class="icon" src="./img/tg.svg" alt="Telegram">
                      Telegram
                    </a>
                  </li>
                  <li id="behance" class="social-icon be">
                    <a target="_blank" href="https://www.behance.net/octoberdesigner">
                      <img class="icon" src="./img/be.svg" alt="Behance">
                      Behance
                    </a>
                  </li>
                  <li id="dribbble" class="social-icon dbbb">
                    <a target="_blank" href="https://dribbble.com/OctoberDesigner">
                      <img class="icon" src="./img/dbbb.svg" alt="Dribbble">
                      Dribbble
                    </a>
                  </li>
                  <li id="reddit" class="social-icon rd">
                    <a target="_blank" href="https://www.reddit.com/user/OctoberDesigner">
                      <img class="icon" src="./img/rd.svg" alt="Reddit">
                      Reddit
                    </a>
                  </li>
                  <li id="twitter" class="social-icon tw">
                    <a target="_blank" href="https://twitter.com/OctoberDesigner">
                      <img class="icon" src="./img/tw.svg" alt="Twitter">
                      Twitter
                    </a>
                  </li>
                  <li id="mail" class="social-icon mail">
                    <a href="mailto:octoberdesigner@proton.me">
                      <img class="icon" src="./img/mail.svg" alt="Mail">
                      Escribeme :)
                    </a>
                  </li>            
                </ul>
            </li>
            </li>
          </ul>    
        </ul>      
      </nav>
    `;
  }
    
    connectedCallback() {
      const hMenu = this.shadowRoot.querySelector('#hMenu');
      const portfolio = this.shadowRoot.querySelector('#portfolio');
      const contactMe = this.shadowRoot.querySelector('#contactMe');
      const lOne = this.shadowRoot.querySelector('#lOne');
      const lTwo = this.shadowRoot.querySelector('#lTwo');
      const lThree = this.shadowRoot.querySelector('#lThree');
      
      let clickCount = 0;
      
      hMenu.addEventListener('click', () => {
        if (clickCount === 0) {
          portfolio.style.transform = 'translate(0, 0)';
          contactMe.style.transform = 'translate(0, 0)';
          lOne.style.backgroundColor = '#ff7865';
          lTwo.style.backgroundColor = '#ffa06e';
          lThree.style.backgroundColor = '#ffd880';
          clickCount++;
        } else if (clickCount === 1) {
          portfolio.style.transform = 'translate(1000px, 0)';
          contactMe.style.transform = 'translate(1000px, 0)';
          lOne.style.backgroundColor = '#ff786500';
          lTwo.style.backgroundColor = '#ffa06e00';
          lThree.style.backgroundColor = '#ffd88000';
          clickCount = 0;  // Reiniciar el contador para el siguiente ciclo de clics
        }
      });
}
}


customElements.define('navbar-menu', NavbarMenu);