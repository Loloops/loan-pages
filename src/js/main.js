import Slider from "./modules/slider";
import VideoPlayer from './modules/videoPlayer'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const slider = new Slider('.page', '.next');
  slider.render();

  const videoPlayer = new VideoPlayer('.showup .play', '.overlay')
  videoPlayer.init()
})