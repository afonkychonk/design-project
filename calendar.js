//to get current month as first page
  switch (new Date().getMonth()) {
  case 0:
  document.getElementById("id0").style.display = "table"
  break;
  case 1:
  document.getElementById("id1").style.display = "table"
  break;
  case 2:
  document.getElementById("id2").style.display = "table"
  break;
  case 3:
  document.getElementById("id3").style.display = "table"
  break;
  case 4:
  document.getElementById("id4").style.display = "table"
  break;
  case 5:
  document.getElementById("id5").style.display = "table"
  break;
  case 6:
  document.getElementById("id6").style.display = "table"
  break;
  case 7:
  document.getElementById("id7").style.display = "table"
  break;
  case 8:
  document.getElementById("id8").style.display = "table"
  break;
  case 9:
  document.getElementById("id9").style.display = "table"
  break;
  case 10:
  document.getElementById("id10").style.display = "table"
  break;
  case 11:
  document.getElementById("id11").style.display = "table"
  break;

};

//the buttons to switch month
  $(document).ready(function(){
    //clears the current month when using any button
     $("button").click(function(){
        $("table.calendar").hide();
     });
     //opens the specified month
     $(".openJan").click(function(){
        $("table#id0").show();
     });
     $(".openFeb").click(function(){
        $("table#id1").show();
     });
     $(".openMar").click(function(){
        $("table#id2").show();
     });
     $(".openApr").click(function(){
        $("table#id3").show();
     });
     $(".openMay").click(function(){
        $("table#id4").show();
     });
     $(".openJun").click(function(){
        $("table#id5").show();
     });
     $(".openJul").click(function(){
        $("table#id6").show();
     });
     $(".openAug").click(function(){
        $("table#id7").show();
     });
     $(".openSep").click(function(){
        $("table#id8").show();
     });
     $(".openOct").click(function(){
        $("table#id9").show();
     });
     $(".openNov").click(function(){
        $("table#id10").show();
     });
     $(".openDec").click(function(){
        $("table#id11").show();
     });
  });


