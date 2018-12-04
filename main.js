$.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (file) {

var htmld ="<div class='carousel-inner row w-100 mx-auto'>";

var active ="active";

    for (var i=1; i<= file.data.length; i++) {
      if(i>1)
    active=""; 
     
       htmld+=
        "<div class='carousel-item col-md-4 " + active + "'>"+
         "<div class='card'>"+
         "<img class='card-img-top img-fluid'src='http://"+file.data[i].imagePath+"' alt='Card image cap'>"+
         "<div class='card-body'>"+
          " <h4 class='card-title'>"+file.data[i].label+"</h4>"+
          " <p class='card-text'>"+file.data[i].description+"</p>"+
        
        "</div>" +
        "</div>" +
        "</div>" ;


  
      document.getElementById("test").innerHTML=htmld;
   
  }


});