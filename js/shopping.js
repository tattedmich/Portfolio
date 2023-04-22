const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")
const bag = []

function filterItems(valor){
    let resultado = items.filter(service => service.type.toLowerCase().includes(valor.toLowerCase()))
    if (resultado.length > 0){
        addToBag(resultado)
    }
}

function setItemsOnCards(service){

return `<div class="card">
            <p class="emoji">${service.image}
            <h2 class="poppins30">${service.type}</h2>
            <h3 class="poppins20">${service.amount}€</h3>
            <button type="button" class="btn btn-primary" id="${service.id}">Add To Bag</button>
        </div>`
}

function addToBag(array){
    container.innerHTML = ""
    array.forEach(service => {
        container.innerHTML += setItemsOnCards(service)
    });
    buttonsActivated()
}

inputSearch.addEventListener("search", (e)=>{
    filterItems(e.target.value)
})

function buttonsActivated(){
    const botones = document.querySelectorAll("button.btn.btn-primary")
        for (const boton of botones) {
            boton.addEventListener("click", () => {
                let resultado = items.find(service => service.id === parseInt(boton.id))
                bag.push(resultado)
                saveBag()
            })
        }
}

function saveBag(){
    localStorage.setItem("bagOfServices", JSON.stringify(bag))
}

function getMyBag(){
    return JSON.parse(localStorage.getItem("bagOfServices")) || []
}

addToBag(items)
getMyBag()