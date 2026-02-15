let yesbtn=document.querySelector('#yesbtn');
let noBtn=document.querySelector('#nobtn');
let src=document.querySelector("#love");
let heading=document.querySelector("#heading");
noBtn.addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesbtn.addEventListener("click",()=>{
    src.setAttribute("src","yay.gif");
    src.style.height="300px";
    src.style.width="300px";
    yesbtn.style.display="none";
    nobtn.style.display="none";
    heading.style.display="none";
});