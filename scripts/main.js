let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/first.jpg') {
      myImage.setAttribute('src','images/second.jpg');
    } else {
      myImage.setAttribute('src','images/first.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Enter your name here.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName + '!';
    }
}
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome Back, ' + storedName + "!";
  }
  myButton.onclick = function() {
    setUserName();
  }
  