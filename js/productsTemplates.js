const setHTMLforProducts = (service) => {
    return `<div class="card">
                <p class="emoji">${service.image}</p>
                <h2 class="poppins26">${service.type}</h2>
                <h3 class="poppins20">${service.amount}€</h3>
                <button type="button" class="btn btn-primary add" id="${service.id}">Add To Bag</button>
            </div>`
}

const setErrorCard = ()=> {
    return `<div class="card">
                <p class="emoji">${"😭😭😭"}
                <h2 class="poppins20b">${"Oh no! You have found a wrinkle"}</h2>
                <h2 class="poppins20">${"Please try again later!"}</h2>
            </div>`
}

const setTableCheckout = (service) => {
    return  `<tr>
                <td>${service.image}</td>
                <td>${service.type}</td>
                <td>${service.amount}€</td>
                <td><button id="${service.id}" class="button-outline">X</button></td>
            </tr>`
}
