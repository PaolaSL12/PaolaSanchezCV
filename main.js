import { buttons } from "./src/components/Buttons/Buttons.js";
import { createHero } from "./src/components/Hero/Hero.js";
import { createNavBar } from "./src/components/NavBar/NavBar.js";
import { createProyects } from "./src/components/Proyects/Proyects.js";
import { createWorkExpirience } from "./src/components/WorkExpirience/WorkExpirience.js";
import { createSectionDiv } from "./src/components/section/section.js";

import './style.css'


createNavBar();
createHero();
buttons();
createWorkExpirience();
createSectionDiv();
createProyects();