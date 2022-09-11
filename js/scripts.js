let toggleSwitch = document.getElementById("toggle-theme");
let toggleContrast = document.getElementById("toggle-contrast");
let showItemsCount = 6;
let categSelected = "Todos";
let divModal = document.querySelectorAll(".modal");
let title = document.querySelector(".modal__content h2");
let description = document.querySelector("#description");
let image = document.querySelector(".modal__content img");
let languages = document.querySelector(".modal__content #languages ");
let btnUrlCode = document.querySelector("#btnUrlCode");
let btnUrlDemo = document.querySelector("#btnUrlDemo");
let dificulties = document.querySelector("#dificulties ");
let learning = document.querySelector("#learning ");
let date = document.querySelector("#date ");
let arrowLeft = document.querySelector("#modal-certificate .arrow-left");
let arrowRight = document.querySelector("#modal-certificate .arrow-right");
let messageToggle = document.querySelector(".title");

let dataProjects = [
  {
    title: "Pintelog",
    description: "Red social de fotos",
    image: "bg_pintelog.webp",
    dificulties:
      "La estructura de archivos ya que es el primer proyecto complejo, dentro de lo cabe que realizo, implementando un sistema de inicio de sesión, registro, crear publicaciones, buscar usuarios, añadir fotos a favoritos, editar usuario, eliminar publicaciones, entre otros funcionamientos. ",
    learning:
      "Práctica usando AJAX con PHP y la Programación Orientada a Objetos, aprendí a usar las librerías de <a href='https://github.com/vlucas/phpdotenv' target='_blank'>Dotenv</a> para variables de entorno y <a href='https://github.com/PHPMailer/PHPMailer' target='_blank'>PHPMailer</a>  para el envío de emails",
    urlCode: "https://github.com/MarcosRubi/pintelog",
    urlDemo: "https://pintelog-app.000webhostapp.com/",
    date: "11 de Junio del 2022 ~ 07 de Julio del 2022",
    languages:
      "HTML con PUG, CSS con SASS, JavaScript, AJAX & PHP usando Programación Orientada a Objetos",
    categ: "PHP",
  },
  {
    title: "Manage landing page",
    description:
      "Desafio de <a href='https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5' target='_blank'>Frontend Mentor</a>",
    image: "bg_manage-landing-page.webp",
    dificulties: "",
    learning: "Este es mi segundo proyecto realizado usando <a href='https://reactjs.org/' target='_blank'>React</a> y con este proyecto aprendí a usar <a href='https://www.w3schools.com/react/react_useref.asp' target='_blank'>useRef</a> y <a href='https://appatico.com/detectar-elemento-con-intersection-observer-en-react/' target='_blank'>la API de observer</a> con React.",
    urlCode: "https://github.com/MarcosRubi/Manage-landing-page",
    urlDemo: "https://marcosrubi.github.io/Manage-landing-page/",
    date: "09 de Septiembre del 2022 ~ 10 de Septiembre del 2022",
    languages: "HTML, CSS & JavaScript usando <span><strong>React</strong></span>",
    categ: "Maquetaciones",
  },
  {
    title: "Crowdfunding product page",
    description:
      "Desafio de <a href='https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR' target='_blank'>Frontend Mentor</a>",
    image: "bg_crowdfunding.webp",
    dificulties: "",
    learning: "",
    urlCode: "https://github.com/MarcosRubi/Crowdfunding-product-page",
    urlDemo: "https://marcosrubi.github.io/Crowdfunding-product-page/",
    date: "14 de Agosto del 2022 ~ 15 de Agosto del 2022",
    languages: "HTML, CSS & JavaScript",
    categ: "Maquetaciones",
  },
  {
    title: "Social media dashboard with theme switcher",
    description:
      "Desafio de <a href='https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H' target='_blank'>Frontend Mentor</a>",
    image: "bg_social-media-dashboard.webp",
    dificulties: "",
    learning: "",
    urlCode:
      "https://github.com/MarcosRubi/Social-media-dashboard-with-theme-switcher",
    urlDemo:
      "https://marcosrubi.github.io/Social-media-dashboard-with-theme-switcher/",
    date: "26 de Agosto del 2022 ~ 26 de Agosto del 2022",
    languages: "HTML, CSS & JavaScript",
    categ: "Maquetaciones",
  },
  {
    title: "Time tracking dashboard",
    description:
      "Desafio de <a href='https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw' target='_blank'>Frontend Mentor</a>",
    image: "bg_time-tracking-dashboard.webp",
    dificulties: "",
    learning: "Consumir datos de un archivo .json",
    urlCode: "https://github.com/MarcosRubi/Time-tracking-dashboard",
    urlDemo: "https://marcosrubi.github.io/Time-tracking-dashboard/",
    date: "25 de Agosto del 2022 ~ 25 de Agosto del 2022",
    languages: "HTML, CSS & JavaScript",
    categ: "Maquetaciones",
  },
  {
    title: "Lista de Tareas",
    description: "Plantilla para agendar tareas",
    dificulties:
      "Implementar AJAX con PHP. Primera vez que lo realizaba por mi cuenta, anteriormente solo en proyectos de la universidad lo había realizado.",
    learning:
      "Realizar un CRUD con PHP usando AJAX para realizar las acciones sin recargar la página.",
    urlCode: "https://github.com/MarcosRubi/ListaTareas",
    urlDemo: "https://listar-tareas.herokuapp.com/#",
    date: "03 de Enero del 2021 ~ 02 de Febrero del 2021",
    image: "bg_listartareas.webp",
    languages: "HTML, CSS, JavaScript, PHP, AJAX & MySQL",
    categ: "PHP",
  },
  {
    title: "Fylo dark theme landing page",
    description:
      "Desafio de <a href='https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd' target='_blank'>Frontend Mentor</a>",
    image: "bg_fylo.webp",
    dificulties: "",
    learning: "",
    urlCode: "https://github.com/MarcosRubi/Fylo-dark-theme-landing-page",
    urlDemo: "https://marcosrubi.github.io/Fylo-dark-theme-landing-page/",
    date: "09 de Agosto del 2022 ~ 09 de Agosto del 2022",
    languages: "HTML, CSS & JavaScript",
    categ: "Maquetaciones",
  },
  {
    title: "Inveto",
    description: "Plantilla para una web de cursos financieros",
    dificulties:
      "Que el pie de página se adapte a cualquier tamaño de pantalla.",
    learning:
      "Uso de la propiedad <span>order</span> de flexbox para obtener un mejor diseño en los diferentes tipos de pantallas.",
    urlCode: "https://github.com/MarcosRubi/inveto",
    urlDemo: "https://inveto.vercel.app/",
    date: "23 de Diciembre del 2020 ~ 31 de Diciembre del 2020",
    image: "bg_inveto.webp",
    languages: "HTML, CSS & JavaScript",
    categ: "Maquetaciones",
  },
  {
    title: "Charity",
    description: "Plantilla para una web de donativos",
    image: "bg_charity.webp",
    dificulties:
      "En la sección de <span>preguntas frecuentes</span> ya que era la primera vez que realizaba un acordeón, por lo que observe en diferentes plantillas su lógica e implemente el que consideraba mejor. ",
    learning: "Crear acordeón con HTML, CSS y JavaScript.",
    urlCode: "https://github.com/MarcosRubi/charity",
    urlDemo: "https://charity.vercel.app/",
    date: "25 de Noviembre del 2020 ~ 31 de Diciembre del 2020",
    languages: "HTML, CSS & JavaScript",
    categ: "Maquetaciones",
  },

  {
    title: "StudyInk",
    description: "Plantilla para una web de educación",
    image: "bg_studyink.webp",
    dificulties: "Agregar efecto al menu cuando el usuario haga scroll.",
    learning:
      "Menu sticky que reduce su altura cuando el usuario desplaza hacia abajo.",
    urlCode: "https://github.com/MarcosRubi/studyInk",
    urlDemo: "https://study-ink.vercel.app/",
    date: "07 de Noviembre del 2020 ~ 31 de Diciembre del 2020",
    languages: "HTML, CSS con Bootstrap & JavaScript",
    categ: "Bootstrap",
  },
  {
    title: "Interactive card details form",
    description:
      "Desafio de <a href='https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw' target='_blank'>Frontend Mentor</a> ",
    dificulties:
      "Agregar espacios en blanco cada 4 dígitos en el número de tarjeta.",
    learning:
      "Usar la librería <a href='https://nosir.github.io/cleave.js/' target='_blank'>Cleave</a> para el formateo de los inputs.",
    urlCode: "https://github.com/MarcosRubi/Interactive-card-details-form",
    urlDemo: "https://marcosrubi.github.io/Interactive-card-details-form/",
    date: "20 de Agosto del 2022 ~ 20 de Agosto del 2022",
    image: "bg_card-details.webp",
    languages: "HTML & CSS con SCSS",
    categ: "Maquetaciones",
  },
  {
    title: "TechGear",
    description: "Plantilla para una web de productos gaming",
    dificulties:
      "Que la página se adapte a cualquier tamaño de pantalla ya que no comprendía muy bien la forma interna que trabaja Bootstrap con el responsive. ",
    learning:
      "Maquetar usando el framework de Bootstrap, esta fue mi primera página usando este framework.",
    urlCode: "https://github.com/MarcosRubi/techGear",
    urlDemo: "https://tech-gear.vercel.app/",
    date: "15 de Noviembre del 2020 ~ 31 de Diciembre del 2020",
    image: "bg_techgear.webp",
    languages: "HTML, CSS con Bootstrap & JavaScript",
    categ: "Bootstrap",
  },
  {
    title: "Portafolio",
    description: "Primer diseño de mi portafolio personal",
    dificulties:
      "Funcionamiento del filtro de los proyectos por categoría y el slider de los certificados online.",
    learning:
      "Usar la libreria <a href='https://muuri.dev/' target='_blank'>Muuri</a> para el filtrado de proyectos por categoria.",
    urlCode: "https://github.com/MarcosRubi/marcosrubi",
    urlDemo: "https://marcosrubi.vercel.app/",
    date: "02 de Enero del 2021 ~ 14 de Marzo del 2021",
    image: "bg_portafolio.webp",
    languages: "HTML, CSS & JavaScript",
    categ: "Maquetaciones",
  },
  {
    title: "NFT preview card component",
    description:
      "Desafio de <a href='https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U' target='_blank'>Frontend Mentor</a>",
    image: "bg_nft.webp",
    dificulties: "",
    learning: "",
    urlCode: "https://github.com/MarcosRubi/NFT-preview-card-component",
    urlDemo: "https://marcosrubi.github.io/NFT-preview-card-component/",
    date: "11 de Agosto del 2022 ~ 11 de Agosto del 2022",
    languages: "HTML & CSS con SCSS",
    categ: "Maquetaciones",
  },
];
let dataCertificates = [
  "html",
  "pug",
  "crear-pagina-web-desde-cero",
  "master-css",
  "master-js",
];

function themeDark(isChangeTheme = false) {
  if (isChangeTheme) {
    localStorage.getItem("isDark") == "true"
      ? localStorage.setItem("isDark", false)
      : localStorage.setItem("isDark", true);
    changeTheme(localStorage.getItem("theme"));
    iconMenuHamburguer();
  } else {
    if (localStorage.getItem("isDark") == "true") {
      toggleSwitch.checked = true;
      messageToggle.innerHTML = "Activar el modo día";
    }
    iconMenuHamburguer();
  }
}
function themeContrast(isChangeContrast = false) {
  if (isChangeContrast == true) {
    if (localStorage.getItem("isActiveContrast") == "true") {
      localStorage.setItem("isActiveContrast", false);
      let templateStyle = `
        <style>h1,h2,h4,p,.btn,a,.progress__item-progressing, .experiencia__date{filter:contrast(1);} .bg-gradient{filter:contrast(1);}tyle>
            `;
      document.getElementById("script").innerHTML = templateStyle;
    } else {
      localStorage.setItem("isActiveContrast", true);
      let templateStyle = `
        <style>h1,h2,h4,p,.btn,a,.progress__item-progressing, .experiencia__date{filter:contrast(1.75);} .bg-gradient{filter:contrast(1.5);</style>   
            `;
      document.getElementById("script").innerHTML = templateStyle;
    }
  } else {
    if (localStorage.getItem("isActiveContrast") == "true") {
      toggleContrast.checked = true;
      let templateStyle = `
        <style>h1,h2,h4,p,.btn,a,.progress__item-progressing, .experiencia__date{filter:contrast(1.75);} .bg-gradient{filter:contrast(1.5);</style>
            `;
      document.getElementById("script").innerHTML = templateStyle;
    }
  }
}
function changeTheme(theme) {
  localStorage.getItem("isDark") == "true"
    ? (themeSecondary = "dark")
    : (themeSecondary = "light");
  localStorage.setItem("theme", theme);

  document.documentElement.setAttribute(
    "data-theme",
    theme + "-" + themeSecondary
  );
}
function iconMenuHamburguer() {
  localStorage.getItem("isDark") == "true"
    ? (document.querySelector(".menu__icon-hamburguer").style.filter =
        "invert(0)")
    : (document.querySelector(".menu__icon-hamburguer").style.filter =
        "invert(1)");
}
function showMenu() {
  let menuIcon = document.querySelector(".menu__icon-hamburguer");
  let nav = document.querySelector(".menu__nav");

  menuIcon.classList.toggle("active");
  nav.classList.toggle("active");
}
function percentAnimated(i) {
  let percent = document.querySelector(
    `#progress_${i} .progress__item-percent`
  );
  let progressing = document.querySelector(
    `#progress_${i} .progress__item-progressing`
  );

  requestAnimationFrame(startProgress);

  let progress = 0;
  let percentFinish = parseInt(
    document.querySelector(`#progress_${i}`).getAttribute("data-percent")
  );

  function startProgress() {
    progress += 1;
    if (progress <= percentFinish) {
      percent.innerHTML = parseInt(progress) + "%";
      progressing.style.width = progress + "%";
    }
    requestAnimationFrame(startProgress);
  }
}
function startAnimatedPercent() {
  for (let i = 1; i <= document.querySelectorAll(".progress").length; i++) {
    percentAnimated(i);
  }
}
function openModalProject(id) {
  let modalProject = document.getElementById("modal-project");
  modalProject.scrollTop = 0;

  let data = dataProjects.filter((project) => project.title == id);

  title.innerHTML = data[0].title;
  image.src = `images/projects/${data[0].image}`;
  languages.innerHTML = data[0].languages;
  btnUrlCode.setAttribute("href", data[0].urlCode);
  btnUrlDemo.setAttribute("href", data[0].urlDemo);
  dificulties.innerHTML = data[0].dificulties;
  learning.innerHTML = data[0].learning;
  date.innerHTML = data[0].date;

  modalProject.classList.toggle("show");
  document.querySelector("#effect-blur").classList.toggle("blur");

  data[0].dificulties == ""
    ? (document.getElementById("modal__content--dificulties").style.display =
        "none")
    : (document.getElementById("modal__content--dificulties").style.display =
        "initial");

  data[0].learning == ""
    ? (document.getElementById("modal__content--learning").style.display =
        "none")
    : (document.getElementById("modal__content--learning").style.display =
        "initial");
}
function closeModal() {
  divModal.forEach((element) => element.classList.remove("show"));
  document.querySelector("#effect-blur").classList.remove("blur");
}
function listAllProjects(data = dataProjects, count = 0) {
  let divProjects = document.getElementById("divProjects");
  let projectItems = "";

  showItemsCount += count;
  showItemsCount <= 6
    ? (btnShowLess.style.display = "none")
    : (btnShowLess.style.display = "inline");

  for (let i = 0; i < showItemsCount; i++) {
    if (data.length == i) {
      btnShowMore.style.display = "none";
      break;
    } else {
      btnShowMore.style.display = "inline";
    }
    let templateProjectItem = `
            <div class="proyectos__item" data-categorie=${data[i].categ}>
                <div class="p-relative effect-hover">
                    <img src="images/projects/${data[i].image}" alt="Foto diseño de ${data[i].title}" loading="lazy">
                    <div class="p-absolute fill" onclick="javascript:openModalProject('${data[i].title}')">
                        <div class="bg-gradient p-absolute"></div>
                        <button class="btn btn-primary p-absolute"><span><i class="fa fa-search-plus"></i></span></button>
                    </div>
                </div>
                <h3 class="text-center">${data[i].title}</h3>
                <p class="text-center">${data[i].description}</p>
            </div>
            `;
    projectItems += templateProjectItem;
  }
  divProjects.innerHTML = projectItems;
}
function filterProjects(categ) {
  return dataProjects.filter((project) => project.categ == categ);
}
function filterProjectsByCateg(categ) {
  showItemsCount = 6;
  let filter = filterProjects(categ);
  categ == "Todos" ? listAllProjects() : listAllProjects(filter);

  categSelected = categ;
}
function listAllCertificates() {
  let divCertificates = document.getElementById("divCertificates");
  let certificates = "";
  dataCertificates.forEach((element, index) => {
    let templateCertificateItem = `
        <div class="certificados__content-img" onclick="javascript:openModalCertificate(${index})">
            <img src="images/certificates/certificado-${element}.webp" alt="" loading="lazy">
        </div>
        `;
    certificates += templateCertificateItem;
  });
  divCertificates.innerHTML += certificates;
}
function openModalCertificate(id) {
  let divModal = document.getElementById("modal-certificate");
  divModal.scrollTop = 0;
  let data = dataCertificates[id];
  let srcImg = document.querySelector("#modal-certificate img");

  srcImg.src = `images/certificates/certificado-${data}.webp`;
  arrowLeft.setAttribute("data-id", id - 1);
  arrowRight.setAttribute("data-id", Number(id) + 1);

  divModal.classList.add("show");
  document.querySelector("#effect-blur").classList.add("blur");
}
function changeImgModal(direction) {
  let Arrlenght = dataCertificates.length;
  if (direction == "left") {
    let id = arrowLeft.getAttribute("data-id");
    id < 0 ? openModalCertificate(Arrlenght - 1) : openModalCertificate(id);
  } else {
    let id = arrowRight.getAttribute("data-id");
    id == Arrlenght ? openModalCertificate(0) : openModalCertificate(id);
  }
}
function getAbsolutePath() {
  var loc = window.location;
  var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf("/") + 1);
  return loc.href.substring(
    0,
    loc.href.length -
      ((loc.pathname + loc.search + loc.hash).length - pathName.length)
  );
}
function asyncToLoad() {
  localStorage.getItem("isDark") == null
    ? localStorage.setItem("isDark", false)
    : "";
  localStorage.getItem("theme") == null
    ? localStorage.setItem("theme", "default")
    : "";

  localStorage.getItem("isActiveContrast") == null
    ? localStorage.setItem("isActiveContrast", false)
    : "";

  //PREFENCIAS DEL SISTEMA OPERATIVO - SI ES DARK SE ACTIVA AUTOMATICAMENTE EL MODO OSCURO
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  userPrefersDark ? localStorage.setItem("isDark", true) : "";

  //OCULTAR MENSAJE DE SELECCIONAR MODO DÍA/NOCHE
  setTimeout(() => {
    messageToggle.classList.add("hide");
  }, 3000);
}
asyncToLoad();
themeDark();
themeContrast();

window.addEventListener("load", () => {
  let btnShowMore = document.getElementById("btnShowMore");
  let btnShowLess = document.getElementById("btnShowLess");
  let menuProjectsItems = document.querySelectorAll("nav li .btn");

  //TOGGLE FOR DARK MODE
  toggleSwitch.addEventListener("change", () => {
    themeDark(true);
  });

  //TOGGLE FOR CONTRAST
  toggleContrast.addEventListener("change", () => {
    themeContrast(true);
  });

  //SHOW PRESET COLORS
  document.getElementById("btn-colors").addEventListener("click", () => {
    document.querySelector(".menu__preset-colors").classList.toggle("show");
  });

  //SHOW MORE OR LESS PROJECTS
  btnShowMore.addEventListener("click", () => {
    if (categSelected == "Todos") {
      listAllProjects(dataProjects, 3);
    } else {
      let data = filterProjects(categSelected);
      listAllProjects(data, 3);
    }
  });
  btnShowLess.addEventListener("click", () => {
    if (categSelected == "Todos") {
      listAllProjects(dataProjects, -3);
    } else {
      let data = filterProjects(categSelected);
      listAllProjects(data, -3);
    }
  });

  //ADD CLASS ACTIVE TO BUTTON CATEGORIE SELECTED
  menuProjectsItems.forEach((projectItem) => {
    projectItem.addEventListener("click", (e) => {
      document.querySelector("nav li .btn.active").classList.remove("active");
      e.target.classList.add("active");
    });
  });

  arrowLeft.addEventListener("click", () => changeImgModal("left"));
  arrowRight.addEventListener("click", () => changeImgModal("right"));

  document.getElementById("top").addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  changeTheme(localStorage.getItem("theme"));
  listAllProjects();
  listAllCertificates();
  startAnimatedPercent();

  //ANIMATIONS SHOW ELEMENT IN VIEWPORT
  const aboutMeDescription = document.querySelector(".sobre-mi__description");
  const aboutMeSkills = document.querySelector(".sobre-mi__skills");
  const menuProjects = document.querySelector(".menu-projects");
  const divProjects = document.getElementById("divProjects");
  const experience = document.getElementById("experiencia");
  const certificates = document.getElementById("certificados");
  const contactInformation = document.querySelector(".contactar__information");
  const contactSocial = document.querySelector(".contactar__social");
  const contactForm = document.querySelector(".contactar__form");

  const startAnimation = (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };
  const observer = new IntersectionObserver(startAnimation, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  observer.observe(aboutMeDescription);
  observer.observe(aboutMeSkills);
  observer.observe(menuProjects);
  observer.observe(divProjects);
  observer.observe(experience);
  observer.observe(certificates);
  observer.observe(contactInformation);
  observer.observe(contactSocial);
  observer.observe(contactForm);

  //UPDATE AUTOMATICALLY ACTIVE IN MENU
  const divHero = document.querySelector(".hero");
  const divSobreMi = document.getElementById("sobre-mi");
  const divProyectos = document.getElementById("proyectos");
  const divExperience = document.getElementById("experiencia");
  const divCertificados = document.getElementById("certificados");
  const divContactar = document.getElementById("contactar");

  const updateMenu = (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let itemActive = entry.target.classList[0];
        if (itemActive != "hero") {
          itemActive == "sobre-mi" ? startAnimatedPercent() : "";
          document.querySelector("nav li a.active")
            ? document
                .querySelector("nav li a.active")
                .classList.remove("active")
            : "";
          document.querySelector("#nav_" + itemActive).classList.add("active");
          window.history.pushState(
            null,
            null,
            `${getAbsolutePath()}#${itemActive}`
          );
        } else {
          document.querySelector("nav li a.active")
            ? document
                .querySelector("nav li a.active")
                .classList.remove("active")
            : "";
          window.history.pushState(null, null, getAbsolutePath());
        }
      }
    });
  };
  const observerFromMenu = new IntersectionObserver(updateMenu, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  observerFromMenu.observe(divHero);
  observerFromMenu.observe(divSobreMi);
  observerFromMenu.observe(divProyectos);
  observerFromMenu.observe(divExperience);
  observerFromMenu.observe(divCertificados);
  observerFromMenu.observe(divContactar);
});
