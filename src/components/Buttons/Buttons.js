import { createEducation } from "../Educacion/Educacion";
import { createWorkExpirience } from "../WorkExpirience/WorkExpirience";
import "./Buttons.css"

export const buttons = () => {
    const buttonDiv = document.createElement("div");
    const buttonExpirience = document.createElement("button");
    const buttonEducation = document.createElement("button");

    buttonDiv.className = "buttons";

    buttonEducation.addEventListener("click", () => {
        createEducation();
    })

    buttonExpirience.addEventListener("click", () => {
        createWorkExpirience();
    })

    buttonDiv.append(buttonEducation);
    buttonDiv.append(buttonExpirience);
    buttonEducation.textContent = "Mostrar Educación";
    buttonExpirience.textContent = "Mostrar Experiencía";
    document.querySelector("#app").append(buttonDiv)
}