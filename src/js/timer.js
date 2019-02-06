jQuery("#clock").countdown("2019/03/09", function(event) {
  jQuery(this).html(event.strftime("%Dd %Hh %Mm %Ss"));
});
