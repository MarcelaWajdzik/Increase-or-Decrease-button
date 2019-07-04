//pobieramy potrzebne elementy z DOM


const btnIncrease = document.querySelector(".bigger");
const btnDecrease = document.querySelector(".smaller");
const text = document.querySelector("p");

// okreslenie potrzebnych danych
let textSize = 16;
// nie piszemy '16px'   to jest poczatkowa wielkosc dla p




//okeslenie akcji po clik, napisnie funkcji
function textIncrease() {
    //textSize powiekszany o 1 
    textSize++;
    text.style.fontSize = textSize + "px";
    //style- przechowuje wszystkie własciwosci z CSS. textSize jest to zmienna number ale ze druga wartosc to  string wiec 1 wartosc zostaje zamieniona na string przez co zostaja poddane konkatenacji
}

function textDecrease() {
    //textSize pomniejszany o 1 
    textSize--;
    text.style.fontSize = textSize + "px";
    //style- przechowuje wszystkie własciwosci z CSS. textSize jest to zmienna number ale ze druga wartosc to  string wiec 1 wartosc zostaje zamieniona na string przez co zostaja poddane konkatenacji
}




//ustawienie na sluchiwania na przyciskach-czekanie na clik
btnIncrease.addEventListener("click", textIncrease);
btnDecrease.addEventListener("click", textDecrease);
//"click", function(){})