window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/figures/amf";
var NUM_INTERP_FRAMES = 6;

var interp_images = [];
var ref_images = [];
function preloadInterpolationImages() {
  // Get selected first frame
  const firstFrame = document.getElementById('first-frame-selector').value || '0';

  // Load main interpolation images
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/image_' + firstFrame + '_' + String(i) + '.png';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }

  // Load reference images
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/ref' + String(i) + '.png';
    ref_images[i] = new Image();
    ref_images[i].src = path;
  }

  // Update the first frame wrapper image
  const firstFrameWrapper = document.getElementById('first-frame-wrapper');
  if (firstFrameWrapper) {
    firstFrameWrapper.innerHTML = `
      <img src="${INTERP_BASE}/ref${firstFrame}.png"
           class="interpolation-image"
           alt="First frame"
           style="width: 100%; height: 300px; object-fit: cover;"/>
    `;
  }
}

function setInterpolationImage(i) {
  // Set main interpolation image
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);

  // Update reference image i
  var ref_image = ref_images[i];
  ref_image.ondragstart = function() { return false; };
  ref_image.oncontextmenu = function() { return false; };
  $('#reference-image-wrapper').empty().append(ref_image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    // Initialize slider to position 4
    $('#interpolation-slider').val(4);
    setInterpolationImage(4);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });

    bulmaSlider.attach();

})

document.addEventListener('DOMContentLoaded', function() {
  $('#first-frame-selector').on('change', function() {
    const currentSliderPosition = $('#interpolation-slider').val();  // Get current slider position
    preloadInterpolationImages();
    setInterpolationImage(currentSliderPosition);  // Use current position instead of 0
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select all external links (those starting with http:// or https://)
  const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="https"]');
  
  externalLinks.forEach(link => {
      link.setAttribute('target', '_blank');
      // Optional: Add rel="noopener noreferrer" for security
      link.setAttribute('rel', 'noopener noreferrer');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  $('#first-frame-selector').on('change', function() {
    const currentSliderPosition = $('#interpolation-slider').val();
    preloadInterpolationImages();
    setInterpolationImage(currentSliderPosition);
  });
});