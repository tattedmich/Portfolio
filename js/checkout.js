const tbody = document.querySelector("tbody")
const spanTotal = document.querySelector("span")
const purchButton = document.querySelector("#purchButton")

getBag()
loadBag()

function loadBag(){
    tbody.innerHTML =""
    if (bag.length > 0) {
        bag.forEach(service => tbody.innerHTML +=
        setTableCheckout(service) )
        getDeleteButtons()
        spanTotal.innerText = getTotalAmount().toLocaleString()
    } else {
        spanTotal.innerText = "0.00"
        tbody.innerHTML = ""
    }
}

function getTotalAmount(){
    return bag.reduce((acc, producto) => acc + service.amount, 0)
}

function getDeleteButtons(){
    const botones = document.querySelectorAll("button.button-outline")
    if (botones) {
        for(let boton of botones) {
            boton.addEventListener("click", (e)=> {
                let indice = bag.findIndex((serv) => serv.id === parseInt(e.target.id))
                    if (indice > -1) {
                        bag.splice(indice, 1);
                        saveMyBag()
                        loadBag()
                    }
            })
        }
    }
}

purchButton.addEventListener("click", ()=> {
    Swal.fire({
        title: 'Confirm Purchase',
        icon: 'success',
        confirmButtonText: 'Accept'
        })
    bag.length = 0
    localStorage.removeItem("serviceBag")
    loadBag()
})