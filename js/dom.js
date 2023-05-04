const container = document.querySelector("div#container")
const inputSearch = document.querySelector("input#inputSearch")
const btnCheckout = document.querySelector("div.btn-checkout")
const services = []
const URL = './js/items.json'

async function getAsyncServices(){
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
                notify()
            })
        }
}

function notify (){
    Toastify({
        text: "Your product has been added to your shopping bag",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right", 
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #212529, #666666)",
            },
        }).showToast();
}

getAsyncServices()
getBag()