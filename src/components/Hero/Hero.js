
import { data } from "../data/data";
import "./hero.css";

export const cerateHero = () => {
  const heroContainer = document.createElement("div");
  const hero = document.createElement("div");
  const skills = document.createElement("div");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const divDescription = document.createElement("div");
  const pDescription = document.createElement("p");
  const skill1 = document.createElement("div");
  const skill2 = document.createElement("div");
  const skill3 = document.createElement("div");
  const skill4 = document.createElement("div");
  const skill5 = document.createElement("div");
  const skill6 = document.createElement("div");
  const skill1p = document.createElement("p");
  const skill2p = document.createElement("p");
  const skill3p = document.createElement("p");
  const skill4p = document.createElement("p");
  const skill5p = document.createElement("p");
  const skill6p = document.createElement("p");

  heroContainer.className = "heroContainer";
  hero.className = "hero";
  skills.className = "skills";
  divImg.className = "imgHero";
  divDescription.className = "description";

  img.src = data.image;
  pDescription.textContent = data.aboutMe;
  skill1.className = "yes";
  skill1.id = "0";
  skill2.className = "yes";
  skill2.id = "1";
  skill3.className = "yes";
  skill3.id = "2";
  skill4.className = "yes";
  skill4.id = "3";
  skill5.className = "yes";
  skill5.id = "4";
  skill6.className = "yes";
  skill6.id = "5";

  skill1p.textContent = data.skills[0].name;
  skill2p.textContent = data.skills[1].name;
  skill3p.textContent = data.skills[2].name;
  skill4p.textContent = data.skills[3].name;
  skill5p.textContent = data.skills[4].name;
  skill6p.textContent = data.skills[5].name;

  skills.addEventListener("mouseover", (e) => {
    if (e.target.className === "yes") {
      if (e.target.textContent === "Panaderia") {
        e.target.style.backgroundImage = `url("${data.skills[0].img}")`;
      } else if (e.target.textContent === "HTML") {
        e.target.style.backgroundImage = `url("${data.skills[1].img}")`;
      } else if (e.target.textContent === "Pasteleria") {
        e.target.style.backgroundImage = `url("${data.skills[2].img}")`;
      } else if (e.target.textContent === "CSS") {
        e.target.style.backgroundImage = `url("${data.skills[3].img}")`;
      } else if (e.target.textContent === "Atencion al publico") {
        e.target.style.backgroundImage = `url("${data.skills[4].img}")`;
      } else if (e.target.textContent === "JavaScript") {
        e.target.style.backgroundImage = `url("${data.skills[5].img}")`;
      }
      e.target.style.transition = "background-image 0.5s ease, background-color 0.5s ease";
      e.target.style.backgroundSize = "cover";
      e.target.style.backgroundColor = "#d2d4c8";
      e.target.textContent = "";
    }
  });

  skills.addEventListener("mouseout", (e) => {
    if (e.target.className === "yes") {
      e.target.textContent = data.skills[e.target.id].name;
      e.target.style.backgroundColor = "#F5F6F4";
      e.target.style.backgroundImage = "";
      e.target.style.transition = "background-image 0.5s ease, background-color 0.5s ease";
    }
  });

  skill1.append(skill1p);
  skill2.append(skill2p);
  skill3.append(skill3p);
  skill4.append(skill4p);
  skill5.append(skill5p);
  skill6.append(skill6p);

  divImg.append(img);
  hero.append(divImg);
  divDescription.append(pDescription);
  hero.append(divDescription);
  skills.append(skill1);
  skills.append(skill2);
  skills.append(skill3);
  skills.append(skill4);
  skills.append(skill5);
  skills.append(skill6);
  heroContainer.append(hero);
  heroContainer.append(skills);
  document.body.querySelector("#app").append(heroContainer);
};
