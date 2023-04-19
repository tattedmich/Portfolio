const bag = []

const items = [{image: '💻', id: 1, type: 'Full Web Design', amount: 1000},
                {image: '🖌', id: 2, type: 'Rebranding', amount: 500},
                {image: '📸', id: 3, type: 'Photography', amount: 200},
                {image: '💰', id: 4, type: 'Specialized Budget', amount: 800}]

function findItem(id) {
    let result = items.find((item) => item.id === parseInt (id))
        return result 
}

function endPurchase() {
    if (bag.length === 0) {
        console.warn("Oh no! 😢 Your bag is empty!")
        return
    }

    const shopping = new Shop(bag)
    alert("💰 The total amount is: "+ shopping.getTotalAmount())

    let discount = 0.50

    let respond = confirm("Do your want to confirm the payment?")
        if (respond === true){
            alert('Your purchase is confirmed! This is the amount: ' + (shopping.getTotalAmount() * discount) + "\n Thanks! 😊")
            bag.length = 0
        }
}

function seeMyBag(){
    console.table(bag)
}

function letsGoShopping(){
    let id = prompt ("Please let us know the product number you are interested in:")
    if (!parseInt(id)){
        alert ("☹ We currently don't have that product on our list.")
        let respond = confirm("Do you want to try again?")
            if (respond === true){
                letsGoShopping()
            }
            return
    }

    let itemAdded = findItem(parseInt(id))
        if(itemAdded === undefined){
            alert("Oh no! 😢 We don't have that item on our list.")
            return
        }

        alert(itemAdded.image + ' ' + itemAdded.type + ' - has been added to the bag!')
        bag.push(itemAdded)

        let respond = confirm("Do you want to purchase another item?")
            if (respond === true){
                letsGoShopping()
            } else {
                endPurchase ()
            }
}