import { walkers } from "./Walkers.js"
import { cityList } from "./CityList.js"
import { assignments } from "./Assignments.js"
import { registeredPets } from "./RegisteredPets.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${cityList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${walkers()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
        ${registeredPets()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${assignments()}
</article>
`

mainContainer.innerHTML = applicationHTML

