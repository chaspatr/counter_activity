//best practice is to create all variables at the start to avoid searching
//through the html multiple times

//document.quearySelector  is making a query (a search) for a selector(a class or id or tag) in the document
let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");

//this line says, "I want to listen for someone to Click my increment button and anytime i 'hear' that event occur, i want to run the selected code"

incrementButton.addEventListener("click", function () {
  //any code that is written in here will run evertime i here a click on the increment button
  console.log("+ button clicked");
  // Calculate the new value for our counter
  let newCountervalue = Number(counter.innerHTML) + 1;
  //making the counter text turn red if >= 10
  if (newCountervalue >= 10) {
    counter.style.color = "red";
  }
  //override the previous value with the new one
  counter.innerHTML = newCountervalue;
});

//this is the event listener of the decrement button
decrementButton.addEventListener("click", function () {
  //logging everytime the decrement button is clicked
  console.log("- button clicked");
  //calculate the new value for the counter when the button is clicked
  let newCountervalue = Number(counter.innerHTML) - 1;
  //change the text color back to black after the value of the counter is < 10
  if (newCountervalue < 10) {
    counter.style.color = "black";
  }
  if (counter.innerHTML > 0) {
    //update the counter with the new value
    counter.innerHTML = newCountervalue;
  }
});
