const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")
const btnCheckout = document.querySelector("div.btn-checkout")
const services = []
const URL = '../js/items.json'

async function getAsyncServices() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
            services.push(...data)
            loadServices(services)
    } catch (error) {
        console.log(error)
        container.innerHTML = setErrorCard()
    }
}

function filterItems(valor){
    let resultado = URL.filter(service => service.type.toLowerCase().includes(valor.toLowerCase()))
    if (resultado.length > 0){
        loadServices(resultado)
    }
}

const loadServices = (array) => {
    array.forEach(service => {
        container.innerHTML += setHTMLforProducts (service)
    })
    getButtonsActivated()
}

const getButtonsActivated = () => {
    const purchButton = document.querySelectorAll("button.btn.btn-primary.add")
        for (boton of purchButton) {
            boton.addEventListener("click", (e) => {
                let resultado = services.find(service => service.id === parseInt(e.target.id))
                bag.push(resultado)
                saveMyBag()
                //notify()
            })
        }
}



getAsyncServices()
getBag()