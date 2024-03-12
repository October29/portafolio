class ServiceDesign extends HTMLElement {
    constructor() {
      super();
      this.Name = this.getAttribute("Name");
      this.Description = this.getAttribute("Description");
      this.PicA = this.getAttribute("PicA");
      this.PicB = this.getAttribute("PicB");
      this.PicC = this.getAttribute("PicC");
      this.PicD = this.getAttribute("PicD");
      this.Interval = this.getAttribute("Interval");
      
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
                  .service {
                    display: flex;
                    justify-content: center;
                    padding: 2rem 2rem 1rem;
                  }
                  .service-design {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: start;
                    align-items: center;
                    width: 300px;
                    height: auto;
                    transition: 0.5s ease-in-out;
                    border-radius: 1rem;
                    overflow: hidden;
                    background-color: #1e0d08;
                    transition: all 0.2s ease-in-out;
                  }
                  .service-design:hover  .carrusel {
                    height: 300px;
                    background-size: 100%;
                    filter: brightness(1) blur(0);
                  }
                .carrusel {
                  width: 300px;
                  height: 100px;
                  background-repeat: no-repeat;
                    background-size: 103%;
                    background-position: right;
                    transition: 0.5s ease-in-out;
                    box-shadow: 5px 5px 10px #201c1b1f;
                    filter: brightness(0.9) blur(1px);
                    background-image: url(./img/bv_paletes.jpg);
                }
                  .text {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: start;
                    width: auto;
                    height: auto;
                    transition: 0.5s ease-in-out;
                  }
          
                  .text h3 {
                    width: auto;
                    margin: 1rem 1.5rem 0;
                    padding-top: 10px;
                    text-align: right;
                    font-size: 2.3rem;
                    font-weight: 900;
                    color: #ff7548;
                  }
                  .text p {
                    max-width: 900px;
                    word-spacing: -1.7px;
                    margin: 0 1.5rem 1rem;
                    text-align: right;
                    font-size: 1.3rem;
                    color: white;
                  }
                  @media (max-width: 640px) {
                    .carrusel {
                      height: 300px
                    }
                  }
      </style>
      <section class="service">
        <div class="service-design">
          <div class="text">
            <h3>${this.Name}</h3>
            <p>${this.Description}</p>
            <div class="carrusel" id="carrusel"></div>
          </div>
        </div>
      </section>
        `;
    
        this.images = [this.PicA, this.PicB, this.PicC];
        this.currentIndex = 0;
    
        setInterval(() => this.changeBackground(), this.Interval);
      }
    
      changeBackground() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        const carrusel = this.shadowRoot.getElementById("carrusel");
        carrusel.style.backgroundImage = `url('${this.images[this.currentIndex]}')`;
      }
    }
      
    customElements.define('service-design', ServiceDesign);


  