const buttons = document.querySelectorAll(".ratingButtons button");
const submit = document.getElementById("submitBtn");
const error = document.getElementById("errorMsg");
const selectionMsg = document.getElementById("selectionMsg");
const box1 = document.getElementById("ratingState");
const box2 = document.getElementById("selectionResult");
let selected = "";

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSelectedClasses()
        selected = e.target.textContent
        e.target.classList.add("selected")
    })
})

submit.addEventListener("click", (e) => {
    if (selected === "") {
        addButtonErrors()
        setTimeout(() => {
            removeButtonErrors()
        }, 3000);
        return
    }

    selectionMsg.textContent = `You selected ${selected} out of 5`
    box1.classList.add("display-none");
    box2.classList.remove("display-none");
})

function addButtonErrors()
{
    error.classList.remove("display-none")
    buttons.forEach(btn => {
        btn.classList.add("ratingError")
    })
}

function removeButtonErrors()
{
    error.classList.add("display-none")
    buttons.forEach(btn => {
        btn.classList.remove("ratingError")
    })
}

function removeSelectedClasses()
{
    buttons.forEach(btn => {
        btn.classList.remove("selected")
    })
}
