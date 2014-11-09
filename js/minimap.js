//
// Minimap
//

function mminitialize(area) {

  var guessMarker;

  var location;
  var zoom;

  if(area=='westrussia')
  {
      location=new google.maps.LatLng(55.889531, 43.833477, true);
      zoom = 3;
  }
  else if(area=='saint-petersburg')
  {
      location=new google.maps.LatLng(59.938018,30.311961, true);
      zoom = 9;
  }
  else if(area=='moscow')
  {
      location=new google.maps.LatLng(55.752843,37.619135, true);
      zoom = 9;
  }
  else if(area=='yaroslavl')
  {
      location=new google.maps.LatLng(57.624708,39.880179, true);
      zoom = 10;
  }

  // Mini map setup
  var mapOptions = {
    center: location,
    zoom: zoom,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var mMap = new google.maps.Map(document.getElementById('miniMap'), mapOptions);

  // Marker selection setup
  var guessMarkerOptions = new google.maps.Marker({
      map: mMap,
      visible: true,
      title: 'Your guess',
      draggable: false
      //icon: '/img/googleMapsMarkers/red_MarkerB.png'
  });

  // Mini map marker setup
  function setGuessMarker(guess) {
    if (guessMarker) {
      guessMarker.setPosition(guess);
    } else {
      guessMarker = new google.maps.Marker(guessMarkerOptions);
      guessMarker.setPosition(guess);
    };
  };

  // Mini map click
  google.maps.event.addListener(mMap, 'click', function(event) {
    window.guessLatLng = event.latLng;
    setGuessMarker(window.guessLatLng);
  });

};