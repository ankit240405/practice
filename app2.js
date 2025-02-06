let btn=document.querySelector(".btn2");
let mainbox=document.querySelector(".mainboxer");
let spinner=document.querySelector(".spinner");
let image=document.querySelector(".imag");
let btnn=document.querySelector(".btnn");
btn.addEventListener("click",()=>{
    mainbox.style.backgroundImage="none";
    mainbox.style.backgroundColor="black";
    image.style.opacity=0;
    btnn.style.opacity=0;
    spinner.style.opacity="1";
    btn.style.opacity=0;
    setTimeout(()=> {
        window.open('index.html', '_blank');      
        mainbox.style.backgroundImage="url('https://steamuserimages-a.akamaihd.net/ugc/575690321265765209/099419F01F6BBFE21852CC8BA2B93D0EBD20FE99/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')";
        image.style.opacity="1";
        btnn.style.opacity="1";
        spinner.style.opacity="0";
        btn.style.opacity="1";
    }, 2000);
    
})
btnn.addEventListener("click",()=>{
    mainbox.style.backgroundImage="none";
    mainbox.style.backgroundColor="black";
    image.style.opacity=0;
    btnn.style.opacity=0;
    spinner.style.opacity="1";
    btn.style.opacity=0;
    setTimeout(()=> {
        window.open('index3.html', '_blank');      
        mainbox.style.backgroundImage="url('https://steamuserimages-a.akamaihd.net/ugc/575690321265765209/099419F01F6BBFE21852CC8BA2B93D0EBD20FE99/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')";
        image.style.opacity="1";
        btnn.style.opacity="1";
        spinner.style.opacity="0";
        btn.style.opacity="1";
    }, 2000);
    
})