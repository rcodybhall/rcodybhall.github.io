window.onload = function() {
    var user = "Ryan";
    var users = ["Matthew","Will","Ethan","Justin","Ryan"];

      if (users == "Ryan")
      {
        var fruit = ["Apples", "Oranges"];
      }
      else {
        var fruit = ["oranges", "bananas", "lemons", "mangos", "kiwis"];
      }
      //The Code below changes out the HTML in the ID fruitOut with variables "user" and "Fruit Array"
    document.getElementById("fruitOut").innerHTML = "<div><p>" + user + " likes " + fruit[0] + "</p></div>";
}

if (input == left arrow key)
{
  move tetris block left 1 space
}
