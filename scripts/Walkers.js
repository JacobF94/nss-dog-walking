import { getWalkers } from "./database.js"

const registeredWalkers = getWalkers()


export const walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of registeredWalkers) {
        walkerHTML += `<li>${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}