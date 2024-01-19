
import { data } from "../data/data";
import "./Hero.css";

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

  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("yes")) {
      var skillIndex = parseInt(e.target.id, 10);
      if (data.skills[skillIndex]) {
        var skill = data.skills[skillIndex];
        e.target.style.backgroundImage = "url('" + skill.img + "')";
        e.target.style.backgroundSize = "cover";
        e.target.style.backgroundColor = "#d2d4c8";
        e.target.textContent = "";
        e.target.style.transition = "background-image 0.5s ease, background-color 0.5s ease";
      }
    }
  });
  
  document.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("yes")) {
      var skillIndex = parseInt(e.target.id, 10);
      if (data.skills[skillIndex]) {
        var skill = data.skills[skillIndex];
        e.target.textContent = skill.name;
        e.target.style.backgroundColor = "#F5F6F4";
        e.target.style.backgroundImage = "";
        e.target.style.transition = "background-image 0.5s ease, background-color 0.5s ease";
      }
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
