import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const cityList = () => {
    let citiesHTML = "<ol>"

    for (const currentWalker of walkers) {
        citiesHTML += `<li>${currentWalker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

