const addClasses = () => {
  document.querySelector('.header').classList.add('slideUp');
  document.querySelector('.paragraph').classList.add('slideUp');
};
/*
  Adds the slideUp animation to the header
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
  document.querySelector('.slideUp').addEventListener(animationEnd, () => {
    document.querySelector('h1').style.marginTop = '50px';
    document.querySelector('.btn').style.visibility = 'visible';
    document.querySelector('.btn').classList.add('fadeIn');
  });
};
/*
  A callback for the slideUp animation
  Sets the margin-top of the header
  so it doesn't slide back down after the
  slideUp animation ends
 */

const makeButtonVisible = () => {
  document.querySelector('.slideUp').addEventListener(animationEnd, () => {});
};
/*
  Makes the buttons visible
  Also applies the fadeIn animation
 */

setTimeout(addClasses, 2200);
setTimeout(makeButtonsVisible, 2200);
/*
  Timers for each function
  The addClass function is delayed because
  otherwise the animation callback
  in changeMargin() would listen for the
  blurGrowIn animation to complete and not
  the slideUp one
  The buttons are made visible 0.1s after the
  slideUp animation is complete
 */
