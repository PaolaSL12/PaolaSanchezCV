import "./NavBar.css"

export const createNavBar = () => {
    const nav = document.createElement("nav");
    const h1 = document.createElement("h1");
    const myUl = document.createElement("ul");
    const liHome = document.createElement("li");
    const liEducation = document.createElement("li");
    const liExpirience = document.createElement("li");
    const liProyects = document.createElement("li");
    const home = document.createElement("a");
    const education = document.createElement("a");
    const expirience = document.createElement("a");
    const proyects = document.createElement("a");

    h1.textContent = "PAOLA SANCHEZ";
    home.textContent = "Home";
    home.href = "#";
    education.href = "#";
    expirience.href = "#";
    proyects.href = "#";
    education.textContent = "Educación";
    expirience.textContent = "Experiencia";
    proyects.textContent = "Proyectos";

    liHome.append(home);
    liEducation.append(education);
    liExpirience.append(expirience);
    liProyects.append(proyects);
    nav.append(h1);
    myUl.append(liHome);
    myUl.append(liEducation);
    myUl.append(liExpirience);
    myUl.append(liProyects);
    nav.append(myUl)

    document.body.querySelector("#app").append(nav);
}