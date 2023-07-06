
// loading page start
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
//   loading page end

const themes = [
  {
    background: "#fff",
    color: "#000",
    primaryColor: "#fff"
},
{
    background: "#000",
    color: "#fff",
    primaryColor: "#000"
},
  {
      background: "#1A1A2E",
      color: "#FFFFFF",
      primaryColor: "#0F3460"
  },
  {
      background: "#461220",
      color: "#FFFFFF",
      primaryColor: "#E94560"
  },
  {
      background: "#192A51",
      color: "#FFFFFF",
      primaryColor: "#967AA1"
  },
  {
      background: "#231F20",
      color: "#FFF",
      primaryColor: "#BB4430"
  }
];

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) => {
      const div = document.createElement("div");
      div.className = "theme-btn";
      div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
      btnContainer.appendChild(div);
      div.addEventListener("click", () => setTheme(theme));
  });
};

displayThemeButtons();


// add post modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// add post modal end


// filter function
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// filter end



// like button

var btnTogglee = true;
var upVoteBtnn = document.querySelectorAll(".sharebtn , .likebtn");

for (let i = 0; i < upVoteBtnn.length; i++) {
  const element = upVoteBtnn[i];
  element.onclick = function () {
    if (btnTogglee){
      upVoteBtnn[i].style.backgroundColor = "purple";
      btnTogglee = false;
  } else{
      upVoteBtnn[i].style.backgroundColor = null;
      btnTogglee = true;
  }
  }
};




// change from fav to home
function change() {
   var posts = document.getElementById("main-posts")
   var fav = document.getElementById("fav-posts")

   posts.style.display="none"
   fav.style.display="block"


}

function change1() {
  var posts = document.getElementById("main-posts")
  var fav = document.getElementById("fav-posts")

  posts.style.display="block"
  fav.style.display="none"


}




// heart favicon 
   var btnToggleee = true;
   var favic = document.querySelectorAll(".fa-heart");
   var news = document.getElementById("alert-id")
   var alert = document.getElementById("alert")

   for (let x = 0; x < favic.length; x++) {
    const elementt = favic[x];
    elementt.onclick = function () {
      if (btnToggleee){
        favic[x].style.color = "red";
        btnToggleee = false;
        news.innerHTML="post added to favourites succesfuly "
        alert.style.display="block"
        
    } else{
      favic[x].style.color = null;
        btnToggleee = true;
        news.innerHTML="post removed from favourites succesfuly "
        alert.style.display="block"
    }
    }}


  // theme setting
    var btnToggleeee = true;
    var setting = document.querySelectorAll(".setting");
    var theme = document.getElementById("theme-btn")
    
    for (let x = 0; x < setting.length; x++) {
     const elementt = setting[x];
     elementt.onclick = function () {
       if (btnToggleeee){
        setting[x].style.color = "red";
        btnToggleeee = false;
        theme.style.display="block"
         
     } else{
      setting[x].style.color = null;
         btnToggleeee = true;
         theme.style.display="none"
     }
     }}
 

     
    //  delete and edit post
    var btnToggleeee = true;
    var edit = document.querySelectorAll(".toggle");
    var editdiv = document.getElementById("edit-div")
    
    for (let x = 0; x < setting.length; x++) {
     const elementt = edit[x];
     elementt.onclick = function () {
       if (btnToggleeee){
        edit[x].style.color = "red";
        btnToggleeee = false;
        editdiv.style.display="block"
         
     } else{
      edit[x].style.color = null;
         btnToggleeee = true;
         editdiv.style.display="none"
     }
     }}
 