'use strict'

module.exports = function(message) {
  let container = document.getElementById('js-app');
  container.innerHTML = message;
}
