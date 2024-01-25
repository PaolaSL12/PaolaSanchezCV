import { data } from "../data/data";
import "./WorkExpirience.css";

data

export const createWorkExpirience = () => {

    const sectionDiv = document.querySelector(".sectionDiv");

    sectionDiv.innerHTML = "";

    const sectionWork = document.createElement("section");
    const workTitle = document.createElement("h2");
    sectionWork.className = "workSection";
    sectionWork.id = "work";

    workTitle.textContent = "Experiencia Laboral";
    sectionWork.append(workTitle);

    for (const element of data.workExperience) {
        const articleWork = document.createElement("article");
        const position = document.createElement("h3");
        const pCompany = document.createElement("p");
        const pDate = document.createElement("p");
        const location = document.createElement("p");
        const description = document.createElement("p");

        articleWork.className = "workArticle"
        pCompany.className = "company";
        description.className = "descriptionWork";
        location.className = "location";
        pDate.className = "date";
        position.textContent = element.position;
        pCompany.textContent = element.company;
        pDate.textContent =  `${element.startDate} - ${element.finishDate}`;
        location.textContent = element.location;
        description.textContent = element.description;

        articleWork.append(position);
        articleWork.append(pCompany);
        articleWork.append(pDate);
        articleWork.append(location);
        articleWork.append(description);
        sectionWork.append(articleWork);
    }

    sectionDiv.append(sectionWork);
}
