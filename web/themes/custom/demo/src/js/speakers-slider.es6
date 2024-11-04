((Drupal, once, Splide) => {
  Drupal.behaviors.speakers = {
  attach(context) {
    // Function to implement speakers slider using splidejs implemented with once to ensure that this executes only one time.
    once('speakers-slider', '.speaker-slider', context).forEach((element) => {
        new Splide(element, {
          type: 'loop',
          perPage: 4,
          arrows: true,
          perMove: 1,
          gap: '20px',
          padding: { left: '10px', right: '10px' },
          pagination: false,
          slideFocus: true,
        }).mount();
      });
    },
  };
})(Drupal, once, Splide);
