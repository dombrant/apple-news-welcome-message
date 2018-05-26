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

const makeButtonsVisible = () => {
  document.querySelector('.slide-up').addEventListener(animationEnd, () => {
    document.querySelector('h1').style.marginTop = '50px';
    document.querySelector('.button-container').style.visibility = 'visible';
    document.querySelector('.button-container').classList.add('fade-in');
  });
};
/*
  A callback for the slide-up animation
  Sets the margin-top of the header
  so it doesn't slide back down after the
  slide-up animation ends
 */

const makeButtonVisible = () => {
  document.querySelector('.slide-up').addEventListener(animationEnd, () => {});
};
/*
  Makes the buttons visible
  Also applies the fade-in animation
 */

setTimeout(addClasses, 2200);
setTimeout(makeButtonsVisible, 2200);
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
