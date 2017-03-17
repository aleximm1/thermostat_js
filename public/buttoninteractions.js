$(document).ready(function(){

  thermostat = new Thermostat

  $(document).ready(function(){
    $(".main_body").hide(0).delay(500).fadeIn(3000)
    $('.bar').css('transform', 'translateY(' + thermostat.getPercentage() + '%)');
    var Ucolour = thermostat.getUsageColour()
    $('.page').css('background-color', Ucolour);
  });

  $('#up').on('click', function(){
    thermostat.up();
    $('.bar').css('transform', 'translateY(' + thermostat.getPercentage() + '%)');
    var Ucolour = thermostat.getUsageColour()
    $('.page').css('background-color', Ucolour);
  });

  $('#down').on('click', function(){
    thermostat.down();
    $('.bar').css('transform', 'translateY(' + thermostat.getPercentage() + '%)');
    var Ucolour = thermostat.getUsageColour()
    $('.page').css('background-color', Ucolour);
  });

  $('#reset').on('click', function(){
    thermostat.reset();
    $('.bar').css('transform', 'translateY(' + thermostat.getPercentage() + '%)');
    var Ucolour = thermostat.getUsageColour()
    $('.page').css('background-color', Ucolour);
  });

  $('#ps').on('click', function(){
    thermostat.changeMode();
    $('.bar').css('transform', 'translateY(' + thermostat.getPercentage() + '%)');
    var colour = thermostat.getPSColour()
    $('.psbutton').css('background-color', colour);
  });

});
