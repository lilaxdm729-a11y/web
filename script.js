// ==========================
// MENÚ ACTIVO AL HACER SCROLL
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("activo");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("activo");
        }

    });

});


// ==========================
// ANIMACIÓN DE ENTRADA
// ==========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

});

document.querySelectorAll(".card,.historia,.galeria").forEach((el)=>{

    observer.observe(el);

});


// ==========================
// BOTÓN VOLVER ARRIBA
// ==========================

const boton = document.createElement("button");

boton.innerHTML="⬆";

boton.id="subir";

document.body.appendChild(boton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==========================
// EFECTO PARALLAX
// ==========================

window.addEventListener("scroll",()=>{

    const spider=document.querySelector(".hero-image img");

    spider.style.transform=`translateY(${window.scrollY*0.15}px)`;

});


// ==========================
// EFECTO HOVER EN TARJETAS
// ==========================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.transform=`rotateX(${-(y-150)/20}deg)
rotateY(${(x-150)/20}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0) scale(1)";

});

});


// ==========================
// MENSAJE DE BIENVENIDA
// ==========================

setTimeout(()=>{

alert("🇦🇷 ¡Bienvenido a la experiencia Spider-Man x Argentina!");

},1000);