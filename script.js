const menuButton = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");


menuButton.addEventListener("click",()=>{

    if(links.style.display==="flex"){

        links.style.display="none";

    }

    else{

        links.style.display="flex";
        links.style.flexDirection="column";

    }

});



// simple scroll animation

const sections=document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{

const position=section.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

section.style.opacity="1";
section.style.transform="translateY(0)";

}

});


});



sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="1s";

});
