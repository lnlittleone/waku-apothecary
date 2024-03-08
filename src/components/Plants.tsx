import {plants} from "~/data/plants.js";

export const Plants = () => {

    return (
        <section>
            <h2>Plants</h2>
            {plants.map((plant) => <p>{plant.scientific_name}</p>)}
        </section>
    )
}