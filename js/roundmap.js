//
// End of round map
//

function rminitialize(area) {
  console.log('End of round called');

  //
  // If locLatLongs or guessLatLongs are undefined, they didn't make a guess and there is no
  // round map for people who run out of time, so don't show it at all
  //
    var currentLLArr = locLatLongs.replace(/[\])}[{(]/g,'').split(',');
    var GuessLLArr = guessLatLongs.replace(/[\])}[{(]/g,'').replace(/\s/g, "").split(',');
    var actualLtLng = new google.maps.LatLng(currentLLArr[0],currentLLArr[1]);
    var guessLtLng = new google.maps.LatLng(GuessLLArr[0],GuessLLArr[1]);

    var zoom;
    if(area=="westrussia") zoom = 3;
    else if(area=="saint-petersburg") zoom = 8;
    else if(area=="moscow") zoom = 8;
    else if(area=="yaroslavl") zoom = 9;


    var mapOptions = {
      zoom: zoom,
      center: actualLtLng,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map($('#roundMap')[0], mapOptions);

    var actualMarker = new google.maps.Marker({
        position: actualLtLng,
        title:"Верный ответ",
        icon: 'http://www.google.com/mapfiles/ms/micons/green-dot.png'
    });

    var guessMarker = new google.maps.Marker({
        position: guessLtLng,
        title:"Предположение",
        icon: 'http://www.google.com/mapfiles/ms/micons/red-dot.png'
    });

    // To add the marker to the map, call setMap();
    actualMarker.setMap(map);
    guessMarker.setMap(map);

};