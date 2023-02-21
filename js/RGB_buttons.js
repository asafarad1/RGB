// RGB buttons //

document.getElementById('R_button').addEventListener("click", function() {
    this.classList.toggle('clicked');
    R.forEach((userItem) => {
        userItem.classList.toggle('channelSwitch');
      });
})

document.getElementById('G_button').addEventListener("click", function() {
    this.classList.toggle('clicked');
    G.forEach((userItem) => {
        userItem.classList.toggle('channelSwitch');
      });
})

document.getElementById('B_button').addEventListener("click", function() {
    this.classList.toggle('clicked');
    B.forEach((userItem) => {
        userItem.classList.toggle('channelSwitch');
      });
})

// article buttons //

document.getElementById('a1_button').addEventListener("click", function() {
  this.classList.toggle('clicked');
  
})