var familymembers = [
    "My Dad",
    "My Mom",
    "My Brother",
    "Me"
  ];
  
  var images = [
      "IMG-20190914-WA0027.JPG",
      "IMG_20201128_130237_Bokeh.jpg",
      "IMG-20190528-WA0016.jpg",
      "IMG_20190818_100741.JPG"
  ];console.log
  
  var i = 0;
  function nextslide() {  document.getElementById("familymembers").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;}console.log