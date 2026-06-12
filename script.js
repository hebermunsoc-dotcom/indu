document
.getElementById("celebrateBtn")
.addEventListener("click",()=>{

const text =
document.getElementById("confettiText");

text.innerHTML = `
🎉 🎊 🎉 🎊 🎉
<br>
UMAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHH ❤️
<br>
🎂 ❤️ 🌟
`;

for(let i=0;i<30;i++){

const heart =
document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = Math.random()*100 + "vw";
heart.style.top = "-20px";
heart.style.fontSize = "2rem";
heart.style.zIndex = "9999";

document.body.appendChild(heart);

heart.animate(
[
{transform:"translateY(0px)"},
{transform:"translateY(110vh)"}
],
{
duration:3000 + Math.random()*2000
}
);

setTimeout(()=>{
heart.remove();
},5000);

}

});
