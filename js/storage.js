const saveMyBag = () => {
    if (bag.length > 0) {
        localStorage.setItem("serviceBag", JSON.stringify(bag))
    }
}

const getBag = () => {
    const archivedBag = JSON.parse(localStorage.getItem("serviceBag"))
    return archivedBag
}

const bag = getBag() || []