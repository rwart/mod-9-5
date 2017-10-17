(function () {
  'use strict';
  var rwButtons = document.getElementsByClassName('button');

  for (var i = 0; i < rwButtons.length; i++) {
    alert(rwButtons[i].innerText);
  }
  /*
  for (var i = 0, button; button = rwButtons[i]; i++) {
    alert(button.innerText);
  }
  */
})();
