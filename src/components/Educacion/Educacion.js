import { data } from "../data/data";
import './Educacion.css'


export const createEducation = () => {

    const sectionDiv = document.querySelector(".sectionDiv");

    sectionDiv.innerHTML = "";

    const sectionEducation = document.createElement("section");
    const educationTitle = document.createElement("h2");
    sectionEducation.id = "education";

    educationTitle.textContent = "Educación";
    sectionEducation.append(educationTitle);

    for (const element of data.education) {
    
        const articleEducation = document.createElement("article");
        const educationh3 = document.createElement("h3");
        const pEducation = document.createElement("p");
        const pLocation = document.createElement("p");

        educationh3.textContent = element.title;
        pEducation.textContent = `${element.academy} - ${element.year}`;
        pLocation.textContent = element.location;
        articleEducation.append(educationh3);
        articleEducation.append(pEducation);
        articleEducation.append(pLocation);
        sectionEducation.append(articleEducation);
    }

   
    sectionDiv.append(sectionEducation);
}