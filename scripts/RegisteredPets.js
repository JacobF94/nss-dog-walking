import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

export const registeredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("pet")) {
        const [,petId] = itemClicked.id.split("--")

        const clickedPet = pets.find( (pet) => parseInt(petId) === pet.id)
        const foundWalker = walkers.find( (walker) => walker.id === clickedPet.walkerId)

        window.alert(`${clickedPet.name} is being walked by ${foundWalker.name}`)
    }
})