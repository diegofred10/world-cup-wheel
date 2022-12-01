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


let arrCountries = [];
buttonAdd.addEventListener("click", () => {
    const buttonDelete = `<i class="fa-solid fa-trash icon-delete"></i>`;
    const buttonModify = `<i class="fa-solid fa-pen icon-modify"></i>`;
    const country = document.querySelector(".input-country");
    const listCountries = document.querySelector(".container-list");
    listCountries.innerHTML += `<li class="container-list-country">${country.value}  ${buttonModify} ${buttonDelete}</li >`;
    const actionDelete = document.querySelectorAll(".icon-delete");

    arrCountries.push(country.value);
    country.value = "";

    actionDelete.forEach(el => el.addEventListener("click", (e) => {
        listCountries.removeChild(e.path[1]);
        arrCountries.pop(e.path[1]);


    }))

});

buttonPlay.addEventListener("click", () => {

    let rNum = (Math.floor(Math.random() * arrCountries.length + 1));

    let rNum2 = parseInt(rNum) - 1;


});






buttonPlay.addEventListener("click", () => {
    inputLastWinner.innerHTML = inputWinner.innerHTML;

})


