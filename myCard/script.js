let Followbtn = document.getElementById("followbtn");
let followersnumber = document.querySelector(".followers");
let followingnumber = document.querySelector(".following");
let frindsicon = document.getElementById("friendicon");
let imagelikepopup = document.querySelector("#card-image i");
let imagecontainer = document.querySelector("#card-image");
let likeBtn = document.querySelector(".like i");
let likeCount = document.querySelector(".like p");

// Function to handle the like action
let Onelikeperuser = 0; //one user can like a post only once
function handleLike() {
  //i did this outside the if condition because i want to use the same popup everytime i double click the image but only the first d0uble
  //  click is for the line popup
  imagelikepopup.style.opacity = "0.6";
  imagelikepopup.style.transform = "translate(-50%, -50%) scale(1)";
  if (Onelikeperuser === 0) {
    likeBtn.style.color = "red";
    likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
    Onelikeperuser = 1;
  }
  //   to delete or removing the pop pf the like icon in the image
  setTimeout(() => {
    imagelikepopup.style.opacity = "0";
    imagelikepopup.style.transform = "translate(-50%, -50%) scale(1)";
  }, 800);
}

// Add event listeners for both touchstart and dblclick and i passed the click function as an argument
imagecontainer.addEventListener("dblclick", handleLike);
imagecontainer.addEventListener("touchstart", handleLike);

// Like button click functionality
likeBtn.addEventListener("click", () => {
  if (Onelikeperuser === 0) {
    likeBtn.style.color = "red";
    likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
    Onelikeperuser = 1;
  }
});

// Follow and following button functionality
Followbtn.addEventListener("click", () => {
  if (Followbtn.innerHTML == "Follow") {
    Followbtn.innerHTML = "Following";
    followersnumber.innerHTML = parseInt(followersnumber.innerHTML) + 1;
    frindsicon.style.display = "inline-block";
  } else {
    Followbtn.innerHTML = "Follow";
    followersnumber.innerHTML = parseInt(followersnumber.innerHTML) - 1;
    frindsicon.style.display = "none";
  }
});
