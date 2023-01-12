//event//
document.querySelector(".container").addEventListener("mousemove", steve);

function steve(e) {
    document.querySelector(".container").style.backgroundColor = 
    `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`

}
