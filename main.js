

const slideContainer = document.querySelector("slide-cont");
const slide =  document.querySelector(".slide-wrap");
var slides = document.querySelectorAll(".slide");
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
slide.addEventListener("transitionend", (event)=>{
    event.preventDefault();
    firstClone.id = "firstClone";
    slides = document.querySelectorAll(".slide");
    if(slides[counter].id == firstClone.id){
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
});
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
},sectionsOptions);    
fades.forEach(fade => {
    sectionsObserver.observe(fade);
});
sliders.forEach(slide => {
    sectionsObserver.observe(slide);
});
//Skills flex grow
const skills =  document.querySelectorAll(".skills-wrap span");
const skillwrap = document.querySelector(".skills-wrap");
function skillsFlex(index,skill){
        let flex = document.getElementsByClassName("flexgrow");
        flex[0].className = flex[0].className.replace("flexgrow","");
        skills[index].classList.add("flexgrow");
        skillwrap.style.setProperty('--skills',skill);
}

//MODAL
const modal = document.querySelector(".modal");
let worksTile = document.querySelectorAll(".works-tile");
const projectImage = document.querySelector(".project-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let ctr = 0;
var newArr = [];
var imgArr = [];
var projectTool = [];
var toolList = [];
var tileClicked;
const modalDisappear = "modalDisappear 300ms ease-in-out";
const modalAppear = "modalAppear 600ms ease-in-out";
const pop =  (ind,self)=> {
    let scrollHeight = window.pageYOffset;
    worksTile[ind].style.animation = modalDisappear;
    worksTile[ind].style.animationFillMode = "forwards";
    modal.style.animation = modalAppear;
    modal.style.display = "flex";
    modal.style.top = `${scrollHeight}px`;
    tileClicked = ind;
    let activeWorks = document.querySelectorAll(".works-wrap .works-tile");
    var image = $(`#${self.id}`).find("img").attr('src');
    insertTool(self);
    workSlider(activeWorks,image);
}
const insertTool = (s) => {
    $("#tool").find("ul").append($(`#${s.id}`).find("ul li").clone());
    bodyNoScroll();
}
const toolClear = () => {
    $("#tool").find("ul li").remove();
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.animation = modalDisappear;
        modal.style.animationFillMode = "forwards";
        worksTile[tileClicked].style.animation = modalAppear;
        worksTile[tileClicked].style.animationFillMode = "forwards";
        ctr = 0;
        bodyWithScroll();
        toolClear();
    }
  }

const workSlider = (workArray,img) => {
    newArr = [];
    imgArr = [];
    listArr = [];
    workArray.forEach(e => {
        if($(`#${e.id}`).is(":visible")){
            newArr.push(e);
        }
    });
    newArr.forEach(e => {
        imgArr.push($(`#${e.id}`).find("img").attr('src'));
          });
    projectImage.setAttribute('src',img);
    ctr = imgArr.indexOf(img);
}

nextBtn.addEventListener("click", ()=>{
    toolClear();
    ctr++;
    if(ctr < imgArr.length){
    changeImg(ctr);
    }
    else{
        ctr = 0;
        changeImg(ctr);
    }
    insertTool(newArr[ctr]);
   
});

prevBtn.addEventListener("click", ()=>{
    toolClear();
    ctr--;
    if(ctr >= 0){
        changeImg(ctr);
    }
    else{
        ctr = imgArr.length-1;
        changeImg(ctr);
    }
    insertTool(newArr[ctr]);
  
});

const html = document.querySelector("html");
const changeImg = (ctr) => {
    projectImage.setAttribute('src',imgArr[ctr]);
}
const bodyNoScroll = () => {html.style.overflowY = "hidden"};
const bodyWithScroll = () => {html.style.overflowY = "visible"};

//FOR EMAIL
(function() {
    function validEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    }
  
    function validateHuman(honeypot) {
      if (honeypot) {  //if hidden form filled up
        console.log("Robot Detected!");
        return true;
      } else {
        console.log("Welcome Human!");
      }
    }
  
    // get all data in form and return object
    function getFormData(form) {
      var elements = form.elements;
  
      var fields = Object.keys(elements).filter(function(k) {
            return (elements[k].name !== "honeypot");
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
  
      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;
  
        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });
  
      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
  
      console.log(formData);
      return formData;
    }
  
    function handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      var form = event.target;
      var data = getFormData(form);         // get the values submitted in the form
  
      /* OPTION: Remove this comment to enable SPAM prevention, see README.md
      if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
        return false;
      }
      */
  
      if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
        var invalidEmail = form.querySelector(".email-invalid");
        if (invalidEmail) {
          invalidEmail.style.display = "block";
          return false;
        }
      } else {
        disableAllButtons(true);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            var formElements = document.querySelector(".alert");
            if (formElements) {
              formElements.style.animation = "pop 6000ms ease-in-out";
              formElements.style.animationFillMode = "forwards";
              clearAllBox(form);
            setTimeout(animClear,6050);
            }
            /*var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
              thankYouMessage.style.display = "block";
            }*/
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      }
    }
    
    function animClear(){
      var formElements = document.querySelector(".alert")
      formElements.style.animation = "none";
      console.log("clear");
      disableAllButtons(false);
    }
    function loaded() {
      console.log("Contact form submission handler loaded successfully.");
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);
  
    function disableAllButtons(result) {
      var buttons = document.querySelector(".sendBtn");
      
        buttons.disabled = result;
      
      /* for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }*/
    }

    function clearAllBox(form){
      let inputs = form.querySelectorAll("input");
      let textarea = form.querySelector("textarea");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
      textarea.value = "";
    }
  })();
  