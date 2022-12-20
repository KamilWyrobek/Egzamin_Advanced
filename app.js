const div = document.querySelector("div");


div.addEventListener("mouseover", () => {
  div.style.height = "130px";
});

div.addEventListener("mouseout", () => {
  div.style.height = "100px";
});

// Opcja nr 1 wypis imienia i nazwiska, litera po literze przy użyciu JS

function writeName(destination, message, speed){
  var i = 0;
  var interval = setInterval(function(){
      document.getElementById(destination).innerHTML += message.charAt(i);
      i++;
      if (i > message.length){
          clearInterval(interval);
      }
  }, speed);
}

// Opcja nr 2 wypis imienia i nazwiska przy użyciu DOM i innerHTML

writeName("writeName", "Kamil Wyrobek", 200);

let nameSurname = "Kamil Wyrobek";
document.getElementById("writeSurname").innerHTML = nameSurname;