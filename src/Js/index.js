const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character')



buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        //passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        const buttonSelected = document.querySelector(".button.selected");
        buttonSelected.classList.remove("selected");


        button.classList.add("selected");


        const characterSelected = document.querySelector(".character.selected");

        characterSelected.classList.remove("selected");

        characters[index].classList.add("selected");
    });
});



