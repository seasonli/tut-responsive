(function () {
  function resize() {
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    document.getElementsByTagName('html')[0].style['font-size'] = (12 * (screenWidth / 320)) + 'px';
    document.getElementsByTagName('html')[0].style['opacity'] = 1;
  }

  resize();
  window.onresize = resize;
})();
