/*window.onload = function() {
  if (fruitOut == "Apples")
    newColor = 'Red';
}
*/

function changeColor(newColor)
  {
   var elem = document.getElementById("para1");
   elem.style.color = newColor;
  }

function openWindow()
  {
    $( "#dialog" ).dialog();
  }
