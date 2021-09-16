export default class VideoPlayer {
  constructor (triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }

  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        //Проверка на существование плеера на странице, нужна для того чтобы он адеквтно работал и останавливался
        if (document.querySelector('iframe#frame')){
          this.overlay.style.display = 'flex';
        } else {
        //если плеера нет получаем url видоса и создаем плеер
          const path = btn.getAttribute('data-url')
          this.createplayer(path)
        }
        
      })
    })
  }

  bindCloseBtn () {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    })
  }

  createplayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      
    });
    console.log(this.player);
    this.overlay.style.display = 'flex';
  }





  init() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers()
    this.bindCloseBtn();
  }
}