let btn1=document.querySelector(".one");
let btn2=document.querySelector(".two");
let btn3=document.querySelector(".three");
let btn4=document.querySelector(".four");
let btn5=document.querySelector(".five");
let btn6=document.querySelector(".six");
let btn11=document.querySelector(".one1");
let btn22=document.querySelector(".two2");
let btn33=document.querySelector(".three3");
let btn44=document.querySelector(".four4");
let btn55=document.querySelector(".five5");
let btn66=document.querySelector(".six6");


document.querySelectorAll('.overlay-button').forEach(button => {
    button.addEventListener('click', function() {
        const overlay = this.parentElement.querySelector('.overlay'); 
        overlay.classList.add('active'); 
  });
});

document.querySelectorAll('.cancel').forEach(button => {
    button.addEventListener('click', function() {
        const overlay = this.parentElement; 
        overlay.classList.remove('active'); 

       
    });
});
btn1.addEventListener('click',()=>{
    btn1.classList.add("bo");
})
btn2.addEventListener('click',()=>{
    btn2.classList.add("bo");
})
btn3.addEventListener('click',()=>{
    btn3.classList.add("bo");
})
btn4.addEventListener('click',()=>{
    btn4.classList.add("bo");
})
btn5.addEventListener('click',()=>{
    btn5.classList.add("bo");
})
btn6.addEventListener('click',()=>{
    btn6.classList.add("bo");
})
btn11.addEventListener('click',()=>{
    setTimeout(()=>{
        btn1.classList.remove("bo");

    },600);
})
btn22.addEventListener('click',()=>{
    setTimeout(()=>{
        btn2.classList.remove("bo");

    },600);
})
btn33.addEventListener('click',()=>{
    setTimeout(()=>{
        btn3.classList.remove("bo");
 },600);
})
btn44.addEventListener('click',()=>{
    setTimeout(()=>{
        btn4.classList.remove("bo");
    },600);
})
btn55.addEventListener('click',()=>{
    setTimeout(()=>{
        btn5.classList.remove("bo");

    },600);
})
btn66.addEventListener('click',()=>{
    setTimeout(()=>{
        btn6.classList.remove("bo");

    },600);})

window.onscroll = function() {
    const button = document.getElementById("scrollButton");
    if (document.body.scrollTop ===0 || document.documentElement.scrollTop === 0) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("scrollButton").onclick = function() {
    window.scrollTo({
        top: 550,
        behavior: 'smooth' 
    });
};
let btn111 = document.querySelector(".btn111");
let mainuser = document.querySelector(".main-ui");
let body = document.querySelector("body");
let spinner2 = document.querySelector(".spinner2");
let btn222=document.querySelector(".btn222");
btn111.addEventListener("click", () => {
    mainuser.style.opacity = 0;
    body.style.backgroundColor = "black";
    
    spinner2.style.opacity = "1";

    setTimeout(() => {
        window.open('index2.html', '_blank'); 
        mainuser.style.opacity = "1"; 
        spinner2.style.opacity = "0"; 
    }, 2000);
});
btn222.addEventListener("click", () => {
    mainuser.style.opacity = 0;
    body.style.backgroundColor = "black";
    
    spinner2.style.opacity = "1";

    setTimeout(() => {
        window.open('index.html', '_blank'); 
        mainuser.style.opacity = "1"; 
        spinner2.style.opacity = "0"; 
    }, 2000);
});