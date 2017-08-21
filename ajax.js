document.addEventListener("DOMContentLoaded", function() {

var runAjax = document.querySelector('#run_ajax');
var runPingPong = document.querySelector('#run_ping_pong');
var runCount = document.querySelector('#run_count');
var runTime = document.querySelector('#run_time');
var runCar = document.querySelector('#run_car');

runAjax.addEventListener ( 'click', function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData) {
  });
});

runPingPong.addEventListener ( 'click', function() {
    $.ajax( {
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    }).done(function(data) {
        console.log('Request was succesful');
        var newElement = document.createElement ('div');
        var section = document.querySelector('#step3456')
        newElement.innerHTML = data;
        section.append( newElement );
    }).fail(function() {
        console.log('Request was unsuccesful');
        var newElement = document.createElement ('div');
        var section = document.querySelector('#step3456')
        newElement.innerHTML = 'The data you are looking for is not available.';
        section.append( newElement );
    }).always(function functionName() {
        console.log('Request Complete');
    });

 });

 runCount.addEventListener ( 'click', function() {
     $.ajax( {
       url: 'http://first-ajax-api.herokuapp.com/count',
       method: 'GET',
       dataType: 'text',
     }).done(function(data) {
       var newElement = document.createElement ('div');
       var section = document.querySelector('#step7')
       newElement.innerHTML = data;
       section.append( newElement );
   });
});

 runTime.addEventListener ( 'click', function() {
     $.ajax( {
       url: 'http://first-ajax-api.herokuapp.com/time',
       method: 'GET',
       data: {timezone: 'Asia/Kolkata'},
       dataType: 'text',
     }).done(function(data) {
       var newElement = document.createElement ('div');
       var section = document.querySelector('#step8')
       newElement.innerHTML = data;
       section.append( newElement );
   });
 });

 runCar.addEventListener ( 'click', function() {
     $.ajax( {
       url: 'http://first-ajax-api.herokuapp.com/a_car',
       method: 'GET',
       dataType: 'HTML',
     }).done(function(data) {
       var newElement = document.createElement ('li');
       var section = document.querySelector('#car')
       newElement.innerHTML = data;
       section.append( newElement );
   });
 });


});
