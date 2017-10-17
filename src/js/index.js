const $ = require('jquery');
global.jQuery = $;

const rSlides = require('responsive-slides');
const videoJS = require('video.js');
const styles = require('./../scss/styles.scss');


$(document).ready(() => {

  // Setup Slider
  $('.carousel__slider').responsiveSlides();
})

