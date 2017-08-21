document.addEventListener("DOMContentLoaded", function() {

var runAjax = document.querySelector('#run_ajax');
var runPingPong = document.querySelector('#run_ping_pong');

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


});
