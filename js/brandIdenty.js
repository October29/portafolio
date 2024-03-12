class brandIdenty extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.brandName;
    this.brandDescription;
    this.one;
      this.gridColOne;
      this.gridRowOne;
    this.two;
      this.gridColTwo;
      this.gridRowTwo;
    this.three;
      this.gridColThree;
      this.gridRowThree;
    this.four;
      this.gridColFour;
      this.gridRowFour;
    this.five;
      this.gridColFive;
      this.gridRowFive;
    this.six;
      this.gridColSix;
      this.gridRowSix;
    this.seven;
      this.gridColSeven;
      this.gridRowSeven;
    this.bGroundTop;
    this.bGroundLeft;
    this.shadowRoot.innerHTML = `
      <style>
        .brand-identy {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 5% 8%;
        }
        .brand-text {
          height: 70%;
          padding: 2%;
        }
        .brand-text h1 {
          color: #ffffff;
          font-size: 3.6rem;
          letter-spacing: -2px;
          font-weight: 800;
          margin: 0 0 3vh 0;
        }
        .brand-text p {
          color: white;
          text-align: justify;
          font-weight: 300;
          width: 300px;
          height: 80%;
          letter-spacing: 0.015rem;
          line-height: 1.4rem;
        }
        .brand-image {
          display: grid;
          grid-template-columns: repeat(6,1fr);
          grid-template-rows: repeat(6,1fr);
          gap: 15px;
          width: 500px;
          height: 500px;
        }
        .brand-image div {
          box-shadow: 3px 3px 6px rgba(27, 6, 6, 0.192);
          filter: brightness(1);
          border-radius: 20px;
          transition: all 0.4s ease-in-out;
          background-size: cover;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .brand-image div:hover {
          filter: brightness(1);
        }
        .expanded-grid {
          grid-column: 1 / span 6; 
          grid-row: 1 / span 6; 
          z-index: 3;
          transition: all 0.5s ease;
          animation: moveOne 0.4s forwards;
          cursor: pointer;
        }
        @keyframes moveOne {
          0% {
            background-position: -55px;
          }
          100% {
            background-position: 0;
          }
        }
        @keyframes moveTwo {
          0% {
            background-position: 55px;
          }
          100% {
            background-position: 0;
          }
        }
        .one {
          grid-column: ${this.getAttribute("gridColOne")};
          grid-row: ${this.getAttribute("gridRowOne")};
          animation: moveTwo 0.4s forwards;
        }
        .image-grid-one {
          background-image: url(../img/${this.getAttribute("one")});
        }
        .two {
          grid-column: ${this.getAttribute("gridColTwo")};
          grid-row: ${this.getAttribute("gridRowTwo")};
          animation: moveTwo 0.4s forwards;
        }
        .image-grid-two {
          background-image: url(../img/${this.getAttribute("two")});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        .three {
          grid-column: ${this.getAttribute("gridColThree")};
          grid-row: ${this.getAttribute("gridRowThree")};
          animation: moveTwo 0.4s forwards;
        }
        .image-grid-three {
          background-image: url(../img/${this.getAttribute("three")});
        }
        .four {
          grid-column: ${this.getAttribute("gridColFour")};
          grid-row: ${this.getAttribute("gridRowFour")};
          animation: moveTwo 0.4s forwards;
        }
        .grid-image-four {
          background-image: url(../img/${this.getAttribute("four")});
        }
        .five {
          grid-column: ${this.getAttribute("gridColFive")};
          grid-row: ${this.getAttribute("gridRowFive")};
        }
        .grid-image-five {
          background-image:  url(../img/${this.getAttribute("five")});
          background-position: -65px;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .grid-image-five-expanded {
          grid-column: 1 / span 6; 
          grid-row: 1 / span 6; 
          z-index: 3;
          transition: all 0.5s ease;
          background-image:  url(../img/${this.getAttribute("five")});
          background-position: -65px;
          background-size: contain;
          background-position: 0;
          background-repeat: no-repeat;
        }
        .six {
          grid-column: ${this.getAttribute("gridColSix")};
          grid-row: ${this.getAttribute("gridRowSix")};
          animation: moveTwo 0.4s forwards;
        }
        .grid-image-six {
          background-image: url(../img/${this.getAttribute("six")});
        }
        .seven {
          grid-column: ${this.getAttribute("gridColSeven")};
          grid-row: ${this.getAttribute("gridRowSeven")};
          background-position: 65px;
        }
        .grid-image-seven {
          animation: moveFour 0.4s forwards;
          background-image: url(../img/${this.getAttribute("seven")});
          background-position: center;
          background-size: contain;
        }
        .grid-image-seven-expanded {
          grid-column: 1 / span 6; 
          grid-row: 1 / span 6; 
          z-index: 3;
          transition: all 0.5s ease;
          background-image: url(../img/${this.getAttribute("seven")});
          background-position: -65px;
          background-size: contain;
          background-position: 0;
          background-repeat: no-repeat;
          animation: moveOne 0.4s forwards;
        }
        @media (max-width: 1110px) {
          .brand-identy {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 3% 3%;
          }
          .brand-text {
            height: 70%;
            padding: 2%;
          }
          .brand-text h1 {
            color: #ffffff;
            font-size: 2.6rem;
            letter-spacing: -2px;
            font-weight: 800;
            margin: 0 0 3vh 0;
          }
          .brand-text p {
            color: white;
            text-align: justify;
            font-weight: 300;
            width: 270px;
            height: 80%;
            letter-spacing: 0.015rem;
            line-height: 1.4rem;
          }
        }
        @media (max-width: 875px) {
          .brand-identy {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 2% 1%;
          }
          .brand-text {
            height: 70%;
            padding: 2%;
          }
          .brand-text h1 {
            color: #ffffff;
            font-size: 2rem;
            letter-spacing: -2px;
            font-weight: 800;
            margin: 0 0 3vh 0;
          }
          .brand-text p {
            color: white;
            text-align: justify;
            font-weight: 300;
            width: auto;
            letter-spacing: 0.015rem;
            line-height: 1.4rem;
          }
          .brand-image {
            display: grid;
            grid-template-columns: repeat(6,1fr);
            grid-template-rows: repeat(6,1fr);
            gap: 15px;
            width: 414px;
            height: 414px;
          }
        }
        @media (max-width: 380px) {
          header {
            display: flex;
            justify-content: end;
            align-items: center;
            background-color: #1e0d08;
            width: 100vw;
            height: 8vh;
            box-shadow: 0 2px 4px rgba(41, 3, 3, 0.384);
          }
          header h1 {
            color: #ff7548;
            margin: 0 5vw 0 0;
            font-size: 2rem;
          }
          .brand-identy {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 98%;
            margin: 2% 1%;
          }
          .brand-text {
            height: 70%;
            padding: 2%;
            width: 350px;
          }
          .brand-text h1 {
            color: #ffffff;
            font-size: 2rem;
            letter-spacing: 1px;
            font-weight: 800;
            margin: 0 0 3vh 0;
          }
          .brand-text p {
            color: white;
            text-align: justify;
            font-weight: 300;
            width: auto;
            letter-spacing: 0.015rem;
            line-height: 1.4rem;
          }
          .brand-image {
            display: grid;
            grid-template-columns: repeat(6,1fr);
            grid-template-rows: repeat(6,1fr);
            gap: 15px;
            width: 375px;
            height: 375px;
          }
          .brand-image div {
            box-shadow: 3px 3px 6px rgba(27, 6, 6, 0.192);
            filter: brightness(0.8);
            border-radius: 20px;
            transition: all 0.4s ease-in-out;
            background-position: center;
            background-repeat: no-repeat;
          }
        @keyframes moveTwo {
          0% {
            background-position: 55px;
          }
          100% {
            background-position: 0px;
          }
        }
      }
    </style>
    <main>
      <section class="brand-identy">
        <div class="brand-text">
          <h1>${this.getAttribute("brandName")}</h1>
          <p>${this.getAttribute("brandDescription")}</p>
        </div>
        <div class="brand-image">
          <div id="one" class="one image-grid-one"></div>
          <div id="two" class="two image-grid-two"></div>
          <div id="three" class="three image-grid-three"></div>
          <div id="four" class="four grid-image-four"></div>
          <div id="five" class="five grid-image-five"></div>
          <div id="six" class="six grid-image-six"></div>
          <div id="seven" class="seven grid-image-seven"></div>
        </div>
      </section>
    </main>
    </body>
</html>
      `;

    const one = this.shadowRoot.getElementById('one');
    const two = this.shadowRoot.getElementById('two');
    const three = this.shadowRoot.getElementById('three');
    const four = this.shadowRoot.getElementById('four');
    const five = this.shadowRoot.getElementById('five');
    const six = this.shadowRoot.getElementById('six');
    const seven = this.shadowRoot.getElementById('seven');

    one.addEventListener("click", () => expandChildOn(one));
    two.addEventListener("click", () => expandChildOn(two));
    three.addEventListener("click", () => expandChildOn(three));
    four.addEventListener("click", () => expandChildOn(four));
    five.addEventListener("click", () => expandChildOn(five));
    six.addEventListener("click", () => expandChildOn(six));
    seven.addEventListener("click", () => expandChildOn(seven));
  }
}
  
customElements.define('brand-identy', brandIdenty);

function expandChildOn(child) {
  if (child.id == 'one') {
      child.classList.toggle('one');
      child.classList.toggle('expanded-grid');
  } else if (child.id == 'two') {
      child.classList.toggle('two');
      child.classList.toggle('expanded-grid');
  } else if (child.id == 'three') {
      child.classList.toggle('three');
      child.classList.toggle('expanded-grid');
  } else if (child.id == 'four') {
    child.classList.toggle('four');
    child.classList.toggle('expanded-grid');
  } else if (child.id == 'five') {
      child.classList.toggle('five');
      child.classList.toggle('grid-image-five-expanded');
  } else if (child.id == 'six') {
      child.classList.toggle('six');
      child.classList.toggle('expanded-grid');
  } else if (child.id == 'seven') {
      child.classList.toggle('seven');
      child.classList.toggle('grid-image-seven-expanded');
  } else {
      console.log('tumacditamadrejavascript');
  }
}