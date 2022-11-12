(function () {
    'use strict';
    var newElement = document.createElement('li');
    newElement.textContent = 'I am a new Element';

    var list = document.getElementById('my-list');
    //list.apprendChild(newElement);

    list.insertBefore(newElement, list.firstElementChild);

    list.removeChild(newElement);

    console.log(newElement);

    var li = document.querySelector('li');

    li.parentElement.removeChild(li);




}());

