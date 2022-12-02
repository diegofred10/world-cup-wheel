/* Que lo que el usuario ponga en el input vaya a la lista de participantes y a la ruleta al mismo tiempo
Crear una función que modifique el partcipante en la lista y en la ruleta
Crear una función que elimine el partcipante en la lista y en la ruleta
Crear un botón que haga girar la ruleta y se detenga en algunos segundos
Que al detenerse, elimine al ganador en la ruleta y lo añada a la lista de ganadores
Que aparezca en el recuadro del último ganador y también se añada a la lista de ganadores.
 */

const buttonAdd = document.querySelector(".add-country-button");
const inputWinner = document.querySelector(".main-content__winner");
const buttonPlay = document.querySelector(".main-content__button");
const inputLastWinner = document.querySelector(".last-winner");
const winnerList = document.querySelector(".winners-list");

let arrCountries = [];
buttonAdd.addEventListener("click", () => {
  const buttonDelete = `<i class="fa-solid fa-trash icon-delete"></i>`;
  const buttonModify = `<i class="fa-solid fa-pen icon-modify"></i>`;
  const country = document.querySelector(".input-country");
  const listCountries = document.querySelector(".container-list");
  if (country.value == "") {
    return alert("Please enter a country");
  }
  arrCountries.push(country.value);

  listCountries.innerHTML += `<li class="container-list-country">${country.value} <div> ${buttonModify} ${buttonDelete}</li ></div>`;
  const actionDelete = document.querySelectorAll(".icon-delete");

  actionDelete.forEach((el) =>
    el.addEventListener("click", (e) => {
      listCountries.removeChild(e.path[2]);
      arrCountries.pop();
    })
  );
  console.log(arrCountries);
  country.value = "";
});
const arrWinners = [];

buttonPlay.addEventListener("click", () => {
  // if (arrCountries.length === 0) {
  //   return alert("Please, enter a country");
  // }

  let rNum = Math.floor(Math.random() * arrCountries.length + 1);

  let rNum2 = parseInt(rNum) - 1;
  inputWinner.innerHTML = arrCountries[rNum2];
  inputLastWinner.innerHTML = inputWinner.innerHTML;
  arrWinners.push(inputLastWinner.innerHTML);
  console.log(inputWinner.innerHTML);
  winnerList.innerHTML += `<li class="winner-country">${inputWinner.innerHTML}</li >`;
});
