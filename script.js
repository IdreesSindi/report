var menu = document.getElementById("bar");
var item = document.getElementById("item");
menu.onclick = function (){
    if (item.style.right == '-300px') {
        item.style.right = '-0'
    }else{
        item.style.right = '-300px'
    }

}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

