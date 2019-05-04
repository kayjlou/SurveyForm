//Get the modal
let modal = document.getElementById("myModal");

//Get button that opens modal
let btn = document.getElementById("submit");

//Get the span that closes the modal
let span = document.getElementsByClassName("close");

//When user clicks button open the modal
btn.onclick = () => {
  modal.style.display = "block";
};

//WHen user clicks on the x close the modal
span.onclick = () => {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  modal.style.display = "none";
};
