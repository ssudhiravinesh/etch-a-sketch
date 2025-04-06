const container = document.querySelector(".container");
const colors = [
    "#39FF14", "#FF3131", "#F6F930", "#0FF0FC", "#FF44CC", "#CFFF04",
    "#FF6EC7", "#F88379", "#50C878", "#7DF9FF", "#FF00FF", "#FFFF33",
    "#FF1493", "#ADFF2F", "#FF8C00", "#00FFEF", "#FF007F", "#DFFF00",
    "#FFB6C1", "#00FFFF"
  ];
  
for(let i=0; i<256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.addEventListener("mouseenter", ()=>{
        div.style.backgroundColor= colors[Math.floor(Math.random() * colors.length)];
    });
    div.style.height = "calc(100%/16)";
    div.style.width = "calc(100%/16)";
    container.append(div);
}

const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    let res = Number(prompt("Enter your resolution multiplier (>0 & <100). \n Example: If you want 16*16, do enter 16"));
      
    if(!isNaN(res) && res>0) {
        while (res>100 || isNaN(res)) {
            res = parseInt(prompt("Please enter a valid resolution multiplier < 100"));
        } 
        const heading = document.querySelector("h3");
        heading.textContent = `${res}*${res}`;
        container.textContent="";
        for(let i=0; i<res*res; i++) {
            const div = document.createElement("div");
            div.classList.add("grid");
            div.style.height = `calc(100%/${res})`;
            div.style.width = `calc(100%/${res})`;
            div.addEventListener("mouseenter", ()=>{
                div.style.backgroundColor= colors[Math.floor(Math.random() * colors.length)];
            });
            container.append(div);
        }
    } else {
        while (isNaN(res) || res<0) {
            res = Number(prompt(("Enter a valid number for the resolution")));
        }
    }
     
});


const reset = document.querySelector(".reset");
reset.addEventListener("click", ()=>{
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.style.backgroundColor = "white";
    });
});