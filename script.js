const addClasses = () => {
  document.querySelector('.header').classList.add('slide-up');
  document.querySelector('.paragraph-container').classList.add('slide-up');
};
/*
  Adds the slide-up animation to the header
  and paragraph based on the CSS class
  This is used instead of delaying the animation
  So that the changMargin function below
  will run properly
*/

const whichAnimationEvent = () => {
  const fakeElement = document.createElement('fakeElement');
  const animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd'
  };

  for (let a in animations) {
    if (fakeElement.style[a] !== undefined) {
      return animations[a];
    }
  }
};

const animationEnd = whichAnimationEvent();
// Above code from https://davidwalsh.name/css-animation-callback

const fadeInElement = element => {
  document.querySelector(element).style.visibility = 'visible';
  document.querySelector(element).classList.add('fade-in');
};
// Function to change the visibility and add the fade-in class to a specified element
// To be used in makeButtonVisible() and showRunAgainButton()

const makeButtonsVisible = () => {
  document.querySelector('.slide-up').addEventListener(animationEnd, () => {
    document.querySelector('h1').style.marginTop = '50px';
    fadeInElement('.button-container');
  });
};
/*
  A callback for the slide-up animation
  Sets the margin-top of the header
  so it doesn't slide back down after the
  slide-up animation ends
  Makes the log in and sign up buttons visible
  and applies the fade-in animation to them
 */

document.querySelector('.run-again-button').addEventListener('click', () => {
  window.location.reload(true);
});

const showRunAgainButton = () => {
  document
    .querySelector('.button-container')
    .addEventListener(animationEnd, () => {
      setTimeout(() => {
        fadeInElement('.run-again-button');
      }, 1000);
    });
};
// Fade in the run again button
// Give it a delay of one second

setTimeout(() => {
  addClasses();
  makeButtonsVisible();
  showRunAgainButton();
}, 2200);
/*
  Timers for each function
  The addClass function is delayed because
  otherwise the animation callback
  in changeMargin() would listen for the
  GrowIn animation to complete and not
  the slide-up one
  The buttons are made visible 0.1s after the
  slide-up animation is complete
 */
