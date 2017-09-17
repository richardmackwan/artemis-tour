/* globals hopscotch: false */

/* ============ */
/* EXAMPLE TOUR */
/* ============ */
var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: 'helm',
      title: 'Welcome to Helm!',
      content: 'Hey there! This is a quick tour of helm controls to get you started fast.',
      placement: 'bottom',
      xOffset: 'center',
      arrowOffset: 'center'
    },
    {
      target: 'inventory',
      placement: 'right',
      title: 'Inventory',
      content: 'This shows the status of your: <ol><li><b>Energy</b></li><li><b>Shields</b></li><li><b>Ordnance</b> (you have 5 types of torpedoes)</li></ol>'
    },
    {
      target: 'warp',
      placement: 'right',
      title: 'Warp Slider (Green)',
      content: 'For travelling fast in a sector.'
    },
    {
      target: 'impulse',
      placement: 'right',
      title: 'Impulse Slider (Yellow)',
      content: 'For regular maneuvers like escorting and docking.'
    },
    {
      target: 'direction',
      placement: 'right',
      title: 'Ship Direction',
      content: 'Click anywhere in this circle to change course direction.',
    },
    {
      target: 'cam',
      placement: 'left',
      title: 'Camera',
      content: 'At the captain\'s request, change main screen view here.  Most of the time, you\'ll be using <b>FRONT VIEW</b>, <b>TAC</b>(tical), and <b>LRS</b>.',
    },
    {
      target: 'rightSidebar',
      placement: 'left',
      title: 'Sidebar',
      content: 'For: <ol><li><b>Docking</b> when you\'re close to a DS station</li><li><b>Reverse</b> direction</li><li><b>Shields</b> (turn off when warping to save energy</li><li><b>Zoom</b></li></ol>'
    },
    {
      target: 'helm',
      placement: 'bottom',
      title: 'You\'re all set!',
      content: 'Now on to great adventures!'
    }
  ],
  showPrevButton: true,
  scrollTopMargin: 100
},

/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'startTourBtn',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    setTimeout(function() {
      mgr.createCallout({
        id: calloutId,
        target: startBtnId,
        placement: 'right',
        title: 'Take a tour of Helm Station',
        arrowOffset: 'center',
        width: 170
      });
    }, 100);
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

init();
