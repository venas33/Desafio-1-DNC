const box = document.getElementById("box");
const img = document.querySelector("img");

box.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offserTop;

    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.2)";
});

box.addEventListener("mouseleave", () => {

    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";


})