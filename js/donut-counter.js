//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
var guests = prompt("How many guests are there?")
var donuts = prompt("How many donuts are there?")

guests = parseInt(guests)
donuts = parseInt(donuts)
//write a conditional to check if there are enough donuts
if (guests < donuts){
  alert("Enjoy the donuts")
}
}else{
  alert("There are not enough donuts!")
  }
  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
