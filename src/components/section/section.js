import "./section.css"

export const createSectionDiv = () => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "sectionDiv";

    document.querySelector("#app").append(sectionDiv);
}