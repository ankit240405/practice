let url="https://api.breakingbadquotes.xyz/v1/quotes";
async function breaking() {
    try {
        let res = await axios.get(url);
        return res.data[0].quote; 

    } catch (error) {
        return "Error fetching quote:";
    }
}
async function bad() {
    try {
        let res = await axios.get(url);
        console.log(res.data[0].author);
        return res.data[0].author; 
        
    } catch (error) {
        return "Error fetching quote:";
    }
}
let para=document.createElement("p");

let btn=document.querySelector("#Guess");
btn.addEventListener("click",async ()=>{
    para.setAttribute("class","para");
    let aud=document.querySelector("audio");
    aud.setAttribute("controls","");
    aud.play();
    document.body.appendChild(para);
    para.innerText="";
    let info=await breaking();
    para.innerText=info;
});
let btn2=document.querySelector(".answer");
btn2.addEventListener("click",async ()=>{
    let information=await bad();
    let input=document.querySelector(".input");
    if(input.value===information || input.value===information.toLowerCase()) {
      para.innerText="Your guess is correct.";
      input.style.backgroundColor="green";
      setTimeout(()=>{
        input.style.backgroundColor="black";},1000)
    }
    else if(input.value==="") {
        alert("Please enter something.")
    }
    else{
        para.innerText=`Your guess is incorrect.The correct answer is ${information}.`;
        input.style.backgroundColor="red";
        setTimeout(()=>{
          input.style.backgroundColor="black";},1000)
    }
    input.value="";

})


