((Drupal, once) => {
  Drupal.behaviors.speaker_card = {
    attach(context) {
      // Function to open speakers popup implemented with once to ensure that this executes only one time.
      once('speakers-popup', '.speaker-slider__item', context).forEach(
        (element) => {
          element.addEventListener('click', () => {
            const popupContent =
              element.querySelector('.speaker-details').innerHTML;
            const popup = document.querySelector('.speakers-block__popup');
            popup.querySelector('.speakers-block__popup__content').innerHTML =
              popupContent;
            popup.classList.add('speakers-block__popup--open');
          });
        },
      );

      // Function to handle speakers popup close implemented with once to ensure that this executes only one time.
      once(
        'speakers-popup-close',
        '.speakers-block__popup__close-button',
        context,
      ).forEach((element) => {
        element.addEventListener('click', () => {
          const popup = document.querySelector('.speakers-block__popup');
          popup.querySelector('.speakers-block__popup__content').innerHTML = '';
          popup.classList.remove('speakers-block__popup--open');
        });
      });
    },
  };
})(Drupal, once);
