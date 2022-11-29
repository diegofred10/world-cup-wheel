/* Que lo que el usuario ponga en el input vaya a la lista de participantes y a la ruleta al mismo tiempo
Crear una función que modifique el partcipante en la lista y en la ruleta
Crear una función que elimine el partcipante en la lista y en la ruleta
Crear un botón que haga girar la ruleta y se detenga en algunos segundos
Que al detenerse, elimine al ganador en la ruleta y lo añada a la lista de ganadores
Que aparezca en el recuadro del último ganador y también se añada a la lista de ganadores.
 */

const buttonAdd = document.querySelector(".add-country-button");


buttonAdd.addEventListener("click", () =>  {
    const country = document.querySelector(".input-country");
    const countryValue = country.value;
    const listCountries = document.querySelector(".container-list");
    listCountries.innerHTML += `<li class="container-list-country">${countryValue}</li>`;

    console.log
}) 



