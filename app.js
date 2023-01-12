//event//
document.querySelector(".container").addEventListener("mousemove", canan);

function canan(e) {
    document.querySelector(".container").style.backgroundColor = 
    `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`

}
