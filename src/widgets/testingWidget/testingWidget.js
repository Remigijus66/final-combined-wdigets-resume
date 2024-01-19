import { widgetHtmlService, boomioService, DragElement } from '@/services';
import { closeIcon, infoIcon} from '@/сonstants/icons';
// import { infoIcon } from '@/сonstants/icons';
import './styles.css';

class TestingWidget {
  constructor() {
    this.startBud()
    // this.startAnimation();
  }
  startBud = () => {
    const width = 220;
    const height = 20;
    const { clientWidth, clientHeight } = document.documentElement;

    const posx = ((clientWidth - width) / 2).toFixed();
    const posy = ((clientHeight - height) / 2).toFixed();
    // const budEl = document.createElement('div')
    const budEl = document.createElement('button')
    const targetEl = document.getElementById('radiobox')
    // budEl.style.position = 'absolute';
    //  budEl.style.top = `${posy}px`;
    //  budEl.style.left = `30px`;
    //  budEl.style.width = `${width}px`;
    //  budEl.style.height = `${height}px`;
    budEl.classList.add('button') 
    budEl.classList.add('blue-bkgr')
     budEl.innerHTML = `BOOMIO project`;

     budEl.className = 'bud'
     budEl.id = 'bud'

    //  document.body.appendChild(budEl);
    targetEl.appendChild(budEl);

     document.getElementById('bud').addEventListener("click", (e) => { e.preventDefault(); this.startAnimation() });
     document.getElementById('bud').addEventListener("touchend", (e) => { e.preventDefault(); this.startAnimation() });

  }

  startAnimation = () => {
    localStorage.setItem('testing_Widgets', true);
    const width = 260;
    const height = 300;
    const { clientWidth, clientHeight } = document.documentElement;

    const posx = ((clientWidth - width) / 2).toFixed();
    const posy = ((clientHeight - height) / 2).toFixed();



    const animationEl = document.createElement('div');
    animationEl.style.position = 'absolute';
    animationEl.style.top = `${posy}px`;
    animationEl.style.left = `30px`;
    animationEl.style.width = `${width}px`;
    animationEl.style.height = `${height}px`;
  


    

    document.body.appendChild(animationEl);

    new DragElement(animationEl);

    function closeModalDiscount() {
      removeWidgets();
      localStorage.removeItem('testing_Widgets');
      animationEl.remove();
    }

    function openInfoModal() {
         const infoModal = document.createElement('div')
      infoModal.innerHTML = `      <div class='close_button align-right'>
      <img src='${closeIcon}' width: '30' height='30' alt='' id="close_info_img">
    </div>
    <img src='${infoIcon}'   alt='' id="info_div_img" style="opacity: 0.7;
    width: 40px">
   
    <p>
    In 2023 I was working in a team building Boomio project. This project is designed to boost e-shops efficiency by gamifying the shopping process and thus gaining  additional visibility for partnering brands and helping customers make quicker purchase decisions, ensuring an engaging buying experience, by using Boomio's quick, fun games.  Initially built as a shopify plugin the project grew to universal e-shop tool.
    </p>
    <p>
    I have added few my-built games here to feel the spirit of this app, however if you want to see the project in action or have more info about it, please visit <a href="https://boomio-e-shop.myshopify.com/products/spin-the-wheel-mug" target="_blank"> demo-shop </a> or  <a href="https://www.boomio.com/" target="_blank">boomio site.</a> 
    </p>
    <p>Code of the games is
    <a href="https://github.com/Remigijus66/final-combined-wdigets-1-main" target="_blank">here.</a> 
    </p>
     `
      infoModal.className = 'info_modal'
      infoModal.id = 'info_modal'

   animationEl.appendChild(infoModal)
   document.getElementById('close_info_img').onclick = closeInfoModal;
     
    }
    
    function closeInfoModal() {
          animationEl.removeChild(document.getElementById('info_modal'))
    }

    function removeWidgets() {
      const element = document.getElementById('boomio-widget-screen-wrapper-content');

      if (element) {
        element.remove();
      }
      widgetHtmlService.createWidgetContainer();
    }

    const widgetsList = [
      // { spawn: 'puzzle', despawn: 'puzzle-widget', name: 'Puzzle' },
      { spawn: 'wheel', despawn: 'wheelOfFortune', name: 'Wheel Of Fortune' },
      // { spawn: 'stone', despawn: 'stone-container', name: 'Stone' },
      // { spawn: 'ice', despawn: 'ice-widget', name: 'Ice' },
      // { spawn: 'penguin', despawn: 'penguin-widget', name: 'Penguin' },
      // { spawn: 'snake', despawn: 'snake', name: 'Snake' },
      // { spawn: 'claw', despawn: 'claw', name: 'Claw Machine Widget' },
      // { spawn: 'cats', despawn: 'cats', name: 'Cats Widget' },
      // { spawn: 'hedgehog', despawn: 'hedgehog', name: 'Hedgehog Widget' },
      { spawn: 'guess', despawn: 'guess', name: 'Guess image game' },
      { spawn: 'whack', despawn: 'whack', name: 'Whack mole game' },
      // { spawn: 'maze', despawn: 'maze', name: 'Maze Widget' },
      // { spawn: 'pacman', despawn: 'pacman', name: 'Pacman Widget' },
      // { spawn: 'start_widget', despawn: 'start_widget', name: 'start Widget' },
    ];

    let buttonsHtml = '';
    widgetsList.forEach((widget) => {
      const spawnBtnId = `SpawnBtn_${widget.spawn}`;

      buttonsHtml += `<div style='width:100%;margin-bottom:10px '>
      ${widget.spawn === 'snake'
          ? `<p style='margin-top:20px;margin-bottom:30px;'>Coming soon</p>`
          : ''
        }
          <button class='go_button' style='margin:0px 10px;font-size: 12px !important;width:160px !important; ' data-widget-spawn='${widget.spawn
        }' id='${spawnBtnId}'>${widget.name}</button>
        </div>`;
    });

    animationEl.innerHTML = `
      <div  class='position-relative product-design-bg-2 Preview-select' style='z-index: 5; min-width: 260px;height: 240px !important; 
      padding: 20px 0px;position:relative;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); border: 1px solid #ddd' id='widget_test'>
        <div class='close_button align-right'>
          <img src='${closeIcon}' width: '30' height='30' alt='' id="close_div_img">
        </div>
        <div  id="info_div_img" class='info-button'>
        <h2>Project info</h2>
         
        </div>
        <div class='coupon__preview__body coupon_discount_modal'>
     
            <span> Games </span>
            <div class='coupon__preview__card__header_buttons text-center d-block'>

            ${buttonsHtml}          
          </div>
          <div class='coupon__preview__card__header text-center d-block'>
          <div style='width:100%;margin-bottom:14px; display: none;'>
          <button class='go_button' id='remove_div_btn' style='margin-top:10px'>Remove All</button>
        </div>        
        </div>
        </div>
      </div>
    `;

    const couponPreviewContainer = animationEl.querySelector(
      '.coupon__preview__card__header_buttons',
    );

    couponPreviewContainer.addEventListener('touchstart', (event) => {
      event.stopPropagation();
    });

    couponPreviewContainer.addEventListener('touchmove', (event) => {
      event.stopPropagation();
    });
    document.getElementById('close_div_img').onclick = closeModalDiscount;
    document.getElementById('info_div_img').onclick = openInfoModal;
    document.getElementById('remove_div_btn').onclick = removeWidgets;

    let prevWidget = '';

    widgetsList.forEach((widget) => {
      const spawnBtnId = `SpawnBtn_${widget.spawn}`;

      document.getElementById(spawnBtnId).onclick = () => {
        const widgetName = document.getElementById(spawnBtnId).getAttribute('data-widget-spawn');
        if (prevWidget) {
          // const element = document.getElementById(prevWidget.despawn); //might need to change so it only removes prev
          // if (element) {
          //   element.remove();
          // }

          removeWidgets();
        }
        boomioService.testing(widgetName);
        prevWidget = widget;
      };
    });
  };
}

let testingWidget = null;

export default () => {
  if (!testingWidget) {
    testingWidget = new TestingWidget();
  }
};
