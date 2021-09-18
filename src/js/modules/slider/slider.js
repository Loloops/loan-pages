export default class Slider {
  constructor({
    container = null, 
    btns = null, 
    next = null, 
    prev = null,
    activeClass = '',
    animate,
    autoplay,
    prevmodule = null,
    nextmodule = null, } = {}) {


    this.container = document.querySelector(container);

    try {
      this.slides = this.container.children;
    } catch(e) {}
    
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;

    //for second page
    this.prevmodule = document.querySelectorAll(prevmodule);
    this.nextmodule = document.querySelectorAll(nextmodule);
  }

  
}