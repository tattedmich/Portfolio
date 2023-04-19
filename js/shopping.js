class Shop {
    constructor(shoppingBag){
        this.bag = shoppingBag
    }
    getTotalAmount(){
        if (this.bag.length > 0) {
            return this.bag.reduce((acc, item) => acc + item.amount, 0)
        }
    }
}