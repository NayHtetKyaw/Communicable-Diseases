const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".option-container");

const optionsList = document.querySelector(".options");

selected.addEventListener("click", () => {
    optionsContainer.classList.add("active");
});

optionsContainer.addEventListener('click', (e) => {
    optionsContainer.classList.remove('active');

    selected.children[0].textContent = e.target.children[0].id;
});

// optionsContainer.children.forEach(after => {
//     after.addEventListener("click", () => {
//         selected.innerHTML = after.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("active");

//     });
// });