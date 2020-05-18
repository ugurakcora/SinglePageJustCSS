function responsiveMenu(){
    var x = document.getElementById("topnavId");
    if(x.className === "topnav"){
      x.className += " responsive";
    }
    else{
      x.className = "topnav";
    }
  }