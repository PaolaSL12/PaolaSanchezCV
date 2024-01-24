import { data } from "../data/data";
import "./Proyects.css";

data

export const createProyects = () => {
    const sectionProyect = document.createElement("section");
    const proyectTitle = document.createElement("h2");
    sectionProyect.className = "sectionProyect";
    sectionProyect.id = "proyects";

    proyectTitle.textContent = "Proyectos";
    sectionProyect.append(proyectTitle);
    const proyectContainer = document.createElement("div");

    for (const element of data.projects) {
        const proyectArticle = document.createElement("article");
        const titleProyect = document.createElement("h3");
        const divImgProyect = document.createElement("div");
        const imgProyect = document.createElement("img");
        const description = document.createElement("p");

        proyectArticle.className = "proyectArticle";
        titleProyect.textContent = element.title;
        imgProyect.src = element.img;
        description.textContent = element.description;
        divImgProyect.append(imgProyect);

        proyectArticle.addEventListener("click", (e) => {
            window.open(element.link)
        })

        proyectArticle.append(titleProyect);
        proyectArticle.append(divImgProyect);
        proyectArticle.append(description);
        proyectContainer.append(proyectArticle);
        sectionProyect.append(proyectContainer);
    }

    document.querySelector("#app").append(sectionProyect);
}