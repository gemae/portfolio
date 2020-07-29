

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
  /*  let allWork= document.querySelectorAll(".works-wrap .works-tile");
    allWork.forEach(l =>{
        l.style.display = 'flex';
    });
    let work = document.querySelector(".works-wrap");
    let child = work.children;
    for(e of child){
       // if(e.style.display != "inline-block"){
            $(document).ready(function(){
              $(`#${e.id}`).hide("slow");
              console.log(`#${e.id}`);
           //e.style.display = "none";
          // $(e).hide();
            });
        // }
    }
    let work = document.querySelectorAll(".works-wrap div");
    work.forEach(e=>{
        $(document).ready(function(){
            $(`#${e.id}`).hide("slow");
            console.log(`#${e.id}`);
          });
    });
*/
    let workName = ['works-tile','web','app'];
    let openWork = document.querySelectorAll(`.${workName[li]}`);
    var closeWork;
    //$("#wrap > div").toggle("slow");
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
            //  if(el.style.display == "inline-block"){
       //     return;
       // }
        //else{
       // $(`#${el.id}`).hide("slow").css("display","none");
      
       $(`#${el.id}`).show("slow");
       // el.style.display = "inline-block";
        //el.style.transition = "1s";
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


//naigation set link based on scrolled height
const body = document.querySelector("body");
const home = document.querySelector(".home");
const aboutMe = document.querySelector(".about-me");
const work = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");


window.onscroll = function() {
let bodyH  = body.clientHeight;
let homeH = home.clientHeight;
let aboutMeH = aboutMe.clientHeight;
let forLast = bodyH-window.innerHeight;
let scrollHeight = window.pageYOffset;
headH = home.clientHeight;

    if(scrollHeight >= homeH-60 & scrollHeight < homeH+aboutMeH){
        currentNav(cur,listNav[1]);
    }else if(scrollHeight >= aboutMeH+homeH & scrollHeight < forLast){
        currentNav(cur,listNav[2]);
    }
    else if(scrollHeight >= forLast){
        currentNav(cur,listNav[3]);
    }
    else{
        currentNav(cur,listNav[0]);
    }
 
};
//Navigation intersection
var headH = home.clientHeight;
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

sectionTwoObserver.observe(sectionTwo);

//home observer
const sectionOne = document.querySelector(".home");
const sectionOneOptions = {

    threshold: 0.5
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

    rootMargin: "0px 0px -130px 0px"
    
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
},sectionsOptions);

sliders.forEach(slide => {
    sectionsObserver.observe(slide);
})
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