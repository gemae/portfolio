

const slideContainer = document.querySelector("slide-cont");
const slide =  document.querySelector(".slide-wrap");
let slides = document.querySelectorAll(" .slide");
const slideBtn = document.querySelectorAll(".slideBtn-wrapper .btn");

let counter = 0;
let interval = 2000;
const firstClone = slides[0].cloneNode(true);
firstClone.id = "firstClone";

slide.append(firstClone);
let slideColor = "#b38e18";
const slideWidth = slides[counter].clientWidth;
slideBtn[counter].style.backgroundColor = slideColor;
const btnActive = () =>{
    slideBtn.forEach(e =>{
        e.style.backgroundColor = "rgb(238, 238, 238)";
    });
    if(counter <= slideBtn.length - 1){
        slideBtn[counter].style.backgroundColor = slideColor;
    }
    else{
        slideBtn[0].style.backgroundColor = slideColor;
    }
    
}
const startSlide = () => {
    setInterval(() => {
        counter++;
        btnActive();
        slide.style.transform = `translateX(${-slideWidth * counter}px)`;
        slide.style.transition = "600ms ease-out";
    }, interval);
}
slide.addEventListener("transitionend", ()=>{
    slides = document.querySelectorAll(" .slide");
    if(slides[counter].id === firstClone.id){
        slide.style.transition = "none";
        counter = 0;
        btnActive();
        slide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
});
startSlide();


works(0);

function works(li){
    let workName = ['works-tile','web','app'];
    let openWork = document.querySelectorAll(`.${workName[li]}`);
    var closeWork;
    if(li == 0 ){
        $("#wrap > div").show("slow");
    }else{
        if(li === 1){
            closeWork = document.querySelectorAll(`.${workName[2]}`);
        }
        else{
            closeWork = document.querySelectorAll(`.${workName[1]}`);
        }
    openWork.forEach(el =>{
       $(`#${el.id}`).show("slow");

    });
    closeWork.forEach(c=>{
        $(`#${c.id}`).hide("slow");
      });
   }
}

//set active link works
const listWork = document.querySelectorAll(".portfolio-list li");
let current = document.getElementsByClassName("active");
for(var i = 0; i < listWork.length; i++){
    listWork[i].addEventListener("click", function(){
        currentLink(current,this);
    });
}

function currentLink(current,li){
    current[0].className = current[0].className.replace("active","");
    li.className += "active";
}

//set active link main-navigation
const listNav = document.querySelectorAll(".main-list a");
var cur = document.getElementsByClassName("active-main-nav");


listNav.forEach(e=>{
    e.addEventListener("click", function(){
       
        currentNav(cur,this);
    });
});
   


function currentNav(cur,li){
    cur[0].className = cur[0].className.replace("active-main-nav","");
    li.className += "active-main-nav";
}


/*//naigation set link based on scrolled height
const body = document.querySelector("body");
const home = document.querySelector(".home");
const aboutMe = document.querySelector(".about-me");
const work = document.querySelector(".portfolio");
const contact = document.querySelector(".email");


window.onscroll = function() {
let bodyH  = body.clientHeight;
let homeH = home.clientHeight;
let aboutMeH = aboutMe.clientHeight;
let emailH = contact.clientHeight
//let forLast = bodyH-window.innerHeight;
let scrollHeight = window.pageYOffset;
headH = home.clientHeight;

    if(scrollHeight >= homeH-60 & scrollHeight < homeH+aboutMeH){
        currentNav(cur,listNav[1]);
    }else if(scrollHeight >= aboutMeH+homeH & scrollHeight < aboutMeH+homeH+emailH){
        currentNav(cur,listNav[2]);
    }
    else if(scrollHeight >= aboutMeH+homeH+emailH){
        currentNav(cur,listNav[3]);
    }
    else{
        currentNav(cur,listNav[0]);
    }
 
};
//Navigation intersection
var headH = home.clientHeight;
const body = document.querySelector("body");
const nav = document.querySelector(".main-nav");
const sectionTwo = document.querySelector(".about-me");
const sectionTwoOptions = {

    rootMargin: `0px 0px -${headH}px 0px`
};
const sectionTwoObserver = new IntersectionObserver((entries,sectionTwoObserver) => {
entries.forEach(entry =>{
    if(entry.isIntersecting){
        nav.classList.add('newScrolled');
       
    }else{
        nav.classList.remove('newScrolled');
       
    }
})
},sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);*/

//navigation set link based on scrolled height
const body = document.querySelector("body");
const home = document.querySelector(".home");
const aboutMe = document.querySelector(".about-me");
const work = document.querySelector(".portfolio");
const contact = document.querySelector(".email");
const nav = document.querySelector(".main-nav");

window.onscroll = function() {
let workH  = work.clientHeight;
let homeH = home.clientHeight;
let aboutMeH = aboutMe.clientHeight;
let emailH = contact.clientHeight
//let forLast = bodyH-window.innerHeight;
let scrollHeight = window.pageYOffset;
headH = home.clientHeight;

    if(scrollHeight >= homeH-150 & scrollHeight < homeH+aboutMeH-150){
        currentNav(cur,listNav[1]);
        nav.classList.add("newScrolled");
    }else if(scrollHeight >= aboutMeH+homeH-150 & scrollHeight < aboutMeH+homeH+workH-150){
        currentNav(cur,listNav[2]);
        nav.classList.remove("newScrolled"); 
    }
    else if(scrollHeight >= workH+aboutMeH+homeH-150){
        currentNav(cur,listNav[3]);
        nav.classList.add("newScrolled");
    }
    else{
        currentNav(cur,listNav[0]);
        nav.classList.remove("newScrolled"); 
    }
 
};
//observer for main containers
/*
const containers = document.querySelectorAll(".container");
var windowH = window.innerHeight;
const containersOptions = {
    rootMargin: `0px 0px -${windowH-100}px 0px`

};
const containerObserver = new IntersectionObserver((entries,cotainerObserver) => {
    
    entries.forEach(entry =>{
       if(!entry.isIntersecting){
        nav.classList.remove("newScrolled"); 
       }else{
        nav.classList.add("newScrolled");
       }
    });
    
},containersOptions);

containers.forEach(container => {
    containerObserver.observe(container);
});
*/
//home observer hiding navaigation
const sectionOne = document.querySelector(".home");
const sectionOneOptions = {

    threshold: 0.75
};
const sectionOneObserver = new IntersectionObserver((entries,sectionOneObserver) => {
entries.forEach(entry =>{
    if(entry.isIntersecting){
        nav.style.display = "none";
    }
    else{
        if(body.clientWidth <= 654){
            nav.style.display = "block";
        }
       else{
        nav.style.display = "flex";
       } 
    }
})
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//Observer for All

const sliders = document.querySelectorAll(".sliders");
const fades = document.querySelectorAll(".fade");
const sectionsOptions = {

    rootMargin: "0px 0px -250px 0px"
    
};
const sectionsObserver = new IntersectionObserver((entries,sectionsObserver) => {
entries.forEach(entry =>{
    if(!entry.isIntersecting){
        return
    }else{
       entry.target.classList.add("appear");
       sectionsObserver.unobserve(entry.target);
       console.log("appear");
    }
    });
    
fades.forEach(fade => {
    sectionsObserver.observe(fade);
})


//Skills flex grow
const skills =  document.querySelectorAll(".skills-wrap span");
const skillwrap = document.querySelector(".skills-wrap");
function skillsFlex(index,skill){
        let flex = document.getElementsByClassName("flexgrow");
        flex[0].className = flex[0].className.replace("flexgrow","");
        skills[index].classList.add("flexgrow");
        skillwrap.style.setProperty('--skills',skill);
}
//Works Effect
/*const works = document.querySelectorAll(".tile img");
const body = document.querySelector("body");

works.forEach( e =>{
    e.addEventListener('click', () =>{
        const modal = document.createElement("div");
        modal.classList.add("modal");
        body.appendChild(modal);
        e.classList.uadd("modal-img");
        //modal.appendChild(e);
        //e.style.transform = "translateX(50%)";
        e.style.transition = "1000ms";
        
       // this.style.transform = "";
    });
});*/
/*
const works = document.querySelectorAll(".tile");
const body = document.querySelector("body");

works.forEach( e =>{
    e.addEventListener('click', () =>{
        let bodyWidth = body.clientWidth;
        let bodyHeight = window.innerHeight;
        let scrollHeight = window.pageYOffset;
        e.classList.remove("tile");
        e.classList.add("modal");
         e.style.top = scrollHeight + "px";
        e.style.left = "0";
        e.style.width = bodyWidth + "px"
         e.style.height = bodyHeight + "px"
       body.style.overflow = "hidden";
      //  let eChild = e.childNodes;
        
       e.style.transition = "1000ms";
    
    });
});*/
/*const textAnimation = document.querySelector(".text-animation");
//textAnimation.innerHTML = "Web Developer";

const textArr = ["Web Developer","Programmer"];
for(var i = 0; i < textArr.length; i++){    
    for(var j = 0; j < textArr[i].length; j++){
        textAnimation.style.transition = "200ms";
        setTimeout(textAnimation.innerHTML += textArr[i].substr(j,1), 500);
    }
}
var counter = 0;
animFunc(0);
function animFunc(num){
    for(var j = 0; j < textArr[num].length; j++){
       let letterCont = document.createElement("span");
       if(textArr[num].substr(j,1) == " "){
           letterCont.style.width = "1ch";
       }
       else{
        letterCont.innerHTML = textArr[num].substr(j,1);
       }
       textAnimation.appendChild(letterCont);
       letterCont.style.setProperty("--y",`${j}`);
    }
    setTimeout(ani,100);
}
var set = document.querySelectorAll(".text-animation span");
function ani(){
    for(var z = 0; z < set.length; z++){
        set[z].classList.add("anim");
        setTimeout(hideAni,4000);
    }
}

function hideAni(){
  set.forEach(e => {
      e.style.visibility = "hidden";
  });

  if(counter == 0){
    animFunc(1);
  }
 else{
    animFunc(0);
 }
}
*/
/*set.style.animation = "animation 1000ms ease-in";
for(var j = 1; j <= textArr[0].length; j++){
    textAnimation.children.style.animationDelay = `${.1 * j}s`;
 }
*/