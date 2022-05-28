const result = document.getElementById("result");
const liElement = document.querySelectorAll("li");

function myFunction() {
  myNumber = [];
  for (i = 0; i < 6; i++) {
    let sayi = Math.floor(Math.random() * liElement.length+1);

    if (myNumber.indexOf(sayi) == -1) {
      myNumber.push(sayi);
    } else {
       i--
    }
    result.innerHTML = myNumber;
  }

  liElement.forEach(farbe);
  function farbe(item, index) {
    if ((item.style.backgroundColor = "blue")) {
      for (let j = 0; j < liElement.length-1 ; j++) {
        if (myNumber[j] == item.textContent) {
          item.style.backgroundColor = "red";
        }
      }
    }
  }
}
