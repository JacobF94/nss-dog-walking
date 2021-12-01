import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const registeredWalkers = getWalkers()
const citiesList = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            const clickedWalker = registeredWalkers.find( (walker) => parseInt(walkerId) === walker.id)
            const clickedCity = citiesList.find( (city) => city.id === clickedWalker.cityId)
            window.alert(`${clickedWalker.name} services ${clickedCity.name}`)
        }
        }
)

export const walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of registeredWalkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    return walkerHTML
}