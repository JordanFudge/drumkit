function playSound(e) {

    // Creating variable to retrieve key code for corresponding audio HTML element
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Creating variable to retrieve key code for corresponding HTML element with class of "key"
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Preventing function from running if audio does not exist
    if(!audio) return;

    // Playing the audio file that corresponds to the key pressed
    audio.play();

    // Resetting audio to zero if pressed multiple times in a row, to prevent sound only playing once
    audio.currentTime = 0;

    // Adding class of "playing" to pull corresponding styles from style sheet (animation)
    key.classList.toggle('playing');

  }

  // Setting a constant for all elements with a class of "key"
  const keys = document.querySelectorAll('.key');
  keys.forEach(
    // Goes through each element with a class of key, and once the transition has ended, remove it (called in the function below)
    key => key.addEventListener('transitionend', removeTransition)
  );

  function removeTransition(event) {
    // Ignored if property name is not "transform"
    if(event.propertyName !== 'transform') return;

    // Removes the class "playing from the HTMl element"
    this.classList.remove('playing');
  }

  // runs the 'playSound' function when a key is pressed down
  window.addEventListener('keydown', playSound);

  // Logging each keypress to the console
  window.addEventListener('keydown', function (event) {
    console.log(event.keyCode);
  });