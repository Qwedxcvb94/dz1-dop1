let birthYear = prompt("Введите год вашего рождения:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (birthYear > currentYear) {
  alert("Вы еще не родились");
} else if (age < 30) {
  alert("Вы младше 30 лет");
} else if (age >= 30 && age < 60) {
  alert("Вы старше 30 лет, но младше 60 лет");
} else {
  alert("Вам старше 60 лет, рекомендуется посетить доктора");
}