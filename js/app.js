 function init_map(area) {
    //
    // Setup
    //

    var round = 1;
    var points = 0;
    var roundScore = 0;
    var totalScore = 0;
    ranOut = false;
    var distance;
    var distanceMeasure;

    //
    //  Init maps
    //
    
    svinitialize(area);
    mminitialize(area);

    //
    // Scoreboard & Guess button event
    //

    // Init Timer
    resetTimer();

    // Timer
    function timer() {
      count = count-1;
      if (count <= 0) {
        console.log('finished');
        if (round < 5){
          endRound();
        } else if (round >= 5){
          endGame();
        };
        clearInterval(counter);
      }
        if(count<50) {
            $("#guessButton").html(count);
        }
    };

    // Guess Button
    $('#guessButton').click(function (){
      doGuess();
      rminitialize(area);
        $("#guessButton").html("Ответить");
    });

    // End of round continue button click
    $('#roundEnd').on('click', '.closeBtn', function () {
      $('#roundEnd').fadeOut(500);

      // Reload maps to refresh coords
      svinitialize(area);
      mminitialize(area);
      rminitialize(area);

      // Reset Timer
      resetTimer();
    });

    // End of game 'play again' button click
    $('#endGame').on('click', '.playAgain', function () {
      window.location.reload();
    });

    //
    // Functions
    //

    // Reset Timer
    function resetTimer(){
      count = 60;
      counter = setInterval(timer, 1000);
    }

    // Calculate distance between points function
    function calcDistance(fromLat, fromLng, toLat, toLng) {
      return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
    };

    function doGuess(){
      if (ranOut == false){

        // Stop Counter
        clearInterval(counter);

        // Reset marker function
        function resetMarker() {
            //Reset marker
            if (guessMarker != null) {
                guessMarker.setMap(null);
            }
        };

        // Explode latLng variables into separate variables for calcDistance function
        locLatLongs = window.locLL.toString();
        guessLatLongs = window.guessLatLng.toString();

        // Make arrays and clean from (){} characters
        window.locArray = locLatLongs.replace(/[\])}[{(]/g,'').split(',');
        window.guessArray = guessLatLongs.replace(/[\])}[{(]/g,'').split(',');

        // Calculate distance between points, and convert to kilometers

        // Calculate points awarded via guess proximity
        function inRange(x, min, max) {
            return (min <= x && x <= max);
        };

        if(area=="westrussia") {

            distance = Math.ceil(calcDistance(window.locArray[0], window.locArray[1], window.guessArray[0], window.guessArray[1])/1000);
            distanceMeasure = "км";

            if (inRange(distance, 1, 2)) {
                points = 10000;
            } else if (inRange(distance, 3, 10)) {
                points = 7000;
            } else if (inRange(distance, 11, 50)) {
                points = 4000;
            } else if (inRange(distance, 51, 200)) {
                points = 3000;
            } else if (inRange(distance, 201, 500)) {
                points = 2000;
            } else if (inRange(distance, 501, 800)) {
                points = 1000;
            } else if (inRange(distance, 801, 1300)) {
                points = 500;
            } else if (inRange(distance, 1301, 1600)) {
                points = 400;
            } else if (inRange(distance, 1601, 2300)) {
                points = 300;
            } else if (inRange(distance, 2301, 2800)) {
                points = 200;
            } else if (inRange(distance, 2801, 3200)) {
                points = 100;
            } else if (inRange(distance, 3200, 4500)) {
                points = 50;
            } else if (inRange(distance, 4501, 6000)) {
                points = 25;
            } else {
                points = 0;
            }
            ;
        }
        else {

            distance = Math.ceil(calcDistance(window.locArray[0], window.locArray[1], window.guessArray[0], window.guessArray[1]));
            distanceMeasure = "м";

            if (inRange(distance, 1, 2)) {
                points = 20000;
            } else if (inRange(distance, 3, 10)) {
                points = 16000;
            } else if (inRange(distance, 11, 50)) {
                points = 14000;
            } else if (inRange(distance, 51, 200)) {
                points = 8000;
            } else if (inRange(distance, 201, 500)) {
                points = 4000;
            } else if (inRange(distance, 501, 800)) {
                points = 1000;
            } else if (inRange(distance, 801, 1300)) {
                points = 500;
            } else if (inRange(distance, 1301, 1600)) {
                points = 400;
            } else if (inRange(distance, 1601, 2300)) {
                points = 300;
            } else if (inRange(distance, 2301, 2800)) {
                points = 200;
            } else if (inRange(distance, 2801, 3200)) {
                points = 100;
            } else if (inRange(distance, 3200, 4500)) {
                points = 50;
            } else if (inRange(distance, 4501, 6000)) {
                points = 25;
            } else {
                points = 0;
            }
            ;
        }

        if (round < 5){

          endRound();
        } else if (round >= 5){
          endGame();
        };

      } else {

        // They ran out

      }
      
      timer();
      window.guessLatLng = '';

    };

    function endRound(){
      round++
      if(ranOut==true){
        roundScore = 0;
      } else {
        roundScore = points;
        totalScore = totalScore + points;
      }

      $('.round').html('Текущий раунд: <b>'+round+'/5</b>');
      $('.roundScore').html('Предыдущий результат: <b>'+roundScore+'</b>');
      $('.totalScore').html('Итоговый счет: <b>'+totalScore+'</b>');

      // If distance is undefined, that means they ran out of time and didn't click the guess button
      if(typeof distance === 'undefined' || ranOut == true){
        $('#roundEnd').html('<p>О боже, как долго!<br/> Вы не заработали очков в этом раунде!<br/><br/><button class="btn btn-primary closeBtn" type="button">Дальше</button></p></p>');
        $('#roundEnd').fadeIn();

        // Stop Counter
        clearInterval(counter);

        // Reset marker function
        function resetMarker() {
            //Reset marker
            if (guessMarker != null) {
                guessMarker.setMap(null);
            }
        };

        window.guessLatLng = '';
        ranOut = false;

        points = 0;

      } else {

          if (distance.toString() == "NaN")
          distance = "100500+ ";

          $('#roundEnd').html('<p>Ваше предположение оказалось в<br/><strong><h1>' + distance + '</strong>' + distanceMeasure + '</h1> от правильного ответа.<br/><div id="roundMap"></div><br/> Вы заработали<br/><h1>' + roundScore + ' очков</h1> в этом раунде!<br/><br/><button class="btn btn-primary closeBtn" type="button">Дальше</button></p></p>');
          $('#roundEnd').fadeIn();
      };

      // Reset Params
      window.guessLatLng = '';
      ranOut = false;

    };

    function endGame(){

        endRound();
        
      roundScore = points;
      totalScore = totalScore + points;

      $('#miniMap, #pano, #guessButton, #scoreBoard').hide();
      $('#endGame').html('<h1>Поздравляю!</h1><h2>Итоговый счет:</h2><h1>'+totalScore+'!</h1><br/>Поделиться результатом:<br/><br/><a class="btn" href="http://www.facebook.com/sharer.php?s=100&p[title]=' + encodeURIComponent('GuessTheCity') + '&p[summary]=' + encodeURIComponent('Я заработал '+totalScore+' очков в GuessTheCity!') + '&p[url]=' + encodeURIComponent('https://github.com/prozoroff/guessthecity') + '" target="_blank">Facebook</a> <a class="btn" href="https://twitter.com/intent/tweet?text=Я+заработал+'+totalScore+'+очков+в+GuessTheCity+%21&url=https://github.com/prozoroff/guessthecity" target="_blank">Twitter</a></p><br/><button class="btn btn-large btn-success playAgain" type="button">Заново?</button>');
      $('#endGame').fadeIn(500);

      rminitialize(area);

      // We're done with the game
      window.finished = true;
    }


  };