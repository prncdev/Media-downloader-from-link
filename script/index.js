'use strict';
console.log('%cFile Download Tool', 'color: green; text-decoration: underline');

const fileURL = document.getElementById('url'),
  fetchButton = document.querySelector('#input-button');

const FetchFile = function(url) {
  fetch(url).then(res => res.blob()).then(file => {
    const tempFile = URL.createObjectURL(file);
    const AppentBeforeEnd = document.body.querySelector('section.wrapper > main');

    const aTag = document.createElement('a');
    aTag.href = tempFile;
    aTag.download = url.replace(/^.*[\\/]/, '');
    AppentBeforeEnd.appendChild(aTag);
    aTag.click();
    aTag.remove();
  });
}

fetchButton.addEventListener('click', function(event) {
  event.preventDefault();
  FetchFile(fileURL.value);
});