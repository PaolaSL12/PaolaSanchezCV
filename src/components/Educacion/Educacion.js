import { data } from "../data/data";
import './Educacion.css'

data
export const createEducation = () => {
    const sectionEducation = document.createElement("section");
    const educationTitle = document.createElement("h1");

    educationTitle.textContent = "Educación";
    sectionEducation.append(educationTitle);

    for (const element of data.education) {
    
        const articleEducation = document.createElement("article");
        const educationh2 = document.createElement("h3");
        const pEducation = document.createElement("p");
        const pLocation = document.createElement("p");

        educationh2.textContent = element.title;
        pEducation.textContent = `${element.academy} - ${element.year}`;
        pLocation.textContent = element.location;
        articleEducation.append(educationh2);
        articleEducation.append(pEducation);
        articleEducation.append(pLocation);
        sectionEducation.append(articleEducation);
    }

   
    document.querySelector("#app").append(sectionEducation);
}