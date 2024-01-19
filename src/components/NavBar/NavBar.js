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
    const divMenu = document.createElement("div");
    const menuImg = document.createElement("img");

    h1.textContent = "PAOLA SANCHEZ";
    home.textContent = "Home";
    home.href = "#";
    education.href = "#";
    expirience.href = "#";
    proyects.href = "#";
    education.textContent = "Educación";
    expirience.textContent = "Experiencia";
    proyects.textContent = "Proyectos";
    menuImg.src = "https://cdn-icons-png.flaticon.com/128/5706/5706915.png"
    divMenu.className = "toggleImg"

    divMenu.addEventListener("click", (e) => {
        if (!myUl.className) {
            myUl.className = "menu"
        } else {
            myUl.className = ""
        }
    })

    liHome.append(home);
    liEducation.append(education);
    liExpirience.append(expirience);
    liProyects.append(proyects);
    divMenu.append(menuImg);
    nav.append(h1);
    myUl.append(liHome);
    myUl.append(liEducation);
    myUl.append(liExpirience);
    myUl.append(liProyects);
    nav.append(myUl);
    nav.append(divMenu);

    document.body.querySelector("#app").append(nav);
}