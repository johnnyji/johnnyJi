$(function onDocumentReady() {
  'use strict';
  var replaceLinksWithIcons = function replaceLinksWithIcons(icon, link) {
    $('.' + icon).replaceWith('<a href=\'' + link + '\' target=\'_blank\' class=\'icon-size\'><i class=\'fa fa-' + icon + '\'></i></a>').addClass('icon-size');
  };
  replaceLinksWithIcons('instagram', 'https://www.instagram.com/johnnyisji');
  replaceLinksWithIcons('linkedin', 'https://www.linkedin.com/pub/johnny-ji/92/1b8/981');
  replaceLinksWithIcons('twitter', 'https://www.twitter.com/johnnyisji');
  replaceLinksWithIcons('github', 'https://www.github.com/johnnyji');
});