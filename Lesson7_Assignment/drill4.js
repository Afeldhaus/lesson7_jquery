 
 //     Project Name:  Recipe Display Application
      
 //     Author: Adam Feldhaus
      
      
  //    Date:   Thursday March 30th, 2017

   //   Filename: drill4.html
   -->  
   //displays the next element after the current target 
   function display(event) { 
    
     $(event.currentTarget).next().fadeIn("slow");
   
    }//end of display
   
   //attach event listener to h3 elements to invoke display function when clicked 
   //$("h3").click(display);
   
   //displays and animates the next element after the current target
   function display2 (event) {
    
     $(event.currentTarget).next().animate( {hight: 'toggle'}, "slow");
     
   }//end of display2
   
   //attach event listeners to h3 elements to invoke display functions when clicked
   $("h3").click(display2);
   
   //change the background color h3 elements when mouse hovers over it
   
   $("h3").hover(function() {
     $(this).css("background-color", "yellow");
     }, function() {
      $(this).css("background-color", "pink");
      
     }
   
   //hover() method will trigger the display2() method each time the mouse pointer hovers over header
   $("h3").hover(display2);
   