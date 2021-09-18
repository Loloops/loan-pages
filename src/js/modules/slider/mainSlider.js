import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(btns, prevmodule, nextmodule) {
    super(btns, prevmodule, nextmodule);
  }

  
  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }


    try {
      this.hanson.style.opacity = '0';
      if(n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1'
          this.hanson.classList.add('slideInUp')
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp')
      }
    }catch(e){}
    

    this.slides.forEach(slide => {
      slide.style.display = 'none'
      // slide.classList.add('animated', 'fadeInUp')
      // slide.classList.remove('animated', 'fadeInDown')
    });
    // this.slides[this.slideIndex - 1].classList.remove('animated', 'fadeInUp')
    // this.slides[this.slideIndex - 1].classList.add('animated', 'fadeInDown')
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n)
  }

  bindTriggers() {
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      })

      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault()
        this.slideIndex = 1
        this.showSlides(this.slideIndex)
      })
    })

    
  }

  triggersSecondPage({module, slideIndex}){
    module.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault()
        this.plusSlides(slideIndex)
      })
    })
  }

  render() {
    if (this.container) {//Сделано для второй страницы, проверка на существование элемента ~есть блок ниже выполняется 
      try {
        this.hanson = document.querySelector('.hanson')
      } catch (e) {}

      this.showSlides(this.slideIndex)
      this.bindTriggers()
      
      this.triggersSecondPage({
        module: this.prevmodule,
        slideIndex: -1,
      })
      this.triggersSecondPage({
        module: this.nextmodule,
        slideIndex: 1,
      })
    }
  }
}