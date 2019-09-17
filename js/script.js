/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

$(document).ready(function(){

   $("#filterButton").on("click", function(){
      $("#filterLaag").slideToggle();
   });
    
    $("#searchButton").on("click", function(){
      $("#searchField").animate({
          width:"toggle"},"swing" 
    );
   });

});



