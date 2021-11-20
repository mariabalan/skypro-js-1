function getRandom() {
  if (min >= max) {
    console.error("Такого не может быть!");
    return false; }
    else {
    return Math.floor(Math.random() * (max - min)) + min;
    }
}
let min = Number(prompt('Введите минимальное значение:'));
let max = Number(prompt('Введите максимальное значение:'));
console.log(getRandom());
