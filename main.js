let cars = document.getElementsByTagName("img");
console.log(cars);
let car1 = 0;
let car2 = 0;
let new1 = 0;
document.body.addEventListener("keydown", e => {
  for (let i in cars) {
    if (e.key == "d" && car1 < 1380) {
      car1 += 3;
      cars[0].style.marginLeft = `${car1}px`;
    } else if (car1 >= 1380) {
      alert("win red");
      car1 = 0;
      car2 = 0;
      // break;
    }
    if (e.key == "a" && car1 > 0) {
      car1 -= 3;
      cars[0].style.marginLeft = `${car1}px`;
    }
    if (e.key == "ArrowRight" && car2 < 1380) {
      car2 += 3;
      cars[1].style.marginLeft = `${car2}px`;
    } else if (car2 >= 1380) {
      alert("win white");
      car1 = 0;
      car2 = 0;
    }
    if (e.key == "ArrowLeft" && car2 > 0) {
      car2 -= 3;
      cars[1].style.marginLeft = `${car2}px`;
    }
  }
});
