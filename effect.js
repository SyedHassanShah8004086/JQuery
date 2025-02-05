

$(document).ready(function(){
  $("#a").show(3000,function(){
    $("#b").show(3000,function(){
    $("#c").show(3000,function(){
    $("#d").show(3000);
    });
    });
  });
});